import { useState, useEffect } from "react";

const DayBoarding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: "📚",
      title: "Academic Excellence",
      description:
        "Comprehensive curriculum guided by experienced faculty ensuring academic success.",
    },
    {
      icon: "🍎",
      title: "Nutritious Meals",
      description:
        "Balanced, hygienic meals energizing students throughout the day.",
    },
    {
      icon: "⚽",
      title: "Sports & Activities",
      description:
        "Wide range of sports promoting teamwork, discipline, and fitness.",
    },
    {
      icon: "🎨",
      title: "Creative Arts",
      description:
        "Music, art, and drama fostering creativity and self-expression.",
    },
    {
      icon: "📝",
      title: "Homework Support",
      description:
        "Dedicated faculty support ensuring assignments are completed effectively.",
    },
    {
      icon: "🚌",
      title: "Safe Transportation",
      description:
        "Secure and comfortable student transportation with verified staff.",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1ab5d8 0%, #ffffff 100%)",
        padding: "60px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        className={`container ${isVisible ? "fade-in" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#ffffffff",
            }}
          >
           Day Boarding Program
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              color: "#0C2E52",
              fontWeight: "500",
              opacity: 0.85,
              marginBottom: "15px",
            }}
          >
            Sahyadri World School
          </p>

          <div
            style={{
              background: "#0C2E52",
              padding: "12px 32px",
              color: "white",
              borderRadius: "50px",
              display: "inline-block",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            🕐 8:00 AM – 6:00 PM
          </div>
        </div>

        {/* MOTIVATION CARD */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-10">
            <div
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                borderLeft: "5px solid #1FA6C6",
              }}
            >
              <h2
                style={{
                  fontSize: "1.9rem",
                  fontWeight: "600",
                  color: "#0C2E52",
                  marginBottom: "18px",
                }}
              >
                “Where Every Child's Potential Blossoms into Excellence”
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#444",
                }}
              >
                A perfect blend of academics, care, discipline, emotional
                well-being, and holistic development—crafted to support every
                child’s growth throughout the day.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="row mb-5">
          <h2
            className="text-center mb-4"
            style={{
              fontSize: "2.3rem",
              fontWeight: "700",
              color: "#0C2E52",
            }}
          >
            Program Highlights
          </h2>

          {features.map((f, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                style={{
                  background: "white",
                  padding: "28px 20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  transition: "0.3s",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: "2.8rem",
                    marginBottom: "15px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    background: "#1FA6C6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    marginInline: "auto",
                  }}
                >
                  {f.icon}
                </div>

                <h4
                  style={{
                    fontWeight: "600",
                    marginTop: "15px",
                    color: "#0C2E52",
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginTop: "8px",
                  }}
                >
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE + COMMITMENT */}
        <div className="row">
          {/* Why Choose */}
          <div className="col-md-6 mb-4">
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "#0C2E52",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                🎯 Why Choose Day Boarding?
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "Structured, productive environment",
                  "Balanced academics & extracurriculars",
                  "Dedicated homework support",
                  "Safe and nurturing care",
                ].map((t, j) => (
                  <li
                    key={j}
                    style={{
                      paddingLeft: "28px",
                      marginBottom: "14px",
                      position: "relative",
                      color: "#444",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        color: "#1FA6C6",
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="col-md-6 mb-4">
            <div
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <h3
                style={{
                  color: "#0C2E52",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                🏆 Our Commitment
              </h3>

              <p
                style={{
                  color: "#444",
                  lineHeight: "1.7",
                  fontSize: "1.05rem",
                  marginBottom: "20px",
                }}
              >
                “A home away from home where children feel safe, supported, and
                inspired to learn every single day.”
              </p>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, #0C2E52 0%, #1FA6C6 100%)",
                  padding: "15px 35px",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-block",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Enroll Now →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DayBoarding;
