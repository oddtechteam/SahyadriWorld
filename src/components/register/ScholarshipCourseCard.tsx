import React, { useState } from 'react';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterTwo from '../../layouts/footers/FooterTwo';
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent';

interface ScholarshipCourseCardProps {
  onEnrollClick?: () => void;
}

const ScholarshipCourseCard: React.FC<ScholarshipCourseCardProps> = ({ onEnrollClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // SVG Icons as React components
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const BookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const QuoteIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h14V8H10zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h14V8H28z" />
    </svg>
  );

  // const ShieldIcon = () => (
  //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //   </svg>
  // );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );

  const features = [
    { icon: <ClockIcon />, text: '30-Day Access' },
    { icon: <UsersIcon />, text: 'Live Sessions' },
    { icon: <BookIcon />, text: 'Study Material' },
    { icon: <AwardIcon />, text: 'Certificate' },
  ];

  const benefits = [
    'Expert-led scholarship guidance',
    'Personalized application strategy',
    '500+ scholarship databases access',
    'Essay review & editing support',
    'Interview preparation',
    'Priority support for queries',
  ];

  return (
    <>
    <HeaderOne />
    <BreadcrumbEvent title="Scholarship Course" subtitle="Scholarship Course" />
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 16px',
          background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
          borderRadius: '9999px',
          marginBottom: '16px'
        }}>
          <div style={{ color: '#fbbf24', marginRight: '8px' }}>
            <StarIcon />
          </div>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#1d4ed8' }}>
            LIMITED TIME OFFER
          </span>
        </div>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '12px'
        }}>
          Scholarship Success <span style={{ color: '#2563eb' }}>Masterclass</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#4b5563',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Unlock your path to fully-funded education with our comprehensive scholarship guidance program
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '32px',
        '@media (min-width: 768px)': {
          gridTemplateColumns: '1fr 1fr'
        }
      } as React.CSSProperties}>
        {/* Left Column - Course Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Course Card */}
          <div 
            style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f3f4f6',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'translateY(-4px)' : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={{ padding: '32px' }}>
              {/* Price Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#111827' }}>₹500</span>
                    <span style={{ color: '#6b7280', marginLeft: '8px', textDecoration: 'line-through' }}>₹2,499</span>
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 12px',
                    backgroundColor: '#d1fae5',
                    color: '#065f46',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginTop: '8px'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      marginRight: '8px',
                      animation: 'pulse 2s infinite'
                    }}></span>
                    79% OFF
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Limited spots</div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>Only 12 left</div>
                </div>
              </div>

              {/* Features Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '32px'
              }}>
                {features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px'
                  }}>
                    <div style={{ color: '#2563eb' }}>{feature.icon}</div>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                  What you'll get:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {benefits.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ color: '#10b981', marginRight: '12px', flexShrink: 0 }}>
                        <CheckIcon />
                      </div>
                      <span style={{ color: '#374151', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onEnrollClick}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: 'linear-gradient(to right, #2563eb, #4f46e5)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #1d4ed8, #4338ca)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #4f46e5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ marginRight: '12px' }}>Enroll Now for ₹500</span>
                <div style={{ transition: 'transform 0.3s ease' }}>
                  <ArrowRightIcon />
                </div>
              </button>

              {/* Guarantee Badge */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#4b5563'
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ color: '#10b981', marginRight: '8px' }}>
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  7-Day Money Back Guarantee • No questions asked
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>500+</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Students Enrolled</div>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>94%</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Success Rate</div>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>4.8</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Rating</div>
            </div>
          </div>
        </div>

        {/* Right Column - Course Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Instructor Card */}
          <div style={{
            background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
              Meet Your Mentor
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #60a5fa, #818cf8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                DR
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#111827' }}>Dr. Ramesh Kumar</h4>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>Former Scholarship Committee Member</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ display: 'flex', color: '#fbbf24' }}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} style={{ marginRight: '2px' }}>
                        <StarIcon />
                      </div>
                    ))}
                  </div>
                  <span style={{ fontSize: '14px', color: '#6b7280', marginLeft: '8px' }}>(128 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
              Course Curriculum
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Module 1: Scholarship Landscape Analysis',
                'Module 2: Application Strategy Development',
                'Module 3: Essay & SOP Writing Masterclass',
                'Module 4: Interview Preparation & Mock Sessions',
                'Module 5: Financial Documentation Guide',
                'Module 6: Post-Application Follow-up',
              ].map((module, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#dbeafe',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginRight: '12px'
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ color: '#374151' }}>{module}</span>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    backgroundColor: '#f3f4f6',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    2h 15m
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div style={{
            background: 'linear-gradient(to right, #2563eb, #4f46e5)',
            borderRadius: '16px',
            padding: '24px',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ opacity: '0.5', marginRight: '8px' }}>
                <QuoteIcon />
              </div>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "This course completely changed my scholarship journey. I secured 3 full scholarships worth ₹25 lakhs!"
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                AP
              </div>
              <div style={{ marginLeft: '12px' }}>
                <h4 style={{ fontWeight: '600', fontSize: '16px' }}>Ananya Patel</h4>
                <p style={{ fontSize: '14px', opacity: '0.9' }}>Stanford University Scholar</p>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  question: 'Is this course suitable for beginners?',
                  answer: 'Yes! This course is designed for students at all levels, including complete beginners.'
                },
                {
                  question: 'How long will I have access to the course?',
                  answer: "You'll have 30-day access to all course materials, including any updates during that period."
                },
                {
                  question: 'What if I am not satisfied with the course?',
                  answer: 'We offer a 7-day money-back guarantee with no questions asked.'
                }
              ].map((faq, index) => (
                <details key={index} style={{
                  borderBottom: '1px solid #e5e7eb',
                  paddingBottom: '12px'
                }}>
                  <summary style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: '500',
                    cursor: 'pointer',
                    listStyle: 'none',
                    color: '#374151',
                    padding: '8px 0'
                  }}>
                    <span>{faq.question}</span>
                    <div style={{ transition: 'transform 0.3s ease' }}>
                      <ChevronDownIcon />
                    </div>
                  </summary>
                  <p style={{
                    color: '#6b7280',
                    marginTop: '8px',
                    paddingLeft: '24px',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#fef2f2',
          color: '#991b1b',
          padding: '8px 16px',
          borderRadius: '9999px'
        }}>
          <ClockIcon />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Offer ends in: </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span style={{ backgroundColor: '#dc2626', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>02</span>
            <span style={{ padding: '4px 2px' }}>:</span>
            <span style={{ backgroundColor: '#dc2626', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>15</span>
            <span style={{ padding: '4px 2px' }}>:</span>
            <span style={{ backgroundColor: '#dc2626', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>43</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          details summary::-webkit-details-marker {
            display: none;
          }
          
          details[open] svg {
            transform: rotate(180deg);
          }
          
          details summary {
            transition: color 0.2s ease;
          }
          
          details summary:hover {
            color: #111827;
          }
          
          button:hover svg {
            transform: translateX(4px);
          }
        `}
      </style>
    </div>
    <FooterTwo />
    </>
  );
};

export default ScholarshipCourseCard;