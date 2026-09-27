import { useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const FooterTwo = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    message: "",
  });


  return (
    <>
      <footer className="footer-section fix footer-bg">
        <div className="big-circle">
          <img src="assets/img/footer/big-circle.png" alt="img" />
        </div>
        <div className="circle-shape-2">
          <img src="assets/img/footer/circle-2.png" alt="img" />
        </div>
        <div className="Vector-shape-2">
          <img src="assets/img/footer/Vector-2.png" alt="img" />
        </div>

        <div className="container">
          {/* Top Call-to-Action Banners */}
          <div className="footer-banner-items">
            <div className="row g-4">
              {/* Teacher CTA */}
              {/* <div className="col-lg-6">
                <div className="footer-banner style-2">
                  <div className="content">
                    <h3 className="wow fadeInUp">
                      Join Our Teaching Community
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      We welcome passionate educators who believe in shaping
                      young minds with knowledge, values, and creativity.
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Apply Now
                    </button>
                  </div>
                  <div className="thumb">
                    <img
                      style={{ width: "80%", borderRadius: "10px" }}
                      src="assets/img/footer/DSC08718 (1) (1)_11zon.webp"
                      alt="teacher"
                      className="wow fadeInUp"
                      data-wow-delay="0.7s"
                    />
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6">
                <div className="footer-banner style-2 d-flex align-items-center justify-content-between flex-wrap">
                  {/* 🟦 Left Content Section */}
                  <div
                    className="content"
                    style={{
                      flex: "1 1 50%",
                      paddingRight: "20px",
                    }}
                  >
                    <h3 className="wow fadeInUp">
                      Join Our Teaching Community
                    </h3>

                    <p
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                      }}
                    >
                      We welcome passionate educators who believe in shaping
                      young minds with knowledge, values, and creativity.
                    </p>

                    <button
                      onClick={() => setShowModal(true)}
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Apply Now
                    </button>
                  </div>

                  {/* 🟨 Right Image Section */}
                  <div
                    className="thumb d-flex justify-content-center align-items-center"
                    style={{
                      flex: "1 1 45%",
                      textAlign: "center",
                      // moves image slightly down for visual balance
                    }}
                  >
                    <img
                      src="assets/img/footer/teacher.jpg"
                      alt="teacher"
                      className="wow fadeInUp"
                      data-wow-delay="0.7s"
                      style={{
                        width: "100%",
                        maxWidth: "230px", // ✅ perfect balance for large screens
                        height: "250px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Student CTA */}
              {/* <div className="col-lg-6">
                <div className="footer-banner style-2">
                  <div className="content">
                    <h3 className="wow fadeInUp">Admissions Open 2025–26</h3>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      Enroll your child in an environment that inspires
                      learning, character building, and all-round development.
                      We welcome you to the Sahyadri family!
                    </p>
                    <Link
                      to="/admission"
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Apply for Admission
                    </Link>
                  </div>
                  <div className="thumb">
                    <img
                      style={{ width: "85%" }}
                      src="assets/img/footer/stud_11zon_11zon.webp"
                      alt="student"
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    />
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6">
                <div className="footer-banner style-2 d-flex align-items-center justify-content-between flex-wrap">
                  <div
                    className="content"
                    style={{ flex: "1 1 50%", paddingRight: "20px" }}
                  >
                    <h3 className="wow fadeInUp">Admissions Open 2026–27</h3>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginBottom: "0px",
                      }}
                    >
                      Enroll your child in an environment that inspires
                      learning, character building, and all-round development.
                      We welcome you to the Sahyadri family!
                    </p>
                    <Link
                      to="/Register"
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Apply for Admission
                    </Link>
                  </div>

                  {/* ✅ Optimized Image Section */}
                  <div
                    className="thumb d-flex justify-content-center align-items-center "
                    style={{
                      flex: "1 1 45%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="assets/img/footer/DSC08859 (1) (1)_11zon.webp"
                      alt="student"
                      className="wow img-custom-anim-left  "
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                      style={{
                        width: "100%",
                        maxWidth: "250px", // ✅ keeps image proportionate on large screens
                        height: "220px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="footer-widget-wrapper">
            <div className="row">
              {/* Logo & About */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/">
                      <img
                        style={{ width: "70%" }}
                        src="assets/img/logo/SHS.png"
                        alt="Sahyadri World School Logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Sahyadri World School is committed to nurturing bright,
                      responsible, and confident learners through quality
                      education, innovation, and strong values.
                    </p>
                    <div className="social-icon">
                      <a href="https://www.facebook.com/profile.php?id=61580954763794#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/reel/DPsn717jpk7/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://x.com/sahyadrischool/status/1181733181172568064">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/sahyadri-school/?originalSubdomain=in">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.youtube.com/watch?v=e6NPwv9ddhU">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academics */}
              <div
                className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                {/* <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Academics</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/">Primary School</Link>
                    </li>
                    <li>
                      <Link to="/">Middle School</Link>
                    </li>
                    <li>
                      <Link to="/">Secondary Education</Link>
                    </li>
                    <li>
                      <Link to="/">STEM & Robotics</Link>
                    </li>
                    <li>
                      <Link to="/">Arts & Culture</Link>
                    </li>
                  </ul>
                </div> */}
              </div>

              {/* Quick Links */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/about">About Sahyadri</Link>
                    </li>
                    {/* <li>
                      <Link to="/admissions">Admissions</Link>
                    </li> */}
                    <li>
                      <Link to="/gallery">Campus & Facilities</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Student Life</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        {/* Sahyadri World School <br />
                        Near Shivaji Nagar, Nashik Road <br />
                        Maharashtra, India – 422101 */}
                        Sahyadri World School, Shine City, Chikhali, Vitthal
                        Nagar, Pimpri-Chinchwad, Maharashtra 411062
                      </li>
                      <li>
                        <a
                          href="mailto:info@sahyadriworldschool.in"
                          className="link"
                        >
                          admin@sahyadriworld.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919049043628">+91 9049043628</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom style-2">
            <p style={{ color: "#0b2b5c" }}>
              © {new Date().getFullYear()}{" "}
              <Link style={{ color: "#0b2b5c" }} to="/">
                Sahyadri World School
              </Link>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* SWEET ALERT CUSTOM BUTTON STYLE */}
      <style>{`
  .swal-career-btn {
    background-color: #0077cc !important;
    color: #fff !important;
    padding: 10px 25px !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    border: none !important;
    outline: none !important;
    cursor: pointer !important;
  }
`}</style>

      {/* ---------------- Instructor Modal ---------------- */}
      {showModal && (
        <div
          className="custom-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: "#0b2b5c", marginBottom: "15px" }}>
              Instructor Application
            </h3>

            <p style={{ color: "#004080", marginBottom: "20px" }}>
              Fill out this form to apply for a teaching position at{" "}
              <strong>Sahyadri World School</strong>.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                // VALIDATION
                if (!formData.name.trim()) {
                  Swal.fire(
                    "Required!",
                    "Please enter your full name.",
                    "warning"
                  );
                  return;
                }

                if (!formData.email.trim()) {
                  Swal.fire(
                    "Required!",
                    "Please enter your email address.",
                    "warning"
                  );
                  return;
                }

                if (!/^\d{10}$/.test(formData.phone)) {
                  Swal.fire(
                    "Invalid Phone!",
                    "Phone number must be exactly 10 digits.",
                    "warning"
                  );
                  return;
                }

                setLoading(true);

                // SUBMIT TO GOOGLE SHEET
                await fetch(
                  "https://script.google.com/macros/s/AKfycbx04zlw9KL3wj6nQ4fGW7x05gb-jYxT4GyEUE5dFPo7DbapiZWDJrL8CO1CQy1FjjcgiQ/exec",
                  {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      formType: "career",
                      ...formData,
                    }),
                  }
                );

                setLoading(false);

                // SUCCESS ALERT
                Swal.fire({
                  title: "Application Submitted!",
                  text: "Thank you for applying. We will contact you soon.",
                  icon: "success",
                  confirmButtonText: "OK",
                  buttonsStyling: false,
                  customClass: {
                    confirmButton: "swal-career-btn",
                  },
                });

                // RESET ALL FIELDS
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  experience: "",
                  message: "",
                });

                // CLOSE MODAL
                setShowModal(false);
              }}
            >
              {/* FULL NAME */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              {/* PHONE NUMBER (DIGITS ONLY, MAX 10) */}
              <input
                type="text"
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, "");
                  if (digits.length <= 10) {
                    setFormData({ ...formData, phone: digits });
                  }
                }}
                required
              />

              {/* SUBJECT */}
              <input
                type="text"
                placeholder="Subject Expertise"
                value={formData.subject}
          onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />

              {/* EXPERIENCE */}
              <input
                type="text"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              />

              {/* MESSAGE */}
              <textarea
                placeholder="Why do you want to join our school?"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>

              {/* BUTTONS */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-btn theme-btn"
                  disabled={loading}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {loading ? (
                    <>
                      <i className="fa fa-spinner fa-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- Modal CSS ---------------- */}
      <style>{`
  .custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-in-out;
  }

  .custom-modal {
    background: #fff;
    color: #000;
    padding: 35px;
    border-radius: 15px;
    width: 90%;
    max-width: 520px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    animation: slideUp 0.4s ease-out;
  }

  .custom-modal input,
  .custom-modal textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px 15px;
    font-size: 15px;
    margin-bottom: 15px;
    background: #f9f9f9;
    color: #000;
    transition: border-color 0.3s ease, background 0.3s ease;
  }

  .custom-modal input:focus,
  .custom-modal textarea:focus {
    border-color: #0077cc;
    background: #fff;
  }

  .modal-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .cancel-btn {
    background: #ccc;
    border: none;
    border-radius: 25px;
    padding: 10px 25px;
    color: #333;
    font-weight: 600;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`}</style>
    </>
  );
};

export default FooterTwo;
