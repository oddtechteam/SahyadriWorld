// src/components/register/RegisterForm.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

/**
 * Final Admission Form with Razorpay (TEST), Full payload EmailJS & Google Sheets (full columns)
 *
 * - Razorpay: TEST mode by default (replace RAZORPAY_KEY)
 * - EmailJS: full payload (Option C)
 * - Google Sheets: full columns (Option 2)
 *
 * Replace the constants below with your real keys/URLs before deploying.
 */

/* ================== CONFIG — REPLACE THESE ================== */
const RAZORPAY_KEY = "rzp_test_1234567890"; // <-- Replace with your rzptest key
const ADMISSION_FEE_PAISA = 50000; // 500 INR = 50000 paise

const SERVICE_ID = "service_wswswsq"; // EmailJS service id
const TEMPLATE_ID = "template_nzsewus"; // EmailJS template id
const PUBLIC_KEY = "e5vZ59vfSPFDcwThA"; // EmailJS public key

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbyPglIv5u21WeEcAe1nAltqsGFTbXd5R8sICO_pGaYpQiQUHebnflS6t0pHrLsgpMBh9Q/exec";
/* ============================================================ */

/* PDF path (uploaded file path — your tool will convert to URL) */
const PDF_REFERENCE = "/mnt/data/sahyadri school - Admission Form-LEGALctc.pdf";

/* -------------------- Types -------------------- */
type Sibling = { id: string; name: string; age: string; std: string; institution: string };
type PrevEdu = { id: string; year: string; school: string; standard: string; marks: string };

/* -------------------- Helpers -------------------- */
const uid = () => Math.random().toString(36).slice(2, 10);
const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s);
const isPhone = (s: string) => /^\d{10}$/.test(s); // strict 10-digit Indian mobile
const isAadhar = (s: string) => /^\d{12}$/.test(s);

const RegisterForm: React.FC = () => {
  // ui step: 1 = payment, 2 = full form
  const [step, setStep] = useState<1 | 2>(1);

  /* ---------------- Payment (Step 1) ---------------- */
  const [payerName, setPayerName] = useState("");
  const [payerPhone, setPayerPhone] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  // save payment result details
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  /* ---------------- Full Form (Step 2) states ---------------- */
  // student details
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
  const [fatherNationality, setFatherNationality] = useState("");
  const [fatherQualification, setFatherQualification] = useState("");
  const [fatherOfficeAddress, setFatherOfficeAddress] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [fatherMobile, setFatherMobile] = useState("");
  const [fatherAnnualIncome, setFatherAnnualIncome] = useState("");
  const [fatherAadhar, setFatherAadhar] = useState("");

  const [motherNameState, setMotherNameState] = useState("");
  const [motherNationality, setMotherNationality] = useState("");
  const [motherQualification, setMotherQualification] = useState("");
  const [motherOfficeAddress, setMotherOfficeAddress] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [motherMobile, setMotherMobile] = useState("");
  const [motherAnnualIncome, setMotherAnnualIncome] = useState("");
  const [motherAadhar, setMotherAadhar] = useState("");

  // other
  const [isSingleParent, setIsSingleParent] = useState<"none" | "mother" | "father">("none");
  const [sponsoredBy, setSponsoredBy] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");

  // dynamic
  const [siblings, setSiblings] = useState<Sibling[]>([
    { id: uid(), name: "", age: "", std: "", institution: "" },
  ]);
  const [prevEdu, setPrevEdu] = useState<PrevEdu[]>([
    { id: uid(), year: "", school: "", standard: "", marks: "" },
  ]);

  // uploads
  // const [photoFather, setPhotoFather] = useState<File | null>(null);
  // const [photoMother, setPhotoMother] = useState<File | null>(null);
  // const [photoStudent, setPhotoStudent] = useState<File | null>(null);
  const [previewFather, setPreviewFather] = useState<string | null>(null);
  const [previewMother, setPreviewMother] = useState<string | null>(null);
  const [previewStudent, setPreviewStudent] = useState<string | null>(null);

  // boards
  const [boardSSC, setBoardSSC] = useState(false);
  const [boardCBSE, setBoardCBSE] = useState(false);
  const [boardICSE, setBoardICSE] = useState(false);
  const [boardOther, setBoardOther] = useState("");

  // ack & misc
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------- File handlers (previews) ---------------- */
  const fileToPreview = (file: File | null): Promise<string | null> => {
    if (!file) return Promise.resolve(null);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleFile = async (e: ChangeEvent<HTMLInputElement>, which: "father" | "mother" | "student") => {
    const f = e.target.files?.[0] ?? null;
    if (!f) return;
    if (which === "father") {
      // setPhotoFather(f);
      const p = await fileToPreview(f);
      setPreviewFather(p);
    } else if (which === "mother") {
      // setPhotoMother(f);
      const p = await fileToPreview(f);
      setPreviewMother(p);
    } else {
      // setPhotoStudent(f);
      const p = await fileToPreview(f);
      setPreviewStudent(p);
    }
  };

  /* ---------------- dynamic helpers ---------------- */
  const addSibling = () => setSiblings((s) => [...s, { id: uid(), name: "", age: "", std: "", institution: "" }]);
  const updateSibling = (id: string, field: keyof Sibling, value: string) =>
    setSiblings((s) => s.map((x) => (x.id === id ? { ...x, [field]: value } : x)));
  const removeSibling = (id: string) => setSiblings((s) => s.filter((x) => x.id !== id));

  const addPrev = () => setPrevEdu((p) => [...p, { id: uid(), year: "", school: "", standard: "", marks: "" }]);
  const updatePrev = (id: string, field: keyof PrevEdu, value: string) =>
    setPrevEdu((p) => p.map((x) => (x.id === id ? { ...x, [field]: value } : x)));
  const removePrev = (id: string) => setPrevEdu((p) => p.filter((x) => x.id !== id));

  /* ---------------- Razorpay Payment (client popup) ---------------- */
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

    setIsPaying(true);

    try {
      // Prepare Razorpay options (client-side popup)
      const options: any = {
        key: RAZORPAY_KEY,
        amount: ADMISSION_FEE_PAISA,
        currency: "INR",
        name: "Sahyadri World School",
        description: "Admission Registration Fee",
        prefill: { name: payerName, contact: payerPhone },
        theme: { color: "#0077cc" },
        handler: function (response: any) {
          // response contains: razorpay_payment_id, razorpay_order_id (if order used), razorpay_signature (if provided)
          setPaymentId(response?.razorpay_payment_id ?? null);
          setOrderId(response?.razorpay_order_id ?? null);
          setSignature(response?.razorpay_signature ?? null);

          Swal.fire("Payment successful", "Thank you. Please complete the application form.", "success");
          // proceed to full form
          setStep(2);
        },
        modal: {
          ondismiss: function () {
            // user closed
            setIsPaying(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      Swal.fire("Payment Error", "Could not initialize payment. Check console.", "error");
    } finally {
      setIsPaying(false);
    }
  };

  /* ---------------- Validation - full form ---------------- */
  const validateFull = () => {
    const e: Record<string, string> = {};
    // basic required checks
    if (!firstName.trim()) e.firstName = "First name is required";
    if (!lastName.trim()) e.lastName = "Last name is required";
    if (!gender.trim()) e.gender = "Gender is required";
    if (!birthDate) e.birthDate = "Birth date is required";
    if (!residentialAddress.trim()) e.residentialAddress = "Residential address required";
    if (!mobile1.trim() || !isPhone(mobile1)) e.mobile1 = "Enter a valid 10-digit mobile";
    if (email && !isEmail(email)) e.email = "Invalid email address";
    if (aadhar && !isAadhar(aadhar)) e.aadhar = "Aadhar must be 12 digits";
    if (!emContactNo || !isPhone(emContactNo)) e.emContactNo = "Valid emergency contact required";
    if (!emContactName) e.emContactName = "Emergency contact name required";
    if (!emRelation) e.emRelation = "Emergency relation required";
    if (!fatherName && !motherNameState) e.parent = "At least one parent name is required";
    if (!agree) e.agree = "You must accept the declaration before submitting";
    // Ensure payment done (because step 1 must be completed)
    if (!paymentId) e.payment = "Registration fee payment is required before submission";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- Submit final application ---------------- */
  const submitApplication = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validateFull()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setIsSubmitting(true);

    try {
      // Prepare full payload with all fields as separate keys (Option C + Google Sheet full columns)
      const payload: Record<string, any> = {
        // Payment details
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId,
        razorpay_signature: signature,
        registration_amount_paise: ADMISSION_FEE_PAISA,
        registration_amount_inr: ADMISSION_FEE_PAISA / 100,

        // Student information
        student_first_name: firstName,
        student_middle_name: middleName,
        student_last_name: lastName,
        student_gender: gender,
        student_birth_date: birthDate,
        student_birth_in_words: birthWords,
        student_blood_group: bloodGroup,
        student_birth_place: birthPlace,
        student_religion: religion,
        student_caste: caste,
        student_community: community,
        student_aadhar: aadhar,
        student_mother_tongue: motherTongue,
        student_residential_address: residentialAddress,
        student_correspondence_address: correspondenceAddress,
        student_mobile_1: mobile1,
        student_mobile_2: mobile2,
        student_email: email,
        student_distance_kms: distanceKms,
        student_preferred_sms_number: smsMobile,

        // Emergency
        emergency_contact_number: emContactNo,
        emergency_contact_name: emContactName,
        emergency_contact_relation: emRelation,

        // Father
        father_name: fatherName,
        father_nationality: fatherNationality,
        father_qualification: fatherQualification,
        father_office_address: fatherOfficeAddress,
        father_occupation: fatherOccupation,
        father_mobile: fatherMobile,
        father_annual_income: fatherAnnualIncome,
        father_aadhar: fatherAadhar,

        // Mother
        mother_name: motherNameState,
        mother_nationality: motherNationality,
        mother_qualification: motherQualification,
        mother_office_address: motherOfficeAddress,
        mother_occupation: motherOccupation,
        mother_mobile: motherMobile,
        mother_annual_income: motherAnnualIncome,
        mother_aadhar: motherAadhar,

        // Other
        is_single_parent: isSingleParent,
        sponsored_by: sponsoredBy,
        permanent_address: permanentAddress,

        // Siblings (store as JSON string and also short summary)
        siblings_json: JSON.stringify(siblings),
        siblings_summary: siblings.map((s) => `${s.name}|${s.age}|${s.std}|${s.institution}`).join(";;"),

        // Previous education
        prev_education_json: JSON.stringify(prevEdu),
        prev_education_summary: prevEdu.map((p) => `${p.year}|${p.school}|${p.standard}|${p.marks}`).join(";;"),

        // Boards
        board_ssc: boardSSC,
        board_cbse: boardCBSE,
        board_icse: boardICSE,
        board_other: boardOther,

        // photo placeholders: Base64 strings (optional - EmailJS can embed)
        photo_father_base64: previewFather,
        photo_mother_base64: previewMother,
        photo_student_base64: previewStudent,

        // meta
        submitted_at: new Date().toISOString(),
      };

      // Send to EmailJS (full payload)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload as any, PUBLIC_KEY);

      // Send to Google Sheets (Apps Script) — Option 2: send full columns
      // The Apps Script should expect the same keys as columns; commonly you would map columns server-side.
      // We send the payload as JSON — the script can parse and append the values to columns.
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors", // if you're using Apps Script WebApp published as "Anyone, even anonymous"
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      Swal.fire("Submitted!", "Application successfully submitted.", "success");

      // reset everything and go back to initial step (optional)
      resetAll();
      setStep(1);
    } catch (err) {
      console.error("Submission error:", err);
      Swal.fire("Error", "Submission failed — check console and network.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAll = () => {
    // payment
    setPaymentId(null);
    setOrderId(null);
    setSignature(null);
    setPayerName("");
    setPayerPhone("");
    // form fields
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
    setFatherNationality("");
    setFatherQualification("");
    setFatherOfficeAddress("");
    setFatherOccupation("");
    setFatherMobile("");
    setFatherAnnualIncome("");
    setFatherAadhar("");
    setMotherNameState("");
    setMotherNationality("");
    setMotherQualification("");
    setMotherOfficeAddress("");
    setMotherOccupation("");
    setMotherMobile("");
    setMotherAnnualIncome("");
    setMotherAadhar("");
    setIsSingleParent("none");
    setSponsoredBy("");
    setPermanentAddress("");
    setSiblings([{ id: uid(), name: "", age: "", std: "", institution: "" }]);
    setPrevEdu([{ id: uid(), year: "", school: "", standard: "", marks: "" }]);
    // setPhotoFather(null);
    // setPhotoMother(null);
    // setPhotoStudent(null);
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

  /* ---------------- UI ---------------- */
  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial", padding: 28, background: "linear-gradient(180deg,#f5f8ff 0%,#fff 100%)", minHeight: "10vh" }}>
      <style>{`
        .card { max-width: 1100px; margin: 0 auto; background: #fff; border-radius: 14px; padding: 28px; box-shadow: 0 10px 30px rgba(9,30,66,0.08); }
        .title { color: #0b2b5c; font-size: 26px; font-weight:800; text-align:center; }
        .sub { color: #004080; text-align:center; margin-top:8px; margin-bottom:18px; }
        .section-head { display:flex; align-items:center; gap:10px; margin: 18px 0; }
        .section-pill { background:#0b2b5c;color:#fff;padding:8px 12px;border-radius:6px;font-weight:700;font-size:14px; }
        .section-accent { width:6px;height:30px;background:#FFD24A;border-radius:3px; }
        .photos-row { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:12px; }
        .photo-card { flex:1; min-width:200px; background:#f7fbff; border-radius:10px; padding:12px; border:1px dashed rgba(0,119,204,0.12); display:flex; flex-direction:column; align-items:center; gap:8px; }
        .photo-preview { width:100%; height:140px; border-radius:8px; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#eaf1ff; }
        .photo-preview img{ width:100%; height:100%; object-fit:cover; }
        .upload-btn { display:inline-block; padding:8px 14px; background:#0077cc; color:#fff; border-radius:20px; cursor:pointer; font-size:13px; border:none; }
        .grid { display:grid; grid-template-columns: repeat(3,1fr); gap:12px; }
        .grid-2 { display:grid; grid-template-columns: repeat(2,1fr); gap:12px; }
        .full { grid-column:1 / -1; }
        .form-control { width:100%; padding:10px 12px; border-radius:10px; border:1px solid #e6eefc; background:#fbfdff; outline:none; font-size:14px; }
        textarea.form-control { min-height:72px; resize:vertical; }
        .small { font-size:13px; color:#555; }
        .muted { color:#6b7280; font-size:13px; }
        .error { color:#d9534f; font-size:13px; margin-top:6px; }
        .btn-primary { background:#0077cc; color:#fff; padding:12px 20px; border-radius:12px; border:none; font-weight:700; cursor:pointer; }
        .btn-outline { background:transparent; border:1px solid #e6eefc; padding:10px 12px; border-radius:10px; cursor:pointer; }
        .inline-row { display:flex; gap:8px; align-items:center; }
        .checkbox { width:16px; height:16px; }
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr; }
          .grid-2 { grid-template-columns: 1fr; }
          .photos-row { flex-direction:column; }
        }
      `}</style>

      <div className="card" role="main" aria-labelledby="admissionTitle">
        <div id="admissionTitle" className="title">Sahyadri World School — Admission</div>
        <div className="sub">Registration starts with payment of ₹500 — proceed to pay and then complete the full application.</div>

        {/* If errors exist show top banner */}
        {Object.keys(errors).length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <div style={{ padding: 12, borderRadius: 8, background: "#fff6f6", color: "#7b1b1b" }}>
              Please fix the highlighted fields below.
            </div>
          </div>
        )}

        {/* ---------- STEP 1: Payment ---------- */}
        {step === 1 && (
          <div style={{ maxWidth: 520, margin: "8px auto 24px" }}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 8px 20px rgba(9,30,66,0.04)" }}>
              <h3 style={{ margin: 0, marginBottom: 12, color: "#0b2b5c" }}>Step 1 — Payment</h3>
              <p className="muted" style={{ marginTop: 0 }}>Enter payer name and mobile, then pay ₹500 to proceed to the admission form.</p>

              <div style={{ marginBottom: 10 }}>
                <label className="small">Name</label>
                <input className="form-control" value={payerName} onChange={(e) => setPayerName(e.target.value)} />
                {errors.payerName && <div className="error">{errors.payerName}</div>}
              </div>

              <div style={{ marginBottom: 12 }}>
                <label className="small">Phone (10 digits)</label>
                <input className="form-control" value={payerPhone} onChange={(e) => setPayerPhone(e.target.value)} />
                {errors.payerPhone && <div className="error">{errors.payerPhone}</div>}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn-primary" onClick={startPayment} disabled={isPaying}>
                  {isPaying ? "Processing..." : "Pay ₹500 & Continue"}
                </button>
                {/* <button
                  className="btn-outline"
                  onClick={() =>
                    Swal.fire({
                      title: "Test Payment Info",
                      html: `<b>Test Key:</b> ${RAZORPAY_KEY}<br/><b>Amount:</b> ₹500<br/><i>Use Razorpay test cards or UPI in the test popup</i>`,
                      icon: "info",
                    })
                  }
                >
                  How to test
                </button> */}
              </div>

              <div style={{ marginTop: 10, fontSize: 13 }} className="muted">
                Payment id (after success): <strong style={{ color: "#0b2b5c" }}>{paymentId ?? "—"}</strong>
              </div>
            </div>
          </div>
        )}

        {/* ---------- STEP 2: Full Form ---------- */}
        {step === 2 && (
          <form onSubmit={submitApplication}>
            {/* Photos */}
            <div className="section-head">
              <div className="section-pill">Photos</div>
              <div className="section-accent" />
            </div>

            <div className="photos-row">
              <div className="photo-card">
                <div style={{ fontWeight: 700 }}>Affix Photo of Father</div>
                <div className="photo-preview">{previewFather ? <img src={previewFather} alt="father" /> : <span className="muted">No photo</span>}</div>
                <label className="upload-btn">
                  Upload
                  <input type="file" accept="image/*" onChange={(e) => handleFile(e, "father")} style={{ display: "none" }} />
                </label>
              </div>

              <div className="photo-card">
                <div style={{ fontWeight: 700 }}>Affix Photo of Mother</div>
                <div className="photo-preview">{previewMother ? <img src={previewMother} alt="mother" /> : <span className="muted">No photo</span>}</div>
                <label className="upload-btn">
                  Upload
                  <input type="file" accept="image/*" onChange={(e) => handleFile(e, "mother")} style={{ display: "none" }} />
                </label>
              </div>

              <div className="photo-card">
                <div style={{ fontWeight: 700 }}>Affix Photo of Student</div>
                <div className="photo-preview">{previewStudent ? <img src={previewStudent} alt="student" /> : <span className="muted">No photo</span>}</div>
                <label className="upload-btn">
                  Upload
                  <input type="file" accept="image/*" onChange={(e) => handleFile(e, "student")} style={{ display: "none" }} />
                </label>
              </div>
            </div>

            {/* Student Information */}
            <div className="section-head">
              <div className="section-pill">Student Information</div>
              <div className="section-accent" />
            </div>

            <div className="grid">
              <div>
                <label className="small">First Name *</label>
                <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>

              <div>
                <label className="small">Middle Name</label>
                <input className="form-control" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </div>

              <div>
                <label className="small">Last Name *</label>
                <input className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>

              <div>
                <label className="small">Gender *</label>
                <input className="form-control" placeholder="M / F" value={gender} onChange={(e) => setGender(e.target.value)} />
                {errors.gender && <div className="error">{errors.gender}</div>}
              </div>

              <div>
                <label className="small">Birth Date *</label>
                <input type="date" className="form-control" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                {errors.birthDate && <div className="error">{errors.birthDate}</div>}
              </div>

              <div>
                <label className="small">Date of Birth (in words)</label>
                <input className="form-control" value={birthWords} onChange={(e) => setBirthWords(e.target.value)} />
              </div>

              <div>
                <label className="small">Blood Group</label>
                <input className="form-control" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
              </div>

              <div>
                <label className="small">Birth Place</label>
                <input className="form-control" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
              </div>

              <div>
                <label className="small">Religion</label>
                <input className="form-control" value={religion} onChange={(e) => setReligion(e.target.value)} />
              </div>

              <div className="full">
                <label className="small">Residential Address *</label>
                <textarea className="form-control" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} />
                {errors.residentialAddress && <div className="error">{errors.residentialAddress}</div>}
              </div>

              <div className="full">
                <label className="small">Correspondence Address</label>
                <textarea className="form-control" value={correspondenceAddress} onChange={(e) => setCorrespondenceAddress(e.target.value)} />
              </div>

              <div>
                <label className="small">Mobile No. (1) *</label>
                <input className="form-control" value={mobile1} onChange={(e) => setMobile1(e.target.value)} />
                {errors.mobile1 && <div className="error">{errors.mobile1}</div>}
              </div>

              <div>
                <label className="small">Mobile No. (2)</label>
                <input className="form-control" value={mobile2} onChange={(e) => setMobile2(e.target.value)} />
              </div>

              <div>
                <label className="small">Email Address</label>
                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div>
                <label className="small">Aadhar No.</label>
                <input className="form-control" value={aadhar} onChange={(e) => setAadhar(e.target.value)} maxLength={12} />
                {errors.aadhar && <div className="error">{errors.aadhar}</div>}
              </div>

              <div>
                <label className="small">Mother Tongue</label>
                <input className="form-control" value={motherTongue} onChange={(e) => setMotherTongue(e.target.value)} />
              </div>

              <div>
                <label className="small">Distance from School (kms)</label>
                <input className="form-control" value={distanceKms} onChange={(e) => setDistanceKms(e.target.value)} />
              </div>

              <div>
                <label className="small">Preferred Mobile for SMS</label>
                <input className="form-control" value={smsMobile} onChange={(e) => setSmsMobile(e.target.value)} />
              </div>
            </div>

            {/* Emergency */}
            <div className="section-head" style={{ marginTop: 18 }}>
              <div className="section-pill">Emergency Contact Details</div>
              <div className="section-accent" />
            </div>

            <div className="grid-2" style={{ marginBottom: 12 }}>
              <div>
                <label className="small">Emergency Contact No. *</label>
                <input className="form-control" value={emContactNo} onChange={(e) => setEmContactNo(e.target.value)} />
                {errors.emContactNo && <div className="error">{errors.emContactNo}</div>}
              </div>

              <div>
                <label className="small">Name of the Person *</label>
                <input className="form-control" value={emContactName} onChange={(e) => setEmContactName(e.target.value)} />
                {errors.emContactName && <div className="error">{errors.emContactName}</div>}
              </div>

              <div className="full">
                <label className="small">Relation *</label>
                <input className="form-control" value={emRelation} onChange={(e) => setEmRelation(e.target.value)} />
                {errors.emRelation && <div className="error">{errors.emRelation}</div>}
              </div>
            </div>

            {/* Family */}
            <div className="section-head" style={{ marginTop: 8 }}>
              <div className="section-pill">Family Details</div>
              <div className="section-accent" />
            </div>

            <div className="grid">
              <div>
                <label className="small">Father / Guardian Name *</label>
                <input className="form-control" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
              </div>

              <div>
                <label className="small">Father Mobile</label>
                <input className="form-control" value={fatherMobile} onChange={(e) => setFatherMobile(e.target.value)} />
              </div>

              <div>
                <label className="small">Mother / Guardian Name *</label>
                <input className="form-control" value={motherNameState} onChange={(e) => setMotherNameState(e.target.value)} />
              </div>

              <div>
                <label className="small">Mother Mobile</label>
                <input className="form-control" value={motherMobile} onChange={(e) => setMotherMobile(e.target.value)} />
              </div>

              <div className="full">
                <label className="small">If child is sponsored (agency name)</label>
                <input className="form-control" value={sponsoredBy} onChange={(e) => setSponsoredBy(e.target.value)} />
              </div>
            </div>

            {/* Siblings */}
            <div className="section-head" style={{ marginTop: 18 }}>
              <div className="section-pill">Details of Brothers / Sisters</div>
              <div className="section-accent" />
            </div>

            {siblings.map((s) => (
              <div key={s.id} className="grid" style={{ alignItems: "center", marginBottom: 8 }}>
                <div><input className="form-control" placeholder="Name" value={s.name} onChange={(e) => updateSibling(s.id, "name", e.target.value)} /></div>
                <div><input className="form-control" placeholder="Age" value={s.age} onChange={(e) => updateSibling(s.id, "age", e.target.value)} /></div>
                <div><input className="form-control" placeholder="Std" value={s.std} onChange={(e) => updateSibling(s.id, "std", e.target.value)} /></div>
                <div className="full"><input className="form-control" placeholder="Institution" value={s.institution} onChange={(e) => updateSibling(s.id, "institution", e.target.value)} /></div>
                {siblings.length > 1 && <div><button type="button" className="btn-outline" onClick={() => removeSibling(s.id)}>Remove</button></div>}
              </div>
            ))}
            <div style={{ marginBottom: 8 }}><button type="button" className="btn-outline" onClick={addSibling}>+ Add Sibling</button></div>

            {/* Previous Education */}
            <div className="section-head" style={{ marginTop: 18 }}>
              <div className="section-pill">Details of Previous Education</div>
              <div className="section-accent" />
            </div>

            <div style={{ fontWeight: 700, display: "grid", gridTemplateColumns: "1fr 2fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
              <div>Year</div><div>School</div><div>Standard/Grade</div><div>Marks</div>
            </div>

            {prevEdu.map((p) => (
              <div key={p.id} style={{ marginBottom: 8 }}>
                <div className="grid">
                  <div><input className="form-control" placeholder="Year" value={p.year} onChange={(e) => updatePrev(p.id, "year", e.target.value)} /></div>
                  <div><input className="form-control" placeholder="School" value={p.school} onChange={(e) => updatePrev(p.id, "school", e.target.value)} /></div>
                  <div><input className="form-control" placeholder="Standard" value={p.standard} onChange={(e) => updatePrev(p.id, "standard", e.target.value)} /></div>
                  <div><input className="form-control" placeholder="Marks" value={p.marks} onChange={(e) => updatePrev(p.id, "marks", e.target.value)} /></div>
                  {prevEdu.length > 1 && <div><button type="button" className="btn-outline" onClick={() => removePrev(p.id)}>Remove</button></div>}
                </div>
              </div>
            ))}
            <div style={{ marginBottom: 12 }}><button type="button" className="btn-outline" onClick={addPrev}>+ Add Row</button></div>

            {/* Boards */}
            <div style={{ marginTop: 12, marginBottom: 10 }}>
              <label style={{ fontWeight: 700 }}>Previous School Affiliation</label>
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <label className="inline-row"><input type="checkbox" checked={boardSSC} onChange={(e) => setBoardSSC(e.target.checked)} /> <span style={{ marginLeft: 6 }}>SSC</span></label>
                <label className="inline-row"><input type="checkbox" checked={boardCBSE} onChange={(e) => setBoardCBSE(e.target.checked)} /> <span style={{ marginLeft: 6 }}>CBSE</span></label>
                <label className="inline-row"><input type="checkbox" checked={boardICSE} onChange={(e) => setBoardICSE(e.target.checked)} /> <span style={{ marginLeft: 6 }}>ICSE</span></label>
                <label className="inline-row"><input type="checkbox" checked={false} onChange={() => {}} /> <span style={{ marginLeft: 6 }}>Other</span></label>
              </div>
            </div>

            {/* Declaration */}
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 18 }}>
              <input className="checkbox" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <div style={{ fontSize: 14 }}>
                I hereby declare that the information given in this application is true and correct to the best of my knowledge.
                I agree to abide by the rules and regulations of Sahyadri World School. I understand that registration fee is non-refundable.
                {errors.agree && <div className="error">{errors.agree}</div>}
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Application"}</button>
            </div>

            <div style={{ marginTop: 12, textAlign: "center" }}>
              <a href={PDF_REFERENCE} target="_blank" rel="noreferrer" style={{ color: "#0077cc" }}>Download / View official PDF form</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
