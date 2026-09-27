import { Link } from "react-router-dom";
import {
  FaAppleAlt,
  FaBookOpen,
  FaBusAlt,
  FaCheck,
  FaClock,
  FaFutbol,
  FaPalette,
  FaPencilAlt,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import "./dayBoarding.css";

const features = [
  {
    icon: <FaBookOpen />,
    accent: "#0057b8",
    soft: "#e8f0ff",
    title: "Academic Excellence",
    description:
      "Comprehensive curriculum guided by experienced faculty ensuring academic success.",
  },
  {
    icon: <FaAppleAlt />,
    accent: "#2e9e5b",
    soft: "#e6f6ec",
    title: "Nutritious Meals",
    description:
      "Balanced, hygienic meals energizing students throughout the day.",
  },
  {
    icon: <FaFutbol />,
    accent: "#f7941d",
    soft: "#fff3e3",
    title: "Sports & Activities",
    description:
      "Wide range of sports promoting teamwork, discipline, and fitness.",
  },
  {
    icon: <FaPalette />,
    accent: "#c2408f",
    soft: "#fbe9f3",
    title: "Creative Arts",
    description:
      "Music, art, and drama fostering creativity and self-expression.",
  },
  {
    icon: <FaPencilAlt />,
    accent: "#6c4bd1",
    soft: "#efeafd",
    title: "Homework Support",
    description:
      "Dedicated faculty support ensuring assignments are completed effectively.",
  },
  {
    icon: <FaBusAlt />,
    accent: "#1fa6c6",
    soft: "#e3f6fa",
    title: "Safe Transportation",
    description:
      "Secure and comfortable student transportation with verified staff.",
  },
];

const reasons = [
  "Structured, productive environment",
  "Balanced academics & extracurriculars",
  "Dedicated homework support",
  "Safe and nurturing care",
];

const DayBoarding = () => {
  return (
    <section className="db-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Intro */}
          <div className="col-lg-6 wow fadeInUp">
            <span className="db-eyebrow">Optional Program</span>
            <h2 className="db-title">Day Boarding Program</h2>
            <p className="db-school">Sahyadri World School</p>

            <p className="db-tagline">
              “Where Every Child's Potential Blossoms into Excellence”
            </p>
            <p className="db-text">
              A perfect blend of academics, care, discipline, emotional
              well-being, and holistic development—crafted to support every
              child’s growth throughout the day.
            </p>

            <div className="db-meta">
              <div className="db-time">
                <span className="db-time-icon">
                  <FaClock />
                </span>
                <div>
                  <small>Timings</small>
                  <strong>9:00 AM – 5:00 PM</strong>
                </div>
              </div>
              <span className="db-optional">Optional</span>
            </div>

            <Link to="/register" className="db-btn">
              Register Now <FaArrowRight />
            </Link>
          </div>

          {/* Why Choose + Commitment */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="db-why">
              <h3>Why Choose Day Boarding?</h3>
              <ul>
                {reasons.map((t) => (
                  <li key={t}>
                    <span className="db-check">
                      <FaCheck />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="db-commit">
                <h4>
                  <FaTrophy /> Our Commitment
                </h4>
                <p>
                  “A home away from home where children feel safe, supported,
                  and inspired to learn every single day.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="db-highlights-head">
          <h2>Program Highlights</h2>
          <p>Everything included in your child's day with us.</p>
        </div>

        <div className="row g-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * (i % 3)}s`}
            >
              <div
                className="db-card"
                style={
                  {
                    "--db-accent": f.accent,
                    "--db-soft": f.soft,
                  } as React.CSSProperties
                }
              >
                <span className="db-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="db-card-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayBoarding;
