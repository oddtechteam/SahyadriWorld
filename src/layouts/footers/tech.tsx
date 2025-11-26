import { useState } from "react";

const TeacherCTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your application has been submitted successfully!");
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
      message: "",
    });
  };

  return (
    <>
      {/* Teacher CTA Section */}
      <div className="col-lg-6">
        <div className="footer-banner style-2">
          <div className="content">
            <h3 className="wow fadeInUp">Join Our Teaching Community</h3>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              We welcome passionate educators who believe in shaping young minds
              with knowledge, values, and creativity.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                background: "#0077cc",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                padding: "10px 25px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#005fa3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0077cc")
              }
            >
              Apply Now
            </button>
          </div>
          <div className="thumb">
            <img
              style={{ width: "80%", borderRadius: "10px" }}
              src="assets/img/footer/teacher.jpeg"
              alt="teacher"
              className="wow fadeInUp"
              data-wow-delay="0.7s"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="custom-modal"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h3 className="mb-3" style={{ color: "#0b2b5c" }}>
              Instructor Application
            </h3>
            <p style={{ color: "#004080", marginBottom: "20px" }}>
              Fill out the form below to apply as a teaching instructor at
              <strong> Sahyadri World School</strong>.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Subject Expertise (e.g. Math, English)"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  placeholder="Why do you want to join our team?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                  style={{
                    background: "#ccc",
                    borderRadius: "20px",
                    padding: "8px 20px",
                    border: "none",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    background: "#0077cc",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "8px 25px",
                    border: "none",
                  }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Styling */}
      <style>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease-in-out;
        }

        .custom-modal {
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          width: 90%;
          max-width: 550px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          animation: slideUp 0.4s ease-out;
        }

        input, textarea {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #ccc;
          padding: 10px 15px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        input:focus, textarea:focus {
          border-color: #0077cc;
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

export default TeacherCTA;
