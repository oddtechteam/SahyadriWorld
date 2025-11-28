"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const AdmissionApplicationSection = () => {
  const [step, setStep] = useState(2); // Start directly from Step 2
  const [loading, setLoading] = useState(false);

  // STEP 2 DATA
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    schoolType: "",
  });

  // STEP 3 DATA
  const [formDataStep3, setFormDataStep3] = useState({
    childName: "",
    dob: "",
    parentEmail: "",
    address: "",
  });

  const steps = [
    { title: "Application Details" },
    { title: "Complete Admission Form" },
  ];

  // VALIDATION: STEP 2
  const validateStep2 = () => {
    if (!formData.name.trim()) {
      Swal.fire("Required!", "Please enter full name.", "warning");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      Swal.fire("Invalid!", "Phone number must be exactly 10 digits.", "warning");
      return false;
    }

    if (!formData.grade.trim()) {
      Swal.fire("Required!", "Please select a grade.", "warning");
      return false;
    }

    if (!formData.schoolType.trim()) {
      Swal.fire("Required!", "Please select a school type.", "warning");
      return false;
    }

    return true;
  };

  // VALIDATION: STEP 3
  const validateStep3 = () => {
    if (!formDataStep3.childName.trim()) {
      Swal.fire("Required!", "Please enter your child's name.", "warning");
      return false;
    }

    if (!formDataStep3.dob.trim()) {
      Swal.fire("Required!", "Please select Date of Birth.", "warning");
      return false;
    }

    if (!formDataStep3.address.trim()) {
      Swal.fire("Required!", "Please enter your address.", "warning");
      return false;
    }

    return true;
  };

  // RESET ALL FIELDS
  const resetAllFields = () => {
    setFormData({
      name: "",
      phone: "",
      grade: "",
      schoolType: "",
    });

    setFormDataStep3({
      childName: "",
      dob: "",
      parentEmail: "",
      address: "",
    });

    setStep(2);
  };

  // FINAL SUBMISSION
  const handleFinalSubmit = async () => {
    if (!validateStep3()) return;

    setLoading(true);

    const mergedData = {
      formType: "admission", // IMPORTANT: tells script this is admission form
      ...formData,
      ...formDataStep3,
    };

    await fetch(
      
      "https://script.google.com/macros/s/AKfycbx04zlw9KL3wj6nQ4fGW7x05gb-jYxT4GyEUE5dFPo7DbapiZWDJrL8CO1CQy1FjjcgiQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mergedData),
      }
    );

    setLoading(false);

    Swal.fire({
      title: "Success!",
      text: "Your admission form has been submitted successfully.",
      icon: "success",
      confirmButtonText: "OK",
      buttonsStyling: false,
      customClass: { confirmButton: "swal-custom-btn" },
    }).then(() => {
      resetAllFields();
    });
  };

  return (
    <section
      id="admission-section"
      style={{ background: "#f4f8ff", padding: "80px 0" }}
    >
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 style={{ color: "#0b2b5c", fontWeight: 700 }}>
            Admission <span style={{ color: "#0077cc" }}>Form</span>
          </h2>
        </div>

        {/* STEP TRACKER */}
<div className="d-flex justify-content-center mb-5 gap-3">
  {steps.map((_, index) => (
    <div
      key={index}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: step === index + 2 ? "#0077cc" : "#d0d9e8",
        color: step === index + 2 ? "#fff" : "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        fontSize: "18px",
      }}
    >
      {index + 1}
    </div>
  ))}
</div>


        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "40px",
          }}
        >
          {/* STEP 2 */}
          {step === 2 && (
            <div className="text-center">
              <h3 style={{ color: "#0b2b5c", fontWeight: 700 }}>
                Step 1: Enter Parent Details
              </h3>

              <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                {/* NAME */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-control mt-3"
                  style={{ borderRadius: "25px", padding: "10px 15px" }}
                />

                {/* PHONE */}
                <input
                  type="text"
                  placeholder="Phone Number (10 digits)"
                  value={formData.phone}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const onlyNums = e.target.value.replace(/\D/g, "");
                    if (onlyNums.length <= 10) {
                      setFormData({ ...formData, phone: onlyNums });
                    }
                  }}
                  className="form-control mt-3"
                  style={{ borderRadius: "25px", padding: "10px 15px" }}
                />

                {/* GRADE */}
                <select
                  className="form-select mt-3"
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  style={{ borderRadius: "25px", padding: "10px 15px" }}
                >
                  <option value="">Select Grade</option>
                  <option>Nursery</option>
                  <option>Junior KG</option>
                  <option>Senior KG</option>
                  <option>1st Standard</option>
                  <option>2nd Standard</option>
                  <option>3rd Standard</option>
                  <option>4th Standard</option>
                </select>

                {/* SCHOOL TYPE */}
                <div className="d-flex justify-content-center gap-4 mt-4">
                  {["Day Boarding", "Regular School"].map((type) => (
                    <label
                      key={type}
                      onClick={() =>
                        setFormData({ ...formData, schoolType: type })
                      }
                      style={{
                        border:
                          formData.schoolType === type
                            ? "2px solid #0077cc"
                            : "1px solid #ccc",
                        borderRadius: "25px",
                        padding: "10px 20px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        checked={formData.schoolType === type}
                        readOnly
                      />{" "}
                      {type}
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (validateStep2()) setStep(3);
                  }}
                  style={{
                    background: "#0077cc",
                    color: "#fff",
                    borderRadius: "25px",
                    padding: "10px 30px",
                    border: "none",
                    marginTop: "20px",
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 style={{ color: "#0b2b5c", fontWeight: 700 }}>
                Step 2: Child Details
              </h3>

              <div className="row g-3">
                {/* CHILD NAME */}
                <div className="col-md-6">
                  <label>Child’s Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formDataStep3.childName}
                    onChange={(e) =>
                      setFormDataStep3({
                        ...formDataStep3,
                        childName: e.target.value,
                      })
                    }
                  />
                </div>

                {/* DOB */}
                <div className="col-md-6">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formDataStep3.dob}
                    onChange={(e) =>
                      setFormDataStep3({
                        ...formDataStep3,
                        dob: e.target.value,
                      })
                    }
                  />
                </div>

                {/* PARENT EMAIL */}
                <div className="col-md-6">
                  <label>Parent’s Email (Optional)</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formDataStep3.parentEmail}
                    onChange={(e) =>
                      setFormDataStep3({
                        ...formDataStep3,
                        parentEmail: e.target.value,
                      })
                    }
                  />
                </div>

                {/* ADDRESS */}
                <div className="col-12">
                  <label>Address *</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={formDataStep3.address}
                    onChange={(e) =>
                      setFormDataStep3({
                        ...formDataStep3,
                        address: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={loading}
                style={{
                  background: "#0077cc",
                  color: "#fff",
                  borderRadius: "25px",
                  padding: "10px 30px",
                  border: "none",
                  marginTop: "20px",
                  fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></div>
                    Processing...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .swal-custom-btn {
            background-color: #0077cc !important;
            color: #fff !important;
            padding: 10px 25px !important;
            border-radius: 25px !important;
            font-weight: 600 !important;
            border: none !important;
            outline: none !important;
            cursor: pointer !important;
          }
        `}
      </style>
    </section>
  );
};

export default AdmissionApplicationSection;
