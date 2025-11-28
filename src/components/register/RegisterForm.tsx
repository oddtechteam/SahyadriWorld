"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

/* ------------ CONFIG (sample keys, change later) ------------ */
const RAZORPAY_KEY = "rzp_test_1234567890"; // sample key
const ADMISSION_FEE_PAISA = 50000; // 500 * 100 (not shown in UI)

// EmailJS
const SERVICE_ID = "service_wswswsq";
const TEMPLATE_ID = "template_nzsewus";
const PUBLIC_KEY = "e5vZ59vfSPFDcwThA";

// Google Apps Script Web App URL (that stores JSON in one column)
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbyPglIv5u21WeEcAe1nAltqsGFTbXd5R8sICO_pGaYpQiQUHebnflS6t0pHrLsgpMBh9Q/exec";

// optional PDF link
const PDF_REFERENCE = "/mnt/data/sahyadri school - Admission Form-LEGALctc.pdf";

/* -------------------- helpers & types -------------------- */

type Sibling = {
  id: string;
  name: string;
  age: string;
  std: string;
  institution: string;
};

type PrevEdu = {
  id: string;
  year: string;
  school: string;
  standard: string;
  marks: string;
};

const uid = () => Math.random().toString(36).slice(2, 10);
const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s);
const isPhone = (s: string) => /^\d{10}$/.test(s);
const isAadhar = (s: string) => /^\d{12}$/.test(s);

const onlyDigits = (value: string, max: number = 10) =>
  value.replace(/\D/g, "").slice(0, max);

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const RegisterForm: React.FC = () => {
  /* step 1 = payment, step 2 = full form */
  const [step, setStep] = useState<1 | 2>(1);

  /* ---------------- Payment state ---------------- */
  const [payerName, setPayerName] = useState("");
  const [payerPhone, setPayerPhone] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  /* ---------------- Basic student / parent state (simplified) ---------------- */
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthWords, setBirthWords] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [community, setCommunity] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [email, setEmail] = useState("");
  const [distanceKms, setDistanceKms] = useState("");
  const [smsMobile, setSmsMobile] = useState("");

  // emergency
  const [emContactNo, setEmContactNo] = useState("");
  const [emContactName, setEmContactName] = useState("");
  const [emRelation, setEmRelation] = useState("");

  // family
  const [fatherName, setFatherName] = useState("");
  const [fatherMobile, setFatherMobile] = useState("");
  const [fatherAnnualIncome, setFatherAnnualIncome] = useState("");
  const [fatherAadhar, setFatherAadhar] = useState("");

  const [motherNameState, setMotherNameState] = useState("");
  const [motherMobile, setMotherMobile] = useState("");
  const [motherAnnualIncome, setMotherAnnualIncome] = useState("");
  const [motherAadhar, setMotherAadhar] = useState("");

  const [isSingleParent, setIsSingleParent] = useState<
    "none" | "mother" | "father"
  >("none");
  const [sponsoredBy, setSponsoredBy] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");

  // dynamic sections
  const [siblings, setSiblings] = useState<Sibling[]>([
    { id: uid(), name: "", age: "", std: "", institution: "" },
  ]);
  const [prevEdu, setPrevEdu] = useState<PrevEdu[]>([
    { id: uid(), year: "", school: "", standard: "", marks: "" },
  ]);

  // photos (only previews; no file upload to backend)
  const [previewFather, setPreviewFather] = useState<string | null>(null);
  const [previewMother, setPreviewMother] = useState<string | null>(null);
  const [previewStudent, setPreviewStudent] = useState<string | null>(null);

  // board flags
  const [boardSSC, setBoardSSC] = useState(false);
  const [boardCBSE, setBoardCBSE] = useState(false);
  const [boardICSE, setBoardICSE] = useState(false);
  const [boardOther, setBoardOther] = useState("");

  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------- helper: file preview ---------------- */
  const fileToPreview = (file: File | null): Promise<string | null> => {
    if (!file) return Promise.resolve(null);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleFile = async (
    e: ChangeEvent<HTMLInputElement>,
    which: "father" | "mother" | "student"
  ) => {
    const f = e.target.files?.[0] ?? null;
    if (!f) return;
    const preview = await fileToPreview(f);
    if (which === "father") setPreviewFather(preview);
    if (which === "mother") setPreviewMother(preview);
    if (which === "student") setPreviewStudent(preview);
  };

  /* ---------------- sibling / prevEdu helpers ---------------- */
  const addSibling = () =>
    setSiblings((s) => [
      ...s,
      { id: uid(), name: "", age: "", std: "", institution: "" },
    ]);

  const updateSibling = (id: string, field: keyof Sibling, value: string) =>
    setSiblings((s) =>
      s.map((x) => (x.id === id ? { ...x, [field]: value } : x))
    );

  const removeSibling = (id: string) =>
    setSiblings((s) => s.filter((x) => x.id !== id));

  const addPrev = () =>
    setPrevEdu((p) => [
      ...p,
      { id: uid(), year: "", school: "", standard: "", marks: "" },
    ]);

  const updatePrev = (id: string, field: keyof PrevEdu, value: string) =>
    setPrevEdu((p) =>
      p.map((x) => (x.id === id ? { ...x, [field]: value } : x))
    );

  const removePrev = (id: string) =>
    setPrevEdu((p) => p.filter((x) => x.id !== id));

  /* ---------------- payment step ---------------- */

  const startPayment = async () => {
    setErrors({});

    if (!payerName.trim()) {
      setErrors({ payerName: "Name is required to proceed with payment." });
      return;
    }
    if (!isPhone(payerPhone)) {
      setErrors({ payerPhone: "Enter a valid 10-digit phone number." });
      return;
    }

    if (typeof window === "undefined" || !window.Razorpay) {
      Swal.fire(
        "Payment Error",
        "Razorpay script is not loaded. Please check your integration.",
        "error"
      );
      return;
    }

    setIsPaying(true);

    try {
      const options = {
        key: RAZORPAY_KEY,
        amount: ADMISSION_FEE_PAISA,
        currency: "INR",
        name: "Sahyadri World School",
        description: "Admission Registration Fee",
        prefill: {
          name: payerName,
          contact: payerPhone,
        },
        theme: { color: "#0077cc" },
        handler: (response: any) => {
          setPaymentId(response?.razorpay_payment_id ?? null);
          setOrderId(response?.razorpay_order_id ?? null);
          setSignature(response?.razorpay_signature ?? null);

          Swal.fire(
            "Payment Successful",
            "Thank you. Please complete the admission form.",
            "success"
          );
          setStep(2);
        },
        modal: {
          ondismiss: () => {
            setIsPaying(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      Swal.fire(
        "Payment Error",
        "Could not initialize Razorpay. Check console.",
        "error"
      );
    } finally {
      setIsPaying(false);
    }
  };

  /* ---------------- validation ---------------- */

  const validateFull = () => {
    const e: Record<string, string> = {};

    if (!firstName.trim()) e.firstName = "First name is required";
    if (!lastName.trim()) e.lastName = "Last name is required";
    if (!gender.trim()) e.gender = "Gender is required";
    if (!birthDate) e.birthDate = "Birth date is required";

    if (!residentialAddress.trim())
      e.residentialAddress = "Residential address required";

    if (!mobile1.trim() || !isPhone(mobile1))
      e.mobile1 = "Enter a valid 10-digit mobile";

    if (email && !isEmail(email)) e.email = "Invalid email address";
    if (aadhar && !isAadhar(aadhar)) e.aadhar = "Aadhar must be 12 digits";

    if (!emContactNo || !isPhone(emContactNo))
      e.emContactNo = "Valid emergency contact required";
    if (!emContactName) e.emContactName = "Emergency contact name required";
    if (!emRelation) e.emRelation = "Emergency relation required";

    if (!fatherName && !motherNameState)
      e.parent = "At least one parent name is required";

    if (!agree) e.agree = "You must accept the declaration before submitting";

    if (!paymentId)
      e.payment =
        "Registration fee payment is required before submitting the application.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- submit ---------------- */

  const resetAll = () => {
    setPayerName("");
    setPayerPhone("");
    setPaymentId(null);
    setOrderId(null);
    setSignature(null);

    setFirstName("");
    setMiddleName("");
    setLastName("");
    setGender("");
    setBirthDate("");
    setBirthWords("");
    setBloodGroup("");
    setBirthPlace("");
    setReligion("");
    setCaste("");
    setCommunity("");
    setAadhar("");
    setMotherTongue("");
    setResidentialAddress("");
    setCorrespondenceAddress("");
    setMobile1("");
    setMobile2("");
    setEmail("");
    setDistanceKms("");
    setSmsMobile("");

    setEmContactNo("");
    setEmContactName("");
    setEmRelation("");

    setFatherName("");
    setFatherMobile("");
    setFatherAnnualIncome("");
    setFatherAadhar("");

    setMotherNameState("");
    setMotherMobile("");
    setMotherAnnualIncome("");
    setMotherAadhar("");

    setIsSingleParent("none");
    setSponsoredBy("");
    setPermanentAddress("");

    setSiblings([{ id: uid(), name: "", age: "", std: "", institution: "" }]);
    setPrevEdu([{ id: uid(), year: "", school: "", standard: "", marks: "" }]);

    setPreviewFather(null);
    setPreviewMother(null);
    setPreviewStudent(null);

    setBoardSSC(false);
    setBoardCBSE(false);
    setBoardICSE(false);
    setBoardOther("");

    setAgree(false);
    setErrors({});
  };

  const submitApplication = async (ev: FormEvent) => {
    ev.preventDefault();

    if (!validateFull()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        formType: "admission-register", // so Apps Script can route
        payment: {
          payerName,
          payerPhone,
          paymentId,
          orderId,
          signature,
          amountPaise: ADMISSION_FEE_PAISA,
        },
        student: {
          firstName,
          middleName,
          lastName,
          gender,
          birthDate,
          birthWords,
          bloodGroup,
          birthPlace,
          religion,
          caste,
          community,
          aadhar,
          motherTongue,
          residentialAddress,
          correspondenceAddress,
          mobile1,
          mobile2,
          email,
          distanceKms,
          smsMobile,
        },
        emergency: {
          emContactNo,
          emContactName,
          emRelation,
        },
        father: {
          fatherName,
          fatherMobile,
          fatherAnnualIncome,
          fatherAadhar,
        },
        mother: {
          motherNameState,
          motherMobile,
          motherAnnualIncome,
          motherAadhar,
        },
        other: {
          isSingleParent,
          sponsoredBy,
          permanentAddress,
        },
        siblings,
        previousEducation: prevEdu,
        boards: {
          boardSSC,
          boardCBSE,
          boardICSE,
          boardOther,
        },
        photos: {
          previewFather,
          previewMother,
          previewStudent,
        },
        meta: {
          submittedAt: new Date().toISOString(),
        },
      };

      // 🔵 1) Send via EmailJS (optional, remove if not needed)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload as any, PUBLIC_KEY);

      // 🔵 2) Send to Google Sheets (Apps Script)
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      Swal.fire("Submitted!", "Application submitted successfully.", "success");

      resetAll();
      setStep(1); // back to payment step
    } catch (err) {
      console.error("Submission error:", err);
      Swal.fire(
        "Error",
        "Submission failed — please check your network / console.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- styles ---------------- */

  const phoneHandler =
    (setter: (v: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(onlyDigits(e.target.value, 10));

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
        padding: 20,
        background: "linear-gradient(180deg,#f5f8ff 0%,#fff 100%)",
      }}
    >
      <style>{`
      .reg-control {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #c5d3e6 !important; /* visible border */
  background: #f4f8ff !important; /* light blue so input is visible */
  font-size: 14px;
  color: #0b2b5c !important; /* dark text */
}

.reg-control::placeholder {
  color: #7a8ba3 !important; /* visible placeholder */
}

.reg-control:focus {
  outline: none;
  border-color: #0077cc !important; /* deep blue */
  background: #eef5ff !important; /* slightly brighter focus bg */
  box-shadow: 0 0 0 3px rgba(0,119,204,0.15) !important;
}
  
        .reg-card {
          max-width: 1100px;
          margin: 0 auto;
          background: #fff;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(9,30,66,0.08);
        }
        .reg-title {
          color: #0b2b5c;
          font-size: 26px;
          font-weight: 800;
          text-align: center;
        }
        .reg-sub {
          color: #004080;
          text-align: center;
          margin: 8px 0 18px;
          font-size: 15px;
        }
        .reg-section-head {
          display:flex;
          align-items:center;
          gap:10px;
          margin:18px 0 12px;
        }
        .reg-section-pill {
          background:#0b2b5c;
          color:#fff;
          padding:6px 12px;
          border-radius:6px;
          font-weight:700;
          font-size:14px;
        }
        .reg-section-accent {
          width:6px;
          height:26px;
          border-radius:3px;
          background:#ffd24a;
        }
        .reg-grid {
          display:grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap:12px;
        }
        .reg-grid-2 {
          display:grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap:12px;
        }
        .reg-full {
          grid-column: 1 / -1;
        }
        .reg-control {
          width:100%;
          padding:10px 12px;
          border-radius:10px;
          border:1px solid #e6eefc;
          background:#fbfdff;
          font-size:14px;
        }
        .reg-control:focus {
          outline:none;
          border-color:#0077cc;
          box-shadow:0 0 0 1px rgba(0,119,204,0.15);
        }
        .reg-textarea {
          min-height:72px;
          resize:vertical;
        }
        .reg-small { font-size:13px; color:black; }
        .reg-muted { font-size:13px; color:#6b7280; }
        .reg-error { color:#d9534f; font-size:13px; margin-top:4px; }
        .reg-btn-primary {
          background:#0077cc;
          color:#fff;
          padding:11px 20px;
          border-radius:12px;
          border:none;
          font-weight:700;
          cursor:pointer;
        }
        .reg-btn-primary[disabled] {
          opacity:0.7;
          cursor:not-allowed;
        }
        .reg-btn-outline {
          background:transparent;
          border:1px solid #e6eefc;
          padding:8px 12px;
          border-radius:10px;
          cursor:pointer;
          font-size:13px;
        }
        .reg-photos-row {
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }
        .reg-photo-card {
          flex:1;
          min-width:200px;
          background:#f7fbff;
          border-radius:10px;
          padding:12px;
          border:1px dashed rgba(0,119,204,0.12);
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        .reg-photo-preview {
          width:100%;
          height:140px;
          border-radius:8px;
          background:#eaf1ff;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .reg-photo-preview img {
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .reg-upload-btn {
          display:inline-block;
          padding:6px 12px;
          background:#0077cc;
          color:#fff;
          border-radius:20px;
          cursor:pointer;
          font-size:13px;
          text-align:center;
        }
        .reg-step-indicators {
          display:flex;
          justify-content:center;
          gap:12px;
          margin-bottom:18px;
        }
        .reg-step-dot {
          width:40px;
          height:40px;
          border-radius:999px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
          font-size:15px;
        }
        @media (max-width: 900px) {
          .reg-grid { grid-template-columns: 1fr; }
          .reg-grid-2 { grid-template-columns: 1fr; }
          .reg-card { padding:16px; }
        }
      `}</style>

      <div className="reg-card">
        <div className="reg-title">Sahyadri World School — Admission</div>
        <p className="reg-sub">
          Registration starts with the application fee. After payment, complete
          the detailed admission form.
        </p>

        <div className="reg-step-indicators">
          <div
            className="reg-step-dot"
            style={{
              background: step === 1 ? "#0077cc" : "#d0d9e8",
              color: step === 1 ? "#fff" : "#333",
            }}
          >
            1
          </div>
          <div
            className="reg-step-dot"
            style={{
              background: step === 2 ? "#0077cc" : "#d0d9e8",
              color: step === 2 ? "#fff" : "#333",
            }}
          >
            2
          </div>
        </div>

        {/* top error banner */}
        {errors.payment && (
          <div
            style={{
              marginBottom: 12,
              padding: 10,
              borderRadius: 8,
              background: "#fff6f6",
              color: "#7b1b1b",
              fontSize: 13,
            }}
          >
            {errors.payment}
          </div>
        )}

        {/* STEP 1: PAYMENT */}
        {step === 1 && (
          <div
            style={{
              maxWidth: 520,
              margin: "8px auto 0",
            }}
          >
            <h3 style={{ color: "#0b2b5c", marginBottom: 10 }}>Step 1 – Payment</h3>
            <p className="reg-muted">
              Enter your details below and proceed to payment. The amount will
              not be displayed here but is configured in the system.
            </p>

            <div style={{ marginBottom: 10 }}>
              <label className="reg-small">Parent / Guardian Name</label>
              <input
                className="reg-control"
                value={payerName}
                onChange={(e) => setPayerName(e.target.value)}
              />
              {errors.payerName && (
                <div className="reg-error">{errors.payerName}</div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label className="reg-small">Mobile Number (10 digits)</label>
              <input
                className="reg-control"
                value={payerPhone}
                onChange={phoneHandler(setPayerPhone)}
              />
              {errors.payerPhone && (
                <div className="reg-error">{errors.payerPhone}</div>
              )}
            </div>

            <button
              type="button"
              className="reg-btn-primary"
              disabled={isPaying}
              onClick={startPayment}
            >
              {isPaying ? "Processing..." : "Pay & Continue"}
            </button>

            <p className="reg-muted" style={{ marginTop: 8 }}>
              Payment reference:{" "}
              <strong>{paymentId ? paymentId : "Not paid yet"}</strong>
            </p>
          </div>
        )}

        {/* STEP 2: FULL FORM */}
        {step === 2 && (
          <form onSubmit={submitApplication}>
            {/* Photos */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Photos</div>
              <div className="reg-section-accent" />
            </div>

            <div className="reg-photos-row">
              <div className="reg-photo-card">
                <div className="reg-small" style={{ fontWeight: 700 }}>
                  Father&apos;s Photo
                </div>
                <div className="reg-photo-preview">
                  {previewFather ? (
                    <img src={previewFather} alt="father" />
                  ) : (
                    <span className="reg-muted">No photo selected</span>
                  )}
                </div>
                <label className="reg-upload-btn">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e, "father")}
                  />
                </label>
              </div>

              <div className="reg-photo-card">
                <div className="reg-small" style={{ fontWeight: 700 }}>
                  Mother&apos;s Photo
                </div>
                <div className="reg-photo-preview">
                  {previewMother ? (
                    <img src={previewMother} alt="mother" />
                  ) : (
                    <span className="reg-muted">No photo selected</span>
                  )}
                </div>
                <label className="reg-upload-btn">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e, "mother")}
                  />
                </label>
              </div>

              <div className="reg-photo-card">
                <div className="reg-small" style={{ fontWeight: 700 }}>
                  Student&apos;s Photo
                </div>
                <div className="reg-photo-preview">
                  {previewStudent ? (
                    <img src={previewStudent} alt="student" />
                  ) : (
                    <span className="reg-muted">No photo selected</span>
                  )}
                </div>
                <label className="reg-upload-btn">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e, "student")}
                  />
                </label>
              </div>
            </div>

            {/* Student info */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Student Information</div>
              <div className="reg-section-accent" />
            </div>

            <div className="reg-grid">
              <div>
                <label className="reg-small">First Name *</label>
                <input
                  className="reg-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <div className="reg-error">{errors.firstName}</div>
                )}
              </div>

              <div>
                <label className="reg-small">Middle Name</label>
                <input
                  className="reg-control"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Last Name *</label>
                <input
                  className="reg-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <div className="reg-error">{errors.lastName}</div>
                )}
              </div>

              <div>
                <label className="reg-small">Gender *</label>
                <input
                  className="reg-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="M / F"
                />
                {errors.gender && (
                  <div className="reg-error">{errors.gender}</div>
                )}
              </div>

              <div>
                <label className="reg-small">Date of Birth *</label>
                <input
                  type="date"
                  className="reg-control"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
                {errors.birthDate && (
                  <div className="reg-error">{errors.birthDate}</div>
                )}
              </div>

              <div>
                <label className="reg-small">DOB (in words)</label>
                <input
                  className="reg-control"
                  value={birthWords}
                  onChange={(e) => setBirthWords(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Blood Group</label>
                <input
                  className="reg-control"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Birth Place</label>
                <input
                  className="reg-control"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Religion</label>
                <input
                  className="reg-control"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Caste</label>
                <input
                  className="reg-control"
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Community</label>
                <input
                  className="reg-control"
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Aadhar No.</label>
                <input
                  className="reg-control"
                  value={aadhar}
                  maxLength={12}
                  onChange={(e) => setAadhar(onlyDigits(e.target.value, 12))}
                />
                {errors.aadhar && (
                  <div className="reg-error">{errors.aadhar}</div>
                )}
              </div>

              <div className="reg-full">
                <label className="reg-small">Residential Address *</label>
                <textarea
                  className="reg-control reg-textarea"
                  value={residentialAddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                />
                {errors.residentialAddress && (
                  <div className="reg-error">{errors.residentialAddress}</div>
                )}
              </div>

              <div className="reg-full">
                <label className="reg-small">Correspondence Address</label>
                <textarea
                  className="reg-control reg-textarea"
                  value={correspondenceAddress}
                  onChange={(e) => setCorrespondenceAddress(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Mobile No. (1) *</label>
                <input
                  className="reg-control"
                  value={mobile1}
                  onChange={phoneHandler(setMobile1)}
                />
                {errors.mobile1 && (
                  <div className="reg-error">{errors.mobile1}</div>
                )}
              </div>

              <div>
                <label className="reg-small">Mobile No. (2)</label>
                <input
                  className="reg-control"
                  value={mobile2}
                  onChange={phoneHandler(setMobile2)}
                />
              </div>

              <div>
                <label className="reg-small">Email</label>
                <input
                  className="reg-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="reg-error">{errors.email}</div>
                )}
              </div>

              <div>
                <label className="reg-small">Mother Tongue</label>
                <input
                  className="reg-control"
                  value={motherTongue}
                  onChange={(e) => setMotherTongue(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Distance from School (km)</label>
                <input
                  className="reg-control"
                  value={distanceKms}
                  onChange={(e) => setDistanceKms(e.target.value)}
                />
              </div>

              <div>
                <label className="reg-small">Preferred SMS Mobile</label>
                <input
                  className="reg-control"
                  value={smsMobile}
                  onChange={phoneHandler(setSmsMobile)}
                />
              </div>
            </div>

            {/* Emergency */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Emergency Contact</div>
              <div className="reg-section-accent" />
            </div>

            <div className="reg-grid-2">
              <div>
                <label className="reg-small">Contact Number *</label>
                <input
                  className="reg-control"
                  value={emContactNo}
                  onChange={phoneHandler(setEmContactNo)}
                />
                {errors.emContactNo && (
                  <div className="reg-error">{errors.emContactNo}</div>
                )}
              </div>
              <div>
                <label className="reg-small">Name *</label>
                <input
                  className="reg-control"
                  value={emContactName}
                  onChange={(e) => setEmContactName(e.target.value)}
                />
                {errors.emContactName && (
                  <div className="reg-error">{errors.emContactName}</div>
                )}
              </div>
              <div className="reg-full">
                <label className="reg-small">Relation *</label>
                <input
                  className="reg-control"
                  value={emRelation}
                  onChange={(e) => setEmRelation(e.target.value)}
                />
                {errors.emRelation && (
                  <div className="reg-error">{errors.emRelation}</div>
                )}
              </div>
            </div>

            {/* Family */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Family Details</div>
              <div className="reg-section-accent" />
            </div>

            <div className="reg-grid-2">
              <div>
                <label className="reg-small">Father / Guardian Name *</label>
                <input
                  className="reg-control"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
              <div>
                <label className="reg-small">Father Mobile</label>
                <input
                  className="reg-control"
                  value={fatherMobile}
                  onChange={phoneHandler(setFatherMobile)}
                />
              </div>
              <div>
                <label className="reg-small">Father Annual Income</label>
                <input
                  className="reg-control"
                  value={fatherAnnualIncome}
                  onChange={(e) => setFatherAnnualIncome(e.target.value)}
                />
              </div>
              <div>
                <label className="reg-small">Father Aadhar</label>
                <input
                  className="reg-control"
                  value={fatherAadhar}
                  maxLength={12}
                  onChange={(e) =>
                    setFatherAadhar(onlyDigits(e.target.value, 12))
                  }
                />
              </div>

              <div>
                <label className="reg-small">Mother / Guardian Name *</label>
                <input
                  className="reg-control"
                  value={motherNameState}
                  onChange={(e) => setMotherNameState(e.target.value)}
                />
              </div>
              <div>
                <label className="reg-small">Mother Mobile</label>
                <input
                  className="reg-control"
                  value={motherMobile}
                  onChange={phoneHandler(setMotherMobile)}
                />
              </div>
              <div>
                <label className="reg-small">Mother Annual Income</label>
                <input
                  className="reg-control"
                  value={motherAnnualIncome}
                  onChange={(e) => setMotherAnnualIncome(e.target.value)}
                />
              </div>
              <div>
                <label className="reg-small">Mother Aadhar</label>
                <input
                  className="reg-control"
                  value={motherAadhar}
                  maxLength={12}
                  onChange={(e) =>
                    setMotherAadhar(onlyDigits(e.target.value, 12))
                  }
                />
              </div>
            </div>

            {/* Sponsorship & address */}
            <div className="reg-grid-2" style={{ marginTop: 12 }}>
              <div className="reg-full">
                <label className="reg-small">
                  If child is sponsored, mention agency
                </label>
                <input
                  className="reg-control"
                  value={sponsoredBy}
                  onChange={(e) => setSponsoredBy(e.target.value)}
                />
              </div>

              <div className="reg-full">
                <label className="reg-small">Permanent Address</label>
                <textarea
                  className="reg-control reg-textarea"
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Siblings */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Siblings</div>
              <div className="reg-section-accent" />
            </div>

            {siblings.map((s) => (
              <div key={s.id} className="reg-grid" style={{ marginBottom: 8 }}>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Name"
                    value={s.name}
                    onChange={(e) =>
                      updateSibling(s.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Age"
                    value={s.age}
                    onChange={(e) =>
                      updateSibling(s.id, "age", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Std"
                    value={s.std}
                    onChange={(e) =>
                      updateSibling(s.id, "std", e.target.value)
                    }
                  />
                </div>
                <div className="reg-full">
                  <input
                    className="reg-control"
                    placeholder="Institution"
                    value={s.institution}
                    onChange={(e) =>
                      updateSibling(s.id, "institution", e.target.value)
                    }
                  />
                </div>
                {siblings.length > 1 && (
                  <div>
                    <button
                      type="button"
                      className="reg-btn-outline"
                      onClick={() => removeSibling(s.id)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              className="reg-btn-outline"
              onClick={addSibling}
              style={{ marginBottom: 12 }}
            >
              + Add Sibling
            </button>

            {/* Previous Education */}
            <div className="reg-section-head">
              <div className="reg-section-pill">Previous Education</div>
              <div className="reg-section-accent" />
            </div>

            {prevEdu.map((p) => (
              <div key={p.id} className="reg-grid" style={{ marginBottom: 8 }}>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Year"
                    value={p.year}
                    onChange={(e) =>
                      updatePrev(p.id, "year", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    className="reg-control"
                    placeholder="School"
                    value={p.school}
                    onChange={(e) =>
                      updatePrev(p.id, "school", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Standard"
                    value={p.standard}
                    onChange={(e) =>
                      updatePrev(p.id, "standard", e.target.value)
                    }
                  />
                </div>
                <div>
                  <input
                    className="reg-control"
                    placeholder="Marks"
                    value={p.marks}
                    onChange={(e) =>
                      updatePrev(p.id, "marks", e.target.value)
                    }
                  />
                </div>
                {prevEdu.length > 1 && (
                  <div>
                    <button
                      type="button"
                      className="reg-btn-outline"
                      onClick={() => removePrev(p.id)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              className="reg-btn-outline"
              onClick={addPrev}
              style={{ marginBottom: 12 }}
            >
              + Add Row
            </button>

            {/* Board */}
            <div style={{ marginTop: 8 }}>
              <label className="reg-small" style={{ fontWeight: 700 }}>
                Previous School Affiliation
              </label>
              <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                <label className="reg-small">
                  <input
                    type="checkbox"
                    checked={boardSSC}
                    onChange={(e) => setBoardSSC(e.target.checked)}
                    style={{ marginRight: 4 }}
                  />
                  SSC
                </label>
                <label className="reg-small">
                  <input
                    type="checkbox"
                    checked={boardCBSE}
                    onChange={(e) => setBoardCBSE(e.target.checked)}
                    style={{ marginRight: 4 }}
                  />
                  CBSE
                </label>
                <label className="reg-small">
                  <input
                    type="checkbox"
                    checked={boardICSE}
                    onChange={(e) => setBoardICSE(e.target.checked)}
                    style={{ marginRight: 4 }}
                  />
                  ICSE
                </label>
                <label className="reg-small">
                  <input
                    type="checkbox"
                    checked={!!boardOther}
                    onChange={(e) =>
                      setBoardOther(e.target.checked ? boardOther : "")
                    }
                    style={{ marginRight: 4 }}
                  />
                  Other
                </label>
                <input
                  className="reg-control"
                  style={{ maxWidth: 200 }}
                  value={boardOther}
                  onChange={(e) => setBoardOther(e.target.value)}
                  placeholder="Specify board"
                />
              </div>
            </div>

            {/* Declaration */}
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginTop: 16,
              }}
            >
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginTop: 4 }}
              />
              <div className="reg-small">
                I hereby declare that the information given in this application
                is true and correct to the best of my knowledge. I agree to
                abide by the rules and regulations of Sahyadri World School and
                understand that the registration fee is non-refundable.
                {errors.agree && (
                  <div className="reg-error" style={{ marginTop: 4 }}>
                    {errors.agree}
                  </div>
                )}
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button
                type="submit"
                className="reg-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>

            {PDF_REFERENCE && (
              <div
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  fontSize: 13,
                }}
              >
                <a
                  href={PDF_REFERENCE}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#0077cc" }}
                >
                  View / Download official PDF form
                </a>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
