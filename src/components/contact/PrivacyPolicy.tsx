import React from 'react';
import FooterTwo from '../../layouts/footers/FooterTwo';
import HeaderOne from '../../layouts/headers/HeaderOne';
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent';

const PrivacyPolicy: React.FC = () => {
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      color: '#111d35ff',
      lineHeight: '1.6',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#5789bbff',
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
      color: '#2c3e50',
      fontSize: '28px',
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
      backgroundColor: '#e8f4fc',
      padding: '20px',
      borderRadius: '8px',
      borderLeft: '5px solid #3498db',
      margin: '20px 0',
      border: '1px solid #b8daff',
    },
    securityNote: {
      backgroundColor: '#d4edda',
      padding: '15px',
      borderRadius: '5px',
      margin: '15px 0',
      border: '1px solid #c3e6cb',
    },
    contactInfo: {
      backgroundColor: '#e8f4fc',
      padding: '25px',
      borderRadius: '8px',
      marginTop: '30px',
      border: '2px solid #3498db',
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
      <BreadcrumbEvent title="Privacy & Policy" subtitle="Privacy & Policy" />
    <div style={styles.container}>
      {/* <div style={styles.header}>
        <h1 style={{fontSize:"30px"}}>Sahyadri World School</h1>
        <p>Terms and Conditions for Admission</p>
      </div> */}

      <div style={styles.content}>
        <h2 style={styles.heading}>Privacy Policy</h2>
        
        <div style={styles.section}>
          <p style={styles.paragraph}>
            At <span style={styles.strong}>Sahyadri World School</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our admission form payment services through PhonePe.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>1. Information We Collect</h3>
          <p style={styles.paragraph}>We collect the following types of information during the admission process:</p>
          
          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Personal Information</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Student's full name, date of birth, gender</li>
            <li style={styles.listItem}>Parent/guardian names, contact details, and relationship</li>
            <li style={styles.listItem}>Complete residential address and contact information</li>
            <li style={styles.listItem}>Email address and phone numbers</li>
            <li style={styles.listItem}>Emergency contact details</li>
          </ul>

          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Academic Information</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Previous school details and academic records</li>
            <li style={styles.listItem}>Marksheets, certificates, and transfer documents</li>
            <li style={styles.listItem}>Academic achievements and extracurricular activities</li>
            <li style={styles.listItem}>Medical history and special requirements if any</li>
          </ul>

          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Payment Information</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Transaction details through PhonePe</li>
            <li style={styles.listItem}>Payment method type (credit card, debit card, net banking, UPI, wallet)</li>
            <li style={styles.listItem}>Transaction ID, amount, and date</li>
            <li style={styles.listItem}>Note: We do not store sensitive payment details like credit card numbers, CVV, UPI PIN, etc.</li>
          </ul>

          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Technical Information</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>IP address, browser type, and device information</li>
            <li style={styles.listItem}>Cookies and usage data</li>
            <li style={styles.listItem}>Operating system and screen resolution</li>
            <li style={styles.listItem}>Pages visited and time spent on our portal</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>2. How We Use Your Information</h3>
          <p style={styles.paragraph}>We use the collected information for the following purposes:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Process your admission application and verify eligibility</li>
            <li style={styles.listItem}>Complete payment transactions through PhonePe</li>
            <li style={styles.listItem}>Communicate with you regarding admission status, requirements, and updates</li>
            <li style={styles.listItem}>Provide customer support and respond to inquiries</li>
            <li style={styles.listItem}>Maintain academic records as per educational regulations</li>
            <li style={styles.listItem}>Improve our services and website functionality</li>
            <li style={styles.listItem}>Comply with legal obligations and educational board requirements</li>
            <li style={styles.listItem}>Send important announcements and administrative information</li>
            <li style={styles.listItem}>Ensure safety and security of our students and premises</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>3. Data Sharing with Third Parties</h3>
          <p style={styles.paragraph}>
            We may share necessary information with the following entities under strict confidentiality agreements:
          </p>
          
          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>PhonePe (Payment Processor)</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Minimum required information for payment processing</li>
            <li style={styles.listItem}>PhonePe's privacy policy applies to payment data handling</li>
            <li style={styles.listItem}>PCI-DSS compliant secure payment processing</li>
          </ul>

          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Educational Authorities</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>As required by educational boards and regulatory bodies</li>
            <li style={styles.listItem}>For certification and examination purposes</li>
            <li style={styles.listItem}>As mandated by government educational policies</li>
          </ul>

          <h4 style={{...styles.subheading, fontSize: '18px', margin: '15px 0 10px 0'}}>Service Providers</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>IT service providers under strict data protection agreements</li>
            <li style={styles.listItem}>Communication service providers for emails and SMS</li>
            <li style={styles.listItem}>Cloud storage providers with adequate security measures</li>
          </ul>

          <div style={styles.highlight}>
            <p style={styles.paragraph}>
              <span style={styles.strong}>Note:</span> We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>4. Data Security Measures</h3>
          <div style={styles.securityNote}>
            <p style={styles.paragraph}>
              <span style={styles.strong}>Security Assurance:</span> We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>SSL encryption for all data transmissions</li>
            <li style={styles.listItem}>Secure servers with firewall protection</li>
            <li style={styles.listItem}>Regular security audits and vulnerability assessments</li>
            <li style={styles.listItem}>Access controls and authentication mechanisms</li>
            <li style={styles.listItem}>Employee training on data protection and privacy</li>
            <li style={styles.listItem}>Regular data backups and disaster recovery plans</li>
          </ul>
          <p style={styles.paragraph}>
            All payment transactions are encrypted using SSL technology and processed through secure payment gateways. We do not store sensitive payment information on our servers.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>5. Data Retention Period</h3>
          <p style={styles.paragraph}>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Admission application data: 3 years from application date</li>
            <li style={styles.listItem}>Student academic records: As per educational regulatory requirements (typically 10+ years)</li>
            <li style={styles.listItem}>Payment transaction records: 7 years for accounting and audit purposes</li>
            <li style={styles.listItem}>Communication records: 3 years from last communication</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>6. Your Rights and Choices</h3>
          <p style={styles.paragraph}>You have the following rights regarding your personal information:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><span style={styles.strong}>Right to Access:</span> Request copies of your personal information</li>
            <li style={styles.listItem}><span style={styles.strong}>Right to Rectification:</span> Correct inaccurate or incomplete data</li>
            <li style={styles.listItem}><span style={styles.strong}>Right to Erasure:</span> Request deletion of your personal information under certain conditions</li>
            <li style={styles.listItem}><span style={styles.strong}>Right to Restrict Processing:</span> Object to processing of your personal information</li>
            <li style={styles.listItem}><span style={styles.strong}>Right to Data Portability:</span> Request transfer of your data to another organization</li>
            <li style={styles.listItem}><span style={styles.strong}>Right to Withdraw Consent:</span> Withdraw previously given consent for data processing</li>
          </ul>
          <p style={styles.paragraph}>
            To exercise any of these rights, please contact us using the information provided in the contact section.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>7. Cookies and Tracking Technologies</h3>
          <p style={styles.paragraph}>
            We use cookies and similar tracking technologies to enhance your experience on our admission portal. These help us:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Remember your preferences and login information</li>
            <li style={styles.listItem}>Analyze website traffic and usage patterns</li>
            <li style={styles.listItem}>Improve website functionality and user experience</li>
            <li style={styles.listItem}>Ensure secure transaction processing</li>
          </ul>
          <p style={styles.paragraph}>
            You can control cookie settings through your browser preferences. However, disabling cookies may affect some functionalities of our admission portal.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>8. Changes to Privacy Policy</h3>
          <p style={styles.paragraph}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The updated version will be posted on our admission portal with the effective date. We encourage you to review this policy periodically.
          </p>
        </div>

        <div style={styles.contactInfo}>
          <h3 style={styles.subheading}>Contact Information</h3>
          <p style={styles.paragraph}>
            For any privacy-related questions, concerns, or to exercise your rights, please contact our Data Protection Officer:
          </p>
          <p style={styles.paragraph}><span style={styles.strong}>Email:</span> sahyadriworldschool@gmail.com</p>
          <p style={styles.paragraph}><span style={styles.strong}>Phone:</span> +917057851427</p>
          <p style={styles.paragraph}><span style={styles.strong}>Address:</span> Sahyadri World School</p>
          <p style={styles.paragraph}><span style={styles.strong}>Response Time:</span> We will respond to all legitimate requests within 30 days</p>
        </div>

        <div style={styles.footer}>
          <p>© {new Date().getFullYear()} Sahyadri World School. All rights reserved.</p>
          <p>This Privacy Policy was last updated on: {new Date().toLocaleDateString('en-IN', { 
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

export default PrivacyPolicy;