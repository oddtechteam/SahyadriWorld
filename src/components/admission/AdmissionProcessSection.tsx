import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AdmissionProcessSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".admission-step",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const steps = [
    {
      number: "01",
      title: "Counsellor Interaction",
      desc: "Book an exclusive counselling session with one of our experts to learn about Sahyadri’s learning environment, academic framework, and facilities.",
    },
    {
      number: "02",
      title: "Collect Prospectus & Brochure",
      desc: "Get detailed information about our academic programs, infrastructure, and holistic learning opportunities designed for every child’s growth.",
    },
    {
      number: "03",
      title: "Document Submission",
      desc: "Submit the admission form along with required documents for verification and a smooth onboarding process.",
    },
    {
      number: "04",
      title: "Child Skill Assessment Session",
      desc: "Participate in a guided child skill assessment session to help us understand your child’s unique learning style and requirements.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="admission-process-section section-padding"
      style={{
        background: "#fff",
        padding: "10px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-lg-6">
            <div
              className="image-wrapper wow fadeInLeft"
              style={{
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/assets/img/sah/school_11zon.webp"
                alt="Admission Process"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  transition: "transform 0.5s ease",
                }}
                className="hover-scale"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="admission-content">
              <h2
                style={{
                  fontWeight: 700,
                  color: "#0b2b5c",
                  marginBottom: "10px",
                }}
              >
                Admission <span style={{ color: "#0077cc" }}>Open</span>
              </h2>
              <p style={{ color: "#555", maxWidth: "600px" }}>
                We understand the importance of a smooth and transparent
                admission process. Here’s a simple step-by-step guide to help
                you enroll your child at Sahyadri World School.
              </p>

              <button
                className="theme-btn mt-3"
                style={{
                  background: "#0077cc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#005fa3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#0077cc")
                }
                onClick={() => {
                  const element = document.getElementById("admission-section");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="admission-steps mt-5">
          <div className="row g-4 justify-content-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12 admission-step"
              >
                <div
                  className="step-card p-4 h-100 d-flex flex-column justify-content-between"
                  style={{
                    // background: "#0077cc",
                    //  background: "#2a5c82",
                    background: "#66b3ff  ",
                    color: "#fff",
                    borderRadius: "20px",
                    transition: "all 0.4s ease",
                    position: "relative",
                    boxShadow: "0 8px 20px rgba(0,119,204,0.2)",
                    overflow: "hidden",
                  }}
                >
                  <div>
                    <h5
                      style={{
                        fontWeight: 700,
                        marginBottom: "10px",
                        lineHeight: 1.4,
                      }}
                    >
                      {step.title}
                    </h5>
                    <p style={{ fontSize: "15px", opacity: 0.9 }}>
                      {step.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "#fff",
                      color: "#0077cc",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .step-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,119,204,0.25);
        }
      `}</style>
    </section>
  );
};

export default AdmissionProcessSection;
