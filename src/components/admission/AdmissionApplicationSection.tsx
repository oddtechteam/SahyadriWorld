// import { useState } from "react";

// const AdmissionApplicationSection = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     grade: "",
//     schoolType: "",
//   });

//   const steps = [
//     { title: "Admission Overview" },
//     { title: "Application Details" },
//     { title: "Complete Admission Form" },
//   ];

//   return (
//     <section
//       id="admission-section"
//       className="admission-apply-section section-padding"
//       style={{
//         background: "#f4f8ff",
//         padding: "100px 0",
//       }}
//     >
//       <div className="container">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 style={{ color: "#0b2b5c", fontWeight: 700 }}>
//             Admission <span style={{ color: "#0077cc" }}>Process</span>
//           </h2>
//           <p
//             style={{
//               color: "#004080",
//               maxWidth: "700px",
//               margin: "15px auto",
//             }}
//           >
//             Begin your child’s admission process in 3 easy steps. Provide basic
//             information, select grade and school type, and complete the detailed
//             admission form.
//           </p>
//         </div>

//         {/* Step Tracker */}
//         <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
//           {steps.map((_, index) => (
//             <div
//               key={index}
//               className={`step-indicator d-flex align-items-center justify-content-center ${
//                 step === index + 1 ? "active" : ""
//               }`}
//               style={{
//                 width: "50px",
//                 height: "50px",
//                 borderRadius: "50%",
//                 background: step >= index + 1 ? "#0077cc" : "#d0d9e8",
//                 color: step >= index + 1 ? "#fff" : "#333",
//                 fontWeight: 700,
//                 fontSize: "18px",
//                 transition: "all 0.3s ease",
//               }}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>

//         {/* Step Container */}
//         <div
//           className="step-content"
//           style={{
//             maxWidth: "850px",
//             margin: "0 auto",
//             background: "#fff",
//             borderRadius: "20px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//             padding: "40px",
//             transition: "all 0.5s ease",
//           }}
//         >
//           {/* STEP 1: Overview */}
//           {step === 1 && (
//             <div className="text-center">
//               <h3 style={{ color: "#0b2b5c", fontWeight: 700 }}>
//                 Step 1: Understand the Admission Process
//               </h3>
//               <ul
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#004080",
//                   lineHeight: 1.8,
//                 }}
//               >
//                 <li>
//                   📞 Schedule a counselling session with our academic team.
//                 </li>
//                 <li>
//                   🧾 Review our facilities, curriculum, and holistic learning
//                   programs.
//                 </li>
//                 <li>
//                   💳 Pay the admission fee to confirm your child’s application.
//                 </li>
//                 <li>
//                   🧍 Complete the detailed admission form and document
//                   submission.
//                 </li>
//               </ul>

//               <button
//                 className="theme-btn mt-4"
//                 style={{
//                   background: "#0077cc",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "25px",
//                   padding: "10px 25px",
//                   fontWeight: 600,
//                   cursor: "pointer",
//                 }}
//                 onClick={() => setStep(2)}
//               >
//                 Continue →
//               </button>
//             </div>
//           )}

//           {/* STEP 2: Application Details */}
//           {step === 2 && (
//             <div className="text-center">
//               <h3 style={{ color: "#0b2b5c", fontWeight: 700 }}>
//                 Step 2: Enter Application Details
//               </h3>
//               <p
//                 style={{
//                   color: "#004080",
//                   maxWidth: "600px",
//                   margin: "10px auto 25px",
//                 }}
//               >
//                 Please fill in your child’s details to begin the admission
//                 process.
//               </p>

//               <div
//                 className="apply-form d-flex flex-column align-items-center gap-3 mt-4"
//                 style={{
//                   maxWidth: "500px",
//                   margin: "0 auto",
//                 }}
//               >
//                 {/* Name */}
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="form-control"
//                   style={{
//                     borderRadius: "25px",
//                     border: "1px solid #ccc",
//                     padding: "10px 15px",
//                     width: "100%",
//                   }}
//                 />

//                 {/* Phone */}
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   className="form-control"
//                   style={{
//                     borderRadius: "25px",
//                     border: "1px solid #ccc",
//                     padding: "10px 15px",
//                     width: "100%",
//                   }}
//                 />

//                 {/* Grade Dropdown */}
//                 <select
//                   className="form-select"
//                   value={formData.grade}
//                   onChange={(e) =>
//                     setFormData({ ...formData, grade: e.target.value })
//                   }
//                   style={{
//                     borderRadius: "25px",
//                     border: "1px solid #ccc",
//                     padding: "10px 15px",
//                     width: "100%",
//                   }}
//                 >
//                   <option value="">Select Grade</option>
//                   <option>Nursery</option>
//                   <option>Junior KG</option>
//                   <option>Senior KG</option>
//                   <option>1st Standard</option>
//                   <option>2nd Standard</option>
//                   <option>3rd Standard</option>
//                   <option>4th Standard</option>
//                   <option>5th Standard</option>
//                   <option>6th Standard</option>
//                   <option>7th Standard</option>
//                   <option>8th Standard</option>
//                   <option>9th Standard</option>
//                   <option>10th Standard</option>
//                 </select>

//                 {/* School Type */}
//                 <div
//                   className="school-type d-flex justify-content-center gap-4 mt-3"
//                   style={{ width: "100%" }}
//                 >
//                   {["Day Boarding", "Regular School"].map((type) => (
//                     <label
//                       key={type}
//                       className="d-flex align-items-center gap-2"
//                       style={{
//                         border:
//                           formData.schoolType === type
//                             ? "2px solid #0077cc"
//                             : "1px solid #ccc",
//                         borderRadius: "25px",
//                         padding: "10px 20px",
//                         cursor: "pointer",
//                         color:
//                           formData.schoolType === type ? "#0077cc" : "#555",
//                         transition: "all 0.3s ease",
//                       }}
//                       onClick={() =>
//                         setFormData({ ...formData, schoolType: type })
//                       }
//                     >
//                       <input
//                         type="radio"
//                         name="schoolType"
//                         checked={formData.schoolType === type}
//                         readOnly
//                       />
//                       {type}
//                     </label>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setStep(3)}
//                   style={{
//                     background: "#0077cc",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "25px",
//                     padding: "10px 30px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     marginTop: "15px",
//                   }}
//                 >
//                   Next Step →
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* STEP 3: Full Admission Form */}
//           {step === 3 && (
//             <div>
//               <h3
//                 style={{
//                   color: "#0b2b5c",
//                   fontWeight: 700,
//                   marginBottom: "20px",
//                 }}
//               >
//                 Step 3: Complete Admission Form
//               </h3>
//               <form>
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label className="form-label">Child’s Full Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       style={{ borderRadius: "10px" }}
//                       defaultValue={formData.name}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Date of Birth</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       style={{ borderRadius: "10px" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Grade Applying For</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={formData.grade}
//                       readOnly
//                       style={{ borderRadius: "10px" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">School Type</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={formData.schoolType}
//                       readOnly
//                       style={{ borderRadius: "10px" }}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Parent’s Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       style={{ borderRadius: "10px" }}
//                     />
//                   </div>
//                   <div className="col-12">
//                     <label className="form-label">Address</label>
//                     <textarea
//                       className="form-control"
//                       rows={3}
//                       style={{ borderRadius: "10px" }}
//                     ></textarea>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="theme-btn mt-4"
//                   style={{
//                     background: "#0077cc",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "25px",
//                     padding: "10px 30px",
//                     fontWeight: 600,
//                   }}
//                 >
//                   Submit Application
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdmissionApplicationSection;





const AdmissionApplicationSection = () => {
  return (
    <div>
      
    </div>
  )
}

export default AdmissionApplicationSection
