import React from 'react';
import FooterTwo from '../../layouts/footers/FooterTwo';
import HeaderOne from '../../layouts/headers/HeaderOne';
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent';

const TermsAndConditions: React.FC = () => {
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
      lineHeight: '1.6',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#4f7dabff',
      color: 'white',
      padding: '30px 0',
      textAlign: 'center' as const,
      borderRadius: '8px',
      marginBottom: '30px',
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
    },
    section: {
      marginBottom: '30px',
    },
    heading: {
      color: '#b6c2cfff',
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '25px',
      borderBottom: '3px solid #3498db',
      paddingBottom: '10px',
      textAlign: 'center' as const,
    },
    subheading: {
      color: '#3498db',
      fontSize: '20px',
      fontWeight: '600',
      margin: '20px 0 15px 0',
    },
    paragraph: {
      marginBottom: '15px',
      textAlign: 'justify' as const,
      fontSize: '16px',
    },
    list: {
      margin: '15px 0 20px 30px',
    },
    listItem: {
      marginBottom: '10px',
      fontSize: '16px',
    },
    highlight: {
      backgroundColor: '#fff3cd',
      padding: '20px',
      borderRadius: '8px',
      borderLeft: '5px solid #ffc107',
      margin: '20px 0',
      border: '1px solid #ffeaa7',
    },
    warning: {
      backgroundColor: '#f8d7da',
      padding: '15px',
      borderRadius: '5px',
      margin: '15px 0',
      border: '1px solid #f5c6cb',
    },
    contactInfo: {
      backgroundColor: '#d1ecf1',
      padding: '25px',
      borderRadius: '8px',
      marginTop: '30px',
      border: '2px solid #bee5eb',
    },
    footer: {
      textAlign: 'center' as const,
      marginTop: '40px',
      padding: '25px',
      borderTop: '2px solid #e0e0e0',
      color: '#666',
      fontSize: '14px',
      backgroundColor: 'white',
      borderRadius: '8px',
    },
    strong: {
      fontWeight: '600',
      color: '#2c3e50',
    },
  };

  return (
    <>
    <HeaderOne />
    <BreadcrumbEvent title="Terms & Conditions" subtitle="Terms & Conditions" />

    <div style={styles.container}>
      {/* <div style={styles.header}>
        <h1 style={{fontSize:"30px"}}>Sahyadri World School</h1>
        <p>Terms and Conditions for Admission</p>
      </div> */}

      <div style={styles.content}>
        <h2 style={styles.heading}>Terms and Conditions</h2>
        
        <div style={styles.section}>
          <p style={styles.paragraph}>
            Welcome to <span style={styles.strong}>Sahyadri World School</span>. These Terms and Conditions govern your use of our admission form payment services. By submitting the admission form and making payment, you agree to be bound by these terms in their entirety.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>1. Admission Process and Eligibility</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Submission of admission form does not guarantee admission</li>
            <li style={styles.listItem}>Admission is subject to availability of seats and fulfillment of eligibility criteria</li>
            <li style={styles.listItem}>The school reserves the right to accept or reject any application without assigning any reason</li>
            <li style={styles.listItem}>All information provided in the application must be accurate and complete</li>
            <li style={styles.listItem}>False information may lead to cancellation of admission at any stage</li>
            <li style={styles.listItem}>Students must meet the age and academic requirements specified for each grade</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>2. Payment Terms and Conditions</h3>
          <div style={styles.highlight}>
            <p style={styles.paragraph}>
              <span style={styles.strong}>Important Notice:</span> The admission form fee is non-refundable under any circumstances except as specifically mentioned in the refund policy section below.
            </p>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>All payments are processed through PhonePe secure payment gateway</li>
            <li style={styles.listItem}>Payment must be completed in full at the time of form submission</li>
            <li style={styles.listItem}>Transaction receipts will be generated automatically and sent to your email</li>
            <li style={styles.listItem}>The school is not responsible for payment failures due to technical issues, network problems, or bank-related issues</li>
            <li style={styles.listItem}>In case of failed transaction, amount will be refunded within 7-10 working days</li>
            <li style={styles.listItem}>All transaction charges are borne by the applicant</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>3. PhonePe Payment Integration</h3>
          <p style={styles.paragraph}>
            Our payment processing is handled by PhonePe, a secure payment gateway certified by PCI-DSS. By using this service, you agree to PhonePe's Terms of Service and Privacy Policy.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>We do not store your credit card/debit card/net banking/UPI details on our servers</li>
            <li style={styles.listItem}>All payment data is encrypted during transmission using 128-bit SSL encryption</li>
            <li style={styles.listItem}>PhonePe is PCI-DSS compliant and follows highest security standards</li>
            <li style={styles.listItem}>Payment disputes and technical issues must be raised directly with PhonePe support</li>
            <li style={styles.listItem}>The school acts as a facilitator for payment processing only</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>4. Refund Policy</h3>
          <div style={styles.warning}>
            <p style={styles.paragraph}><span style={styles.strong}>General Rule:</span> Admission form fees are non-refundable once paid.</p>
          </div>
          <p style={styles.paragraph}>Exceptions for refund consideration:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Duplicate payment for the same application (must provide transaction proofs)</li>
            <li style={styles.listItem}>Technical error leading to multiple deductions from your account</li>
            <li style={styles.listItem}>Cancellation of admission process by the school before admission confirmation</li>
            <li style={styles.listItem}>Proven system error that prevented intended service delivery</li>
          </ul>
          <p style={styles.paragraph}>
            Refund requests must be submitted in writing to <span style={styles.strong}>sahyadriworldschool@gmail.com</span> within 7 days of payment along with supporting documents. Refunds will be processed through the original payment method within 15 working days after verification.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>5. Document Verification</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Applicants must produce original documents for verification at the time of admission</li>
            <li style={styles.listItem}>Provisional admission is subject to document verification</li>
            <li style={styles.listItem}>The school reserves the right to cancel admission if documents are found to be forged, tampered, or inaccurate</li>
            <li style={styles.listItem}>Required documents: Birth certificate, previous academic records, transfer certificate, address proof, and photographs</li>
            <li style={styles.listItem}>Document verification must be completed within the specified timeline</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>6. Intellectual Property Rights</h3>
          <p style={styles.paragraph}>
            All content, logos, trademarks, admission forms, and materials on our admission portal are the intellectual property of Sahyadri World School and may not be reproduced, distributed, or used without written permission. Unauthorized use may lead to legal action.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>7. Limitation of Liability</h3>
          <p style={styles.paragraph}>
            Sahyadri World School shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Payment failures, technical errors, or system downtime</li>
            <li style={styles.listItem}>Rejection of admission application</li>
            <li style={styles.listItem}>Delay in processing or communication</li>
            <li style={styles.listItem}>Loss of data or information provided during application</li>
            <li style={styles.listItem}>Acts of third-party service providers including PhonePe</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>8. Governing Law and Jurisdiction</h3>
          <p style={styles.paragraph}>
            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes, claims, or controversies arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>9. Changes to Terms and Conditions</h3>
          <p style={styles.paragraph}>
            We reserve the right to modify, amend, or update these terms and conditions at any time without prior notice. The current version will always be available on our admission portal. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>10. Communication</h3>
          <p style={styles.paragraph}>
            All official communication regarding admission will be sent to the email address and phone number provided during registration. It is the responsibility of the applicant/parent to ensure contact information is accurate and to check communications regularly.
          </p>
        </div>

        <div style={styles.contactInfo}>
          <h3 style={styles.subheading}>Contact Information</h3>
          <p style={styles.paragraph}>For admission-related queries, technical support, or payment assistance:</p>
          <p style={styles.paragraph}><span style={styles.strong}>Email:</span> sahyadriworldschool@gmail.com</p>
          <p style={styles.paragraph}><span style={styles.strong}>Phone:</span> +917057851427</p>
          <p style={styles.paragraph}><span style={styles.strong}>Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
          <p style={styles.paragraph}><span style={styles.strong}>Address:</span> Sahyadri World School</p>
        </div>

        <div style={styles.footer}>
          <p>© {new Date().getFullYear()} Sahyadri World School. All rights reserved.</p>
          <p>This document was last updated on: {new Date().toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </div>
    <FooterTwo />
    </>
  );
};

export default TermsAndConditions;