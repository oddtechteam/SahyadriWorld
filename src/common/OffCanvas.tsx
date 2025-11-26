import { Link } from "react-router-dom";
import MobileMenu from "../layouts/headers/MobileMenu";

const OffCanvas = ({ setOpenCanvas, openCanvas }: any) => {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              {/* Top Logo and Close */}
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo/SHS_11zon.webp"
                      alt="Sahyadri World School Logo"
                      style={{ width: "150px" }}
                    />
                  </Link>
                </div>
                <div
                  className="offcanvas__close"
                  onClick={() => setOpenCanvas(false)}
                >
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              {/* Welcome Message */}
              <h3 className="offcanvas-title" style={{ color: "#0b2b5c" }}>
                Welcome to Sahyadri World School!
              </h3>
              <p
                style={{
                  color: "#004080",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
              At Sahyadri World School, we inspire curiosity and creativity while nurturing bright minds through innovation, values, and holistic education.
              </p>

              {/* Social Icons */}
              <div className="social-icon d-flex align-items-center mt-3 mb-4">
                <a href="https://www.facebook.com/profile.php?id=61580954763794#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/reel/DPsn717jpk7/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/sahyadri-school/?originalSubdomain=in">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/watch?v=e6NPwv9ddhU">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>

              {/* Contact Information */}
              <div className="offcanvas__contact">
                <h3 style={{ color: "#0b2b5c" }}>Contact Information</h3>
                <ul className="contact-list">
                  <li>
                    {/* <span>📍 Address:</span> <br />
                    Sahyadri World School <br />
                    Near Shivaji Nagar, Nashik Road, <br />
                    Maharashtra, India – 422101 */}
                    Sahyadri World School, Shine City, Chikhali, Vitthal Nagar, Pimpri-Chinchwad, Maharashtra 411062

                  </li>
                  <li>
                    <span>📞 Call Us:</span> <br />
                    <a href="tel:+918123456789" style={{ color: "#0077cc" }}>
                      {/* +91 81234 56789 */}
                    +91 9049043628

                    </a>
                  </li>
                  <li>
                    <span>✉️ Email:</span> <br />
                    <a
                      href="mailto:info@sahyadriworldschool.in"
                      style={{ color: "#0077cc" }}
                    >
                      {/* info@sahyadriworldschool.in */}
                      admin@sahyadriworldschool.com 
                    </a>
                  </li>
                  <li>
                    <span>🕘 Timings:</span> <br />
                    Mon–Sat: 8:00 AM – 6:00 PM
                  </li>
                </ul>

                {/* Buttons */}
                <div
                  className="offcanvas-button  mb-4 d-flex flex-wrap justify-content-center gap-3"
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <Link
                    to="/admission"
                    className="theme-btn style-2 d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: "150px",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      gap: "8px",
                    }}
                  >
                    <i className="fas fa-book"></i> Admission
                  </Link>

                  <Link
                    to="/contact"
                    className="theme-btn yellow-btn d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: "150px",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      gap: "8px",
                    }}
                  >
                    <i className="fas fa-phone-alt"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Overlay */}
      <div
        className={`offcanvas__overlay ${openCanvas ? "overlay-open" : ""}`}
        onClick={() => setOpenCanvas(false)}
      ></div>
    </>
  );
};

export default OffCanvas;
