// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// PhonePe SDK imports
const {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} = require("pg-sdk-node");

const { randomUUID } = require("crypto");

const app = express();

// -------------------------
// CORS Configuration
// -------------------------
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:8080'],
  credentials: true
}));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static('uploads'));

// -------------------------
// MySQL Database Connection
// -------------------------
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Set your MySQL password
  database: 'sahyadri_admissions',
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create test table
  const createTable = `
    CREATE TABLE IF NOT EXISTS admissions_test (
      id INT PRIMARY KEY AUTO_INCREMENT,
      application_id VARCHAR(50) UNIQUE,
      student_name VARCHAR(100),
      father_name VARCHAR(100),
      mobile VARCHAR(15),
      email VARCHAR(100),
      payment_status ENUM('pending', 'processing', 'paid', 'failed') DEFAULT 'pending',
      transaction_id VARCHAR(100),
      amount DECIMAL(10,2),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS test_payments (
      id INT PRIMARY KEY AUTO_INCREMENT,
      application_id VARCHAR(50),
      transaction_id VARCHAR(100) UNIQUE,
      amount DECIMAL(10,2),
      status VARCHAR(50),
      phonepe_order_id VARCHAR(100),
      payment_response JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  
  db.query(createTable, (err) => {
    if (err) console.error('Error creating tables:', err);
    else console.log('Test tables created/verified successfully');
  });
});

// -------------------------
// File Upload Configuration (Simplified)
// -------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// -------------------------
// PHONEPE CREDENTIALS
// -------------------------
const clientId = "M23064D4HJ2UR_2512041825";
const clientSecret = "YjVkN2ZmNjAtYTE4YS00MmI5LTkwNzktNTgxOTE0NTc5ZTI2";
const clientVersion = 1;
const environment = Env.SANDBOX; // Change to Env.PRODUCTION when live

// Initialize PhonePe client
const phonepeClient = StandardCheckoutClient.getInstance(
  clientId,
  clientSecret,
  clientVersion,
  environment
);

// -------------------------
// SIMPLE FORM SUBMISSION
// -------------------------
app.post('/api/simple-submit', upload.single('studentPhoto'), async (req, res) => {
  try {
    const { studentName, fatherName, mobile, email } = req.body;
    
    if (!studentName || !fatherName || !mobile) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill all required fields' 
      });
    }

    // Generate application ID
    const applicationId = 'TEST' + Date.now() + Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // Insert into database
    const query = `
      INSERT INTO admissions_test 
      (application_id, student_name, father_name, mobile, email, amount) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const values = [applicationId, studentName, fatherName, mobile, email, 500];
    
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ 
          success: false, 
          message: 'Failed to save application' 
        });
      }
      
      res.json({
        success: true,
        application_id: applicationId,
        message: 'Application submitted successfully'
      });
    });
    
  } catch (error) {
    console.error('Error in simple-submit:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// -------------------------
// CREATE PAYMENT ORDER
// -------------------------
app.post("/api/create-payment", async (req, res) => {
  try {
    const { application_id, amount } = req.body;
    
    if (!application_id || !amount) {
      return res.status(400).json({ 
        success: false,
        error: "Application ID and amount are required" 
      });
    }
    
    // Check if application exists
    db.query(
      'SELECT * FROM admissions_test WHERE application_id = ?',
      [application_id],
      async (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ 
            success: false,
            error: 'Database error' 
          });
        }
        
        if (results.length === 0) {
          return res.status(404).json({ 
            success: false,
            error: 'Application not found' 
          });
        }
        
        const merchantOrderId = randomUUID();
        const redirectUrl = "http://localhost:4000/api/payment-callback";
        
        try {
          const orderRequest = StandardCheckoutPayRequest.builder()
            .merchantOrderId(merchantOrderId)
            .amount(amount * 100) // Convert to paise
            .redirectUrl(redirectUrl)
            .build();
          
          const response = await phonepeClient.pay(orderRequest);
          
          // Save payment record
          const paymentQuery = `
            INSERT INTO test_payments 
            (application_id, transaction_id, amount, phonepe_order_id, status)
            VALUES (?, ?, ?, ?, 'initiated')
          `;
          
          db.query(paymentQuery, [
            application_id,
            merchantOrderId,
            amount,
            response.transactionId || merchantOrderId
          ], (err) => {
            if (err) console.error('Error saving payment:', err);
          });
          
          // Update application status
          db.query(
            'UPDATE admissions_test SET payment_status = "processing" WHERE application_id = ?',
            [application_id]
          );
          
          return res.json({
            success: true,
            merchantOrderId,
            checkoutUrl: response.redirectUrl,
            transactionId: response.transactionId
          });
          
        } catch (phonepeError) {
          console.error("PhonePe API error:", phonepeError);
          res.status(500).json({ 
            success: false,
            error: "Failed to create payment order" 
          });
        }
      }
    );
    
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// -------------------------
// PAYMENT CALLBACK
// -------------------------
app.get("/api/payment-callback", async (req, res) => {
  try {
    const { transactionId, code, merchantOrderId } = req.query;
    
    const orderId = transactionId || merchantOrderId;
    
    if (!orderId) {
      return res.redirect('http://localhost:3000/payment-failed?error=Invalid callback');
    }
    
    // Check transaction status
    const response = await phonepeClient.getOrderStatus(orderId);
    
    let status = 'failed';
    if (response.code === 'PAYMENT_SUCCESS') {
      status = 'paid';
    }
    
    // Update payment record
    db.query(
      `UPDATE test_payments SET status = ?, payment_response = ? 
       WHERE transaction_id = ? OR phonepe_order_id = ?`,
      [status, JSON.stringify(response), orderId, orderId]
    );
    
    // Update application
    db.query(
      `UPDATE admissions_test 
       SET payment_status = ?, transaction_id = ? 
       WHERE application_id = (
         SELECT application_id FROM test_payments 
         WHERE transaction_id = ? OR phonepe_order_id = ?
       )`,
      [status, orderId, orderId, orderId]
    );
    
    // Get application ID for redirect
    db.query(
      `SELECT a.application_id FROM admissions_test a
       JOIN test_payments p ON a.application_id = p.application_id
       WHERE p.transaction_id = ? OR p.phonepe_order_id = ?`,
      [orderId, orderId],
      (err, results) => {
        if (err) {
          console.error('Error getting application:', err);
          return res.redirect(`http://localhost:3000/payment-failed?error=Database error`);
        }
        
        const appId = results.length > 0 ? results[0].application_id : '';
        
        if (status === 'paid') {
          res.redirect(`http://localhost:3000/payment-success?application_id=${appId}`);
        } else {
          res.redirect(`http://localhost:3000/payment-failed?order_id=${orderId}`);
        }
      }
    );
    
  } catch (err) {
    console.error("Callback error:", err);
    res.redirect('http://localhost:3000/payment-failed?error=Callback error');
  }
});

// -------------------------
// CHECK PAYMENT STATUS
// -------------------------
app.get("/api/check-payment/:applicationId", async (req, res) => {
  try {
    const { applicationId } = req.params;
    
    db.query(
      `SELECT a.*, p.status as payment_status_detail 
       FROM admissions_test a
       LEFT JOIN test_payments p ON a.application_id = p.application_id
       WHERE a.application_id = ?`,
      [applicationId],
      (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ 
            success: false,
            error: 'Database error' 
          });
        }
        
        if (results.length === 0) {
          return res.status(404).json({ 
            success: false,
            error: 'Application not found' 
          });
        }
        
        res.json({
          success: true,
          application: results[0]
        });
      }
    );
    
  } catch (err) {
    console.error("Status check error:", err);
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// -------------------------
// GET ALL APPLICATIONS (For admin)
// -------------------------
app.get("/api/applications", (req, res) => {
  db.query(
    'SELECT * FROM admissions_test ORDER BY created_at DESC',
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ 
          success: false,
          error: 'Database error' 
        });
      }
      
      res.json({
        success: true,
        applications: results
      });
    }
  );
});

// -------------------------
// TEST ENDPOINT
// -------------------------
app.get("/api/test", (req, res) => {
  res.json({ 
    success: true, 
    message: "API is working!", 
    timestamp: new Date().toISOString() 
  });
});

// -------------------------
// START SERVER
// -------------------------
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API Endpoints:`);
  console.log(`  POST /api/simple-submit`);
  console.log(`  POST /api/create-payment`);
  console.log(`  GET  /api/payment-callback`);
  console.log(`  GET  /api/check-payment/:applicationId`);
  console.log(`  GET  /api/applications`);
  console.log(`  GET  /api/test`);
});