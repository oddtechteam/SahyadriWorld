// src/components/RegisterForm.tsx
import React, { ChangeEvent, useState, useEffect } from "react";
import Swal from "sweetalert2";

/* ================== CONFIG ================== */
const API_BASE_URL = "http://localhost:4000"; // Backend server URL
const ADMISSION_FEE = 500; // ₹500

/* -------------------- Types -------------------- */
interface Sibling {
  id: string;
  name: string;
  age: string;
  std: string;
  institution: string;
}

interface PreviousEducation {
  id: string;
  year: string;
  school: string;
  standard: string;
  marks: string;
}

interface FormData {
  // Step 1: Basic Info
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  religion: string;
  caste: string;
  community: string;
  bloodGroup: string;
  aadharNo: string;
  motherTongue: string;
  residentialAddress: string;
  correspondenceAddress: string;
  mobileNo: string;
  emailAddress: string;
  distanceFromSchool: string;
  preferredMobile: string;
  
  // Step 2: Family Details
  fatherName: string;
  fatherOccupation: string;
  fatherQualification: string;
  fatherOfficeAddress: string;
  fatherMobile: string;
  fatherEmail: string;
  fatherOfficePhone: string;
  
  motherName: string;
  motherOccupation: string;
  motherQualification: string;
  motherOfficeAddress: string;
  motherMobile: string;
  motherEmail: string;
  motherOfficePhone: string;
  
  guardianName: string;
  guardianRelation: string;
  guardianOccupation: string;
  guardianOfficeAddress: string;
  guardianMobile: string;
  guardianEmail: string;
  guardianOfficePhone: string;
  
  // Step 3: Medical & Education
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactNo: string;
  
  awards: string;
  hearing: string;
  hearingExplanation: string;
  vision: string;
  useSpectacles: boolean;
  visionExplanation: string;
  sitting: string;
  standing: string;
  walking: string;
  speech: string;
  medicalConditions: string;
  generalWellness: string;
  allergies: string;
  vaccinations: string;
  
  // Step 4: Declaration
  declarationSignature: string;
  
  // Dynamic arrays
  siblings: Sibling[];
  previousEducation: PreviousEducation[];
  
  // Files
  studentPhoto: File | null;
  fatherPhoto: File | null;
  motherPhoto: File | null;
}

const RegisterForm: React.FC = () => {
  // UI state
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [applicationId, setApplicationId] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  
  const generateId = () => Math.random().toString(36).substring(2, 11);

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    birthPlace: "",
    religion: "",
    caste: "",
    community: "",
    bloodGroup: "",
    aadharNo: "",
    motherTongue: "",
    residentialAddress: "",
    correspondenceAddress: "",
    mobileNo: "",
    emailAddress: "",
    distanceFromSchool: "",
    preferredMobile: "",
    
    // Step 2
    fatherName: "",
    fatherOccupation: "",
    fatherQualification: "",
    fatherOfficeAddress: "",
    fatherMobile: "",
    fatherEmail: "",
    fatherOfficePhone: "",
    
    motherName: "",
    motherOccupation: "",
    motherQualification: "",
    motherOfficeAddress: "",
    motherMobile: "",
    motherEmail: "",
    motherOfficePhone: "",
    
    guardianName: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianOfficeAddress: "",
    guardianMobile: "",
    guardianEmail: "",
    guardianOfficePhone: "",
    
    // Step 3
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactNo: "",
    
    awards: "",
    hearing: "no",
    hearingExplanation: "",
    vision: "no",
    useSpectacles: false,
    visionExplanation: "",
    sitting: "",
    standing: "",
    walking: "",
    speech: "",
    medicalConditions: "",
    generalWellness: "",
    allergies: "",
    vaccinations: "",
    
    // Step 4
    declarationSignature: "",
    
    // Arrays
    siblings: [{ id: generateId(), name: "", age: "", std: "", institution: "" }],
    previousEducation: [{ id: generateId(), year: "", school: "", standard: "", marks: "" }],
    
    // Files
    studentPhoto: null,
    fatherPhoto: null,
    motherPhoto: null,
  });

  // File previews
  const [previews, setPreviews] = useState({
    student: "",
    father: "",
    mother: "",
  });

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle file uploads
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>, field: keyof Pick<FormData, 'studentPhoto' | 'fatherPhoto' | 'motherPhoto'>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      Swal.fire("Error", "Please upload an image file (JPG, PNG, etc.)", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire("Error", "File size should be less than 5MB", "error");
      return;
    }

    setFormData(prev => ({ ...prev, [field]: file }));
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const previewKey = field === 'studentPhoto' ? 'student' : field === 'fatherPhoto' ? 'father' : 'mother';
      setPreviews(prev => ({ ...prev, [previewKey]: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // Handle dynamic arrays
  const addSibling = () => {
    setFormData(prev => ({
      ...prev,
      siblings: [...prev.siblings, { id: generateId(), name: "", age: "", std: "", institution: "" }]
    }));
  };

  const updateSibling = (id: string, field: keyof Sibling, value: string) => {
    setFormData(prev => ({
      ...prev,
      siblings: prev.siblings.map(sibling => 
        sibling.id === id ? { ...sibling, [field]: value } : sibling
      )
    }));
  };

  const removeSibling = (id: string) => {
    setFormData(prev => ({
      ...prev,
      siblings: prev.siblings.filter(sibling => sibling.id !== id)
    }));
  };

  const addPreviousEducation = () => {
    setFormData(prev => ({
      ...prev,
      previousEducation: [...prev.previousEducation, { 
        id: generateId(), 
        year: "", 
        school: "", 
        standard: "", 
        marks: "" 
      }]
    }));
  };

  const updatePreviousEducation = (id: string, field: keyof PreviousEducation, value: string) => {
    setFormData(prev => ({
      ...prev,
      previousEducation: prev.previousEducation.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const removePreviousEducation = (id: string) => {
    setFormData(prev => ({
      ...prev,
      previousEducation: prev.previousEducation.filter(item => item.id !== id)
    }));
  };

  // Validation functions
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.birthDate) newErrors.birthDate = "Date of birth is required";
        if (!formData.community) newErrors.community = "Community is required";
        if (!formData.residentialAddress.trim()) newErrors.residentialAddress = "Residential address is required";
        if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required";
        else if (!/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = "Enter a valid 10-digit mobile number";
        if (formData.emailAddress && !/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Enter a valid email address";
        if (formData.aadharNo && !/^\d{12}$/.test(formData.aadharNo)) newErrors.aadharNo = "Enter a valid 12-digit Aadhar number";
        if (!formData.studentPhoto) newErrors.studentPhoto = "Student photo is required";
        break;

      case 2:
        if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
        if (!formData.motherName.trim()) newErrors.motherName = "Mother's name is required";
        if (!formData.fatherPhoto) newErrors.fatherPhoto = "Father's photo is required";
        if (!formData.motherPhoto) newErrors.motherPhoto = "Mother's photo is required";
        break;

      case 3:
        break;

      case 4:
        if (!formData.declarationSignature.trim()) newErrors.declarationSignature = "Signature is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill all required fields correctly",
        icon: "error",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // CORRECTED Payment Integration
  const initiatePayment = async () => {
    if (!validateStep(4)) {
      Swal.fire("Error", "Please complete all required fields", "error");
      return;
    }

    setIsSubmitting(true);
    setPaymentStatus('processing');

    try {
      // Step 1: Submit application to backend
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'siblings' || key === 'previousEducation') {
          // Stringify arrays
          formDataToSend.append(key, JSON.stringify(value));
        } else if (key === 'useSpectacles') {
          // Convert boolean to string
          formDataToSend.append(key, value ? 'true' : 'false');
        } else if (key === 'studentPhoto' || key === 'fatherPhoto' || key === 'motherPhoto') {
          // Append files if they exist
          if (value instanceof File) {
            formDataToSend.append(key, value);
          }
        } else if (value !== null && value !== undefined && value !== '') {
          // Append other values
          formDataToSend.append(key, value.toString());
        }
      });

      console.log("Submitting application...");
      const submitResponse = await fetch(`${API_BASE_URL}/submit-application`, {
        method: 'POST',
        body: formDataToSend,
      });

      // Check if response is JSON
      const contentType = submitResponse.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await submitResponse.text();
        console.error("Non-JSON response:", text);
        throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
      }

      const submitResult = await submitResponse.json();
      console.log("Submit result:", submitResult);

      if (!submitResult.success) {
        throw new Error(submitResult.message || 'Failed to submit application');
      }

      const appId = submitResult.application_id;
      setApplicationId(appId);

      // Step 2: Create payment order
      const paymentData = {
        application_id: appId,
        amount: ADMISSION_FEE, // Backend will convert to paise
      };

      console.log("Creating payment order...", paymentData);
      const paymentResponse = await fetch(`${API_BASE_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      // Check if response is JSON
      const paymentContentType = paymentResponse.headers.get("content-type");
      if (!paymentContentType || !paymentContentType.includes("application/json")) {
        const text = await paymentResponse.text();
        console.error("Non-JSON payment response:", text);
        throw new Error(`Payment server returned non-JSON response: ${text.substring(0, 100)}`);
      }

      const paymentResult = await paymentResponse.json();
      console.log("Payment result:", paymentResult);

      if (paymentResult.success) {
        // Redirect to PhonePe payment page
        window.location.href = paymentResult.checkoutUrl;
      } else {
        throw new Error(paymentResult.error || paymentResult.message || 'Payment initiation failed');
      }

    } catch (error: any) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      
      Swal.fire({
        title: "Payment Error",
        text: error.message || "Failed to process payment. Please try again.",
        icon: "error",
        confirmButtonColor: "#dc3545",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check for payment callback on component mount
  useEffect(() => {
    const checkPaymentStatus = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const transactionId = urlParams.get('transaction_id');
      const paymentSuccess = urlParams.get('payment_success');
      
      console.log("URL Params:", { transactionId, paymentSuccess });

      if (transactionId || paymentSuccess === 'true') {
        try {
          // If we have an application ID, check status
          if (applicationId) {
            const statusResponse = await fetch(`${API_BASE_URL}/check-payment/${applicationId}`);
            if (statusResponse.ok) {
              const statusResult = await statusResponse.json();
              
              if (statusResult.success && statusResult.application.payment_status === 'paid') {
                setPaymentStatus('success');
                
                Swal.fire({
                  title: "Payment Successful!",
                  text: "Your application has been submitted successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              }
            }
          } else if (transactionId) {
            // Try to get application details from transaction
            setPaymentStatus('success');
            
            Swal.fire({
              title: "Payment Successful!",
              text: `Transaction ID: ${transactionId}`,
              icon: "success",
              confirmButtonColor: "#28a745",
            });
          }
        } catch (error) {
          console.error('Error checking payment status:', error);
        }
      }
    };

    checkPaymentStatus();
  }, [applicationId]);

  // Render success screen
  if (paymentStatus === 'success') {
    return (
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            fontSize: '80px',
            color: '#4CAF50',
            marginBottom: '20px'
          }}>
            <i className="fas fa-check-circle"></i>
          </div>
          
          <h1 style={{ 
            color: '#2c3e50',
            marginBottom: '20px',
            fontSize: '32px'
          }}>
            Application Submitted Successfully!
          </h1>
          
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px',
            margin: '25px 0',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '10px' }}>
              <strong>Application ID:</strong> {applicationId || 'SW' + Date.now()}
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>Student Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>Payment Amount:</strong> ₹{ADMISSION_FEE}
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>Payment Status:</strong> <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>Paid</span>
            </p>
          </div>
          
          <p style={{ 
            color: '#666',
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            Thank you for submitting the admission form for Sahyadri World School. 
            We have received your payment and application. Our admissions team will 
            review your application and contact you within 3-5 working days.
          </p>
          
          <div style={{ marginTop: '30px' }}>
            <button 
              onClick={() => window.location.href = '/'}
              style={{
                padding: '14px 40px',
                backgroundColor: '#1a4b8c',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginRight: '15px',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#153a6b'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a4b8c'}
            >
              Back to Home
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              style={{
                padding: '14px 40px',
                backgroundColor: '#f8b739',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6a532'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f8b739'}
            >
              Submit Another Application
            </button>
          </div>
          
          <div style={{
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid #eee',
            fontSize: '14px',
            color: '#888'
          }}>
            <p>Need help? Contact our admissions office at <strong>admissions@sahyadriworldschool.edu.in</strong></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      padding: '20px',
      background: 'linear-gradient(180deg, #f5f8ff 0%, #fff 100%)',
      minHeight: '100vh'
    }}>
      {/* Inline Styles */}
      <style>{`
        .card {
          max-width: 1100px;
          margin: 0 auto;
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(9, 30, 66, 0.08);
        }
        .title {
          color: #1a4b8c;
          font-size: 28px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
        }
        .subtitle {
          color: #004080;
          text-align: center;
          margin-bottom: 30px;
          font-size: 14px;
        }
        .section-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 20px 0;
        }
        .section-pill {
          background: #1a4b8c;
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
        }
        .section-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #1a4b8c 0%, #f8b739 100%);
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #444;
          font-size: 14px;
        }
        .required::after {
          content: " *";
          color: #dc3545;
        }
        .form-control {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.3s;
          background: #fbfdff;
        }
        .form-control:focus {
          outline: none;
          border-color: #1a4b8c;
          box-shadow: 0 0 0 3px rgba(26, 75, 140, 0.1);
        }
        .error {
          color: #dc3545;
          font-size: 12px;
          margin-top: 5px;
        }
        .error-border {
          border-color: #dc3545 !important;
        }
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-prev {
          background: #f0f0f0;
          color: #555;
        }
        .btn-prev:hover {
          background: #e0e0e0;
        }
        .btn-next {
          background: #1a4b8c;
          color: white;
        }
        .btn-next:hover {
          background: #153a6b;
        }
        .btn-pay {
          background: #f8b739;
          color: white;
        }
        .btn-pay:hover {
          background: #e6a532;
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .photo-upload {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }
        .photo-box {
          flex: 1;
          border: 2px dashed #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s;
        }
        .photo-box:hover {
          border-color: #1a4b8c;
        }
        .photo-icon {
          font-size: 40px;
          color: #aaa;
          margin-bottom: 10px;
        }
        .photo-preview {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo-preview img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
        .declaration-box {
          background: #f9f9f9;
          border-left: 4px solid #1a4b8c;
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          position: relative;
        }
        .progress-bar::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #e0e0e0;
          z-index: 1;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }
        .step-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .step.active .step-icon {
          background: #1a4b8c;
        }
        .step.completed .step-icon {
          background: #28a745;
        }
        .step-label {
          font-size: 12px;
          font-weight: 600;
          color: #777;
        }
        .step.active .step-label {
          color: #1a4b8c;
        }
        @media (max-width: 900px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .photo-upload {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="card">
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 className="title">Sahyadri World School - Admission Form</h1>
          <div className="subtitle">
            Admission Form Fee: <strong>₹{ADMISSION_FEE}</strong> | 
            Powered by PhonePe Payment Gateway
          </div>
        </header>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
            <div className="step-icon">1</div>
            <div className="step-label">Student Details</div>
          </div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
            <div className="step-icon">2</div>
            <div className="step-label">Family Details</div>
          </div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
            <div className="step-icon">3</div>
            <div className="step-label">Medical History</div>
          </div>
          <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
            <div className="step-icon">4</div>
            <div className="step-label">Declaration & Payment</div>
          </div>
        </div>

        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div style={{
            background: '#f8d7da',
            color: '#721c24',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #f5c6cb'
          }}>
            <strong>Please fix the following errors:</strong>
            <ul style={{ margin: '5px 0 0 20px', padding: 0 }}>
              {Object.entries(errors).map(([field, error]) => (
                <li key={field}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Step 1: Student & Parent Information */}
        {currentStep === 1 && (
          <div>
            <div className="section-head">
              <div className="section-pill">Student Information</div>
              <div className="section-line"></div>
            </div>

            <div className="photo-upload">
              <div className="photo-box">
                <div className="photo-icon"><i className="fas fa-user"></i></div>
                <div className="photo-preview">
                  {previews.student ? (
                    <img src={previews.student} alt="Student" />
                  ) : (
                    <span style={{ color: '#777' }}>Student Photo</span>
                  )}
                </div>
                {errors.studentPhoto && <div className="error">{errors.studentPhoto}</div>}
                <input 
                  type="file" 
                  accept="image/*"
                  id="studentPhoto"
                  onChange={(e) => handleFileUpload(e, 'studentPhoto')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="studentPhoto" className="btn" style={{ 
                  background: formData.studentPhoto ? '#28a745' : '#1a4b8c', 
                  color: 'white', 
                  padding: '8px 16px',
                  marginTop: '10px'
                }}>
                  {formData.studentPhoto ? 'Change Photo' : 'Upload Photo'}
                </label>
              </div>

              <div className="photo-box">
                <div className="photo-icon"><i className="fas fa-male"></i></div>
                <div className="photo-preview">
                  {previews.father ? (
                    <img src={previews.father} alt="Father" />
                  ) : (
                    <span style={{ color: '#777' }}>Father's Photo</span>
                  )}
                </div>
                {errors.fatherPhoto && <div className="error">{errors.fatherPhoto}</div>}
                <input 
                  type="file" 
                  accept="image/*"
                  id="fatherPhoto"
                  onChange={(e) => handleFileUpload(e, 'fatherPhoto')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="fatherPhoto" className="btn" style={{ 
                  background: formData.fatherPhoto ? '#28a745' : '#1a4b8c', 
                  color: 'white', 
                  padding: '8px 16px',
                  marginTop: '10px'
                }}>
                  {formData.fatherPhoto ? 'Change Photo' : 'Upload Photo'}
                </label>
              </div>

              <div className="photo-box">
                <div className="photo-icon"><i className="fas fa-female"></i></div>
                <div className="photo-preview">
                  {previews.mother ? (
                    <img src={previews.mother} alt="Mother" />
                  ) : (
                    <span style={{ color: '#777' }}>Mother's Photo</span>
                  )}
                </div>
                {errors.motherPhoto && <div className="error">{errors.motherPhoto}</div>}
                <input 
                  type="file" 
                  accept="image/*"
                  id="motherPhoto"
                  onChange={(e) => handleFileUpload(e, 'motherPhoto')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="motherPhoto" className="btn" style={{ 
                  background: formData.motherPhoto ? '#28a745' : '#1a4b8c', 
                  color: 'white', 
                  padding: '8px 16px',
                  marginTop: '10px'
                }}>
                  {formData.motherPhoto ? 'Change Photo' : 'Upload Photo'}
                </label>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label required">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'error-border' : ''}`}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label required">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'error-border' : ''}`}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label required">Gender</label>
                <select
                  className={`form-control ${errors.gender ? 'error-border' : ''}`}
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
                {errors.gender && <div className="error">{errors.gender}</div>}
              </div>

              <div className="form-group">
                <label className="form-label required">Date of Birth</label>
                <input
                  type="date"
                  className={`form-control ${errors.birthDate ? 'error-border' : ''}`}
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                />
                {errors.birthDate && <div className="error">{errors.birthDate}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Place of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Religion</label>
                <input
                  type="text"
                  className="form-control"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Caste</label>
                <input
                  type="text"
                  className="form-control"
                  name="caste"
                  value={formData.caste}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label required">Community</label>
                <select
                  className={`form-control ${errors.community ? 'error-border' : ''}`}
                  name="community"
                  value={formData.community}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Community</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="GEN">GEN</option>
                  <option value="OTHERS">Others</option>
                </select>
                {errors.community && <div className="error">{errors.community}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-control"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Aadhar Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.aadharNo ? 'error-border' : ''}`}
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleInputChange}
                  maxLength={12}
                />
                {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Mother Tongue</label>
                <input
                  type="text"
                  className="form-control"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label required">Residential Address</label>
                <textarea
                  className={`form-control ${errors.residentialAddress ? 'error-border' : ''}`}
                  name="residentialAddress"
                  value={formData.residentialAddress}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
                {errors.residentialAddress && <div className="error">{errors.residentialAddress}</div>}
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Correspondence Address</label>
                <textarea
                  className="form-control"
                  name="correspondenceAddress"
                  value={formData.correspondenceAddress}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="(If different from residential address)"
                />
              </div>

              <div className="form-group">
                <label className="form-label required">Mobile Number</label>
                <input
                  type="tel"
                  className={`form-control ${errors.mobileNo ? 'error-border' : ''}`}
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  required
                  maxLength={10}
                />
                {errors.mobileNo && <div className="error">{errors.mobileNo}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.emailAddress ? 'error-border' : ''}`}
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
                {errors.emailAddress && <div className="error">{errors.emailAddress}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Distance from School (km)</label>
                <input
                  type="text"
                  className="form-control"
                  name="distanceFromSchool"
                  value={formData.distanceFromSchool}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
              <button type="button" className="btn btn-next" onClick={nextStep}>
                Next Step <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Family Details */}
        {currentStep === 2 && (
          <div>
            <div className="section-head">
              <div className="section-pill">Family Details</div>
              <div className="section-line"></div>
            </div>

            <h3 style={{ color: '#1a4b8c', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #f0f0f0' }}>
              Father's Details
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label required">Father's Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.fatherName ? 'error-border' : ''}`}
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                />
                {errors.fatherName && <div className="error">{errors.fatherName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="fatherQualification"
                  value={formData.fatherQualification}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="fatherOfficeAddress"
                  value={formData.fatherOfficeAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleInputChange}
                  maxLength={10}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="fatherEmail"
                  value={formData.fatherEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="fatherOfficePhone"
                  value={formData.fatherOfficePhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h3 style={{ color: '#1a4b8c', marginBottom: '15px', marginTop: '30px', paddingBottom: '10px', borderBottom: '2px solid #f0f0f0' }}>
              Mother's Details
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label required">Mother's Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.motherName ? 'error-border' : ''}`}
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
                {errors.motherName && <div className="error">{errors.motherName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="motherQualification"
                  value={formData.motherQualification}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="motherOfficeAddress"
                  value={formData.motherOfficeAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleInputChange}
                  maxLength={10}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="motherEmail"
                  value={formData.motherEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="motherOfficePhone"
                  value={formData.motherOfficePhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h3 style={{ color: '#1a4b8c', marginBottom: '15px', marginTop: '30px', paddingBottom: '10px', borderBottom: '2px solid #f0f0f0' }}>
              Guardian Details (If different from parents)
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Guardian's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  name="guardianRelation"
                  value={formData.guardianRelation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  name="guardianOccupation"
                  value={formData.guardianOccupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="guardianOfficeAddress"
                  value={formData.guardianOfficeAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="guardianMobile"
                  value={formData.guardianMobile}
                  onChange={handleInputChange}
                  maxLength={10}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Office Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="guardianOfficePhone"
                  value={formData.guardianOfficePhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h3 style={{ color: '#1a4b8c', marginBottom: '15px', marginTop: '30px', paddingBottom: '10px', borderBottom: '2px solid #f0f0f0' }}>
              Emergency Contact
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Contact Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  name="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="emergencyContactNo"
                  value={formData.emergencyContactNo}
                  onChange={handleInputChange}
                  maxLength={10}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button type="button" className="btn btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Previous
              </button>
              <button type="button" className="btn btn-next" onClick={nextStep}>
                Next Step <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Medical History */}
        {currentStep === 3 && (
          <div>
            <div className="section-head">
              <div className="section-pill">Medical History & Additional Information</div>
              <div className="section-line"></div>
            </div>

            <div className="form-grid">
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Awards & Accomplishments</label>
                <textarea
                  className="form-control"
                  name="awards"
                  value={formData.awards}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="List any awards, achievements, or extracurricular activities"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Siblings Information</label>
                <div style={{ marginTop: '10px' }}>
                  {formData.siblings.map((sibling, index) => (
                    <div key={sibling.id} style={{ 
                      background: '#f8f9fa', 
                      padding: '15px', 
                      borderRadius: '8px',
                      marginBottom: '10px',
                      border: '1px solid #e9ecef'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <strong>Sibling {index + 1}</strong>
                        {formData.siblings.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSibling(sibling.id)}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '2px 8px',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                        <input
                          type="text"
                          placeholder="Name"
                          value={sibling.name}
                          onChange={(e) => updateSibling(sibling.id, 'name', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="Age"
                          value={sibling.age}
                          onChange={(e) => updateSibling(sibling.id, 'age', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="Class"
                          value={sibling.std}
                          onChange={(e) => updateSibling(sibling.id, 'std', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="Institution"
                          value={sibling.institution}
                          onChange={(e) => updateSibling(sibling.id, 'institution', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSibling}
                    style={{
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    + Add Sibling
                  </button>
                </div>
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Previous Education</label>
                <div style={{ marginTop: '10px' }}>
                  {formData.previousEducation.map((edu, index) => (
                    <div key={edu.id} style={{ 
                      background: '#f8f9fa', 
                      padding: '15px', 
                      borderRadius: '8px',
                      marginBottom: '10px',
                      border: '1px solid #e9ecef'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <strong>Previous School {index + 1}</strong>
                        {formData.previousEducation.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removePreviousEducation(edu.id)}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '2px 8px',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                        <input
                          type="text"
                          placeholder="Year"
                          value={edu.year}
                          onChange={(e) => updatePreviousEducation(edu.id, 'year', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="School Name"
                          value={edu.school}
                          onChange={(e) => updatePreviousEducation(edu.id, 'school', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="Standard"
                          value={edu.standard}
                          onChange={(e) => updatePreviousEducation(edu.id, 'standard', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <input
                          type="text"
                          placeholder="Marks %"
                          value={edu.marks}
                          onChange={(e) => updatePreviousEducation(edu.id, 'marks', e.target.value)}
                          style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addPreviousEducation}
                    style={{
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    + Add Previous Education
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Hearing</label>
                <select
                  className="form-control"
                  name="hearing"
                  value={formData.hearing}
                  onChange={handleInputChange}
                >
                  <option value="no">No difficulty</option>
                  <option value="yes">Difficulty observed</option>
                </select>
                {formData.hearing === 'yes' && (
                  <textarea
                    className="form-control"
                    style={{ marginTop: '10px' }}
                    name="hearingExplanation"
                    value={formData.hearingExplanation}
                    onChange={handleInputChange}
                    placeholder="Please explain hearing difficulties"
                    rows={2}
                  />
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Vision</label>
                <select
                  className="form-control"
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                >
                  <option value="no">No difficulty</option>
                  <option value="yes">Difficulty observed</option>
                </select>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    id="useSpectacles"
                    name="useSpectacles"
                    checked={formData.useSpectacles}
                    onChange={(e) => setFormData(prev => ({ ...prev, useSpectacles: e.target.checked }))}
                    style={{ marginRight: '8px' }}
                  />
                  <label htmlFor="useSpectacles" style={{ fontSize: '14px' }}>
                    Use of Spectacles/Lens
                  </label>
                </div>
                {formData.vision === 'yes' && (
                  <textarea
                    className="form-control"
                    style={{ marginTop: '10px' }}
                    name="visionExplanation"
                    value={formData.visionExplanation}
                    onChange={handleInputChange}
                    placeholder="Please explain vision difficulties"
                    rows={2}
                  />
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Sitting Posture</label>
                <input
                  type="text"
                  className="form-control"
                  name="sitting"
                  value={formData.sitting}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Standing Posture</label>
                <input
                  type="text"
                  className="form-control"
                  name="standing"
                  value={formData.standing}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Walking</label>
                <input
                  type="text"
                  className="form-control"
                  name="walking"
                  value={formData.walking}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Speech</label>
                <input
                  type="text"
                  className="form-control"
                  name="speech"
                  value={formData.speech}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">General Wellness</label>
                <input
                  type="text"
                  className="form-control"
                  name="generalWellness"
                  value={formData.generalWellness}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Medical Conditions</label>
                <textarea
                  className="form-control"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any known medical conditions"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Allergies</label>
                <textarea
                  className="form-control"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="List any allergies"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Vaccinations Completed</label>
                <textarea
                  className="form-control"
                  name="vaccinations"
                  value={formData.vaccinations}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="List all completed vaccinations"
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button type="button" className="btn btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Previous
              </button>
              <button type="button" className="btn btn-next" onClick={nextStep}>
                Next Step <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Declaration & Payment */}
        {currentStep === 4 && (
          <div>
            <div className="section-head">
              <div className="section-pill">Declaration & Payment</div>
              <div className="section-line"></div>
            </div>

            <div className="declaration-box">
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#1a4b8c', marginBottom: '15px' }}>Declaration</h3>
                <p>
                  I, <strong>{formData.fatherName || '________________'}</strong> and <strong>{formData.motherName || '________________'}</strong> wish to admit our Son / Daughter / Ward
                  <strong> {formData.firstName} {formData.lastName || '________________'}</strong> into Sahyadri World School.
                </p>
                
                <p style={{ marginTop: '15px' }}>
                  I hereby declare that the information given in this application is true and correct to the best of my knowledge.
                  I agree to abide by the rules and regulations of Sahyadri World School. I understand that the admission form fee of ₹500 is non-refundable.
                </p>
                
                <div style={{ 
                  background: '#fff3cd', 
                  padding: '15px', 
                  borderRadius: '6px', 
                  marginTop: '15px',
                  border: '1px solid #ffeaa7'
                }}>
                  <strong>Important Notes:</strong>
                  <ul style={{ margin: '10px 0 0 20px', padding: 0 }}>
                    <li>Submission of this form does not guarantee admission</li>
                    <li>Admission is subject to availability of seats</li>
                    <li>The school reserves the right to accept or reject any application</li>
                    <li>All information provided must be accurate and complete</li>
                    <li>Admission form fee is non-refundable</li>
                  </ul>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label required">Signature of Parents / Guardian</label>
                <input
                  type="text"
                  className={`form-control ${errors.declarationSignature ? 'error-border' : ''}`}
                  name="declarationSignature"
                  value={formData.declarationSignature}
                  onChange={handleInputChange}
                  placeholder="Enter your full name as signature"
                  required
                />
                {errors.declarationSignature && <div className="error">{errors.declarationSignature}</div>}
              </div>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px', 
              margin: '20px 0',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#1a4b8c', marginBottom: '15px' }}>Payment Details</h3>
              <div style={{ 
                background: 'white', 
                padding: '15px', 
                borderRadius: '6px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Admission Form Fee:</span>
                  <strong>₹{ADMISSION_FEE}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Payment Gateway Charges:</span>
                  <span style={{ color: '#28a745' }}>Free</span>
                </div>
                <hr style={{ margin: '15px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px' }}>
                  <span>Total Amount:</span>
                  <span>₹{ADMISSION_FEE}</span>
                </div>
              </div>
              <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
                Payment will be processed securely via PhonePe payment gateway. You can pay using UPI, Credit/Debit Card, or Net Banking.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button type="button" className="btn btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Previous
              </button>
              <button 
                type="button" 
                className="btn btn-pay"
                onClick={initiatePayment}
                disabled={isSubmitting || paymentStatus === 'processing'}
                style={{
                  padding: '14px 30px',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                {isSubmitting || paymentStatus === 'processing' ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-lock"></i>
                    Pay ₹{ADMISSION_FEE} with PhonePe
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;