// import { useRef, useState, FormEvent } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";

// const ContactForm = () => {
//   const form = useRef<HTMLFormElement | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const GOOGLE_SHEETS_WEBAPP_URL =
//     "https://script.google.com/macros/s/AKfycbzQcLl4OOsCkWwp502tWzQyriEKQloOynaZxwHTlPYF7_JTLHNJf9y8-t8-NuJZzCFx4g/exec";

//   const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const serviceID = "service_wswswsq";
//     const templateID = "template_nzsewus";
//     const publicKey = "e5vZ59vfSPFDcwThA";

//     if (!form.current) return;

//     try {
//       await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

//       fetch(GOOGLE_SHEETS_WEBAPP_URL, {
//         method: "POST",
//         mode: "no-cors",
//         body: new FormData(form.current),
//       });

//       form.current.reset();

//       Swal.fire({
//         title: "✅ Message Sent!",
//         text: "We'll get back to you shortly.",
//         icon: "success",
//         timer: 2500,
//         showConfirmButton: false,
//       });
//     } catch (error) {
//       Swal.fire({
//         title: "❌ Error!",
//         text: "Something went wrong. Please try again later.",
//         icon: "error",
//         confirmButtonColor: "#0C2E52",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="contact-section-2 section-padding pt-0">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10">
//             <div className="contact-form-items">
//               <div className="title text-center">
//                 <h2>Send Us Message</h2>
//               </div>
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="row g-4">
//                   <div className="col-lg-6">
//                     <input type="text" name="name" placeholder="Full Name" required />
//                   </div>
//                   <div className="col-lg-6">
//                     <input type="text" name="number" placeholder="Phone Number" />
//                   </div>
//                   <div className="col-lg-6">
//                     <input type="email" name="email" placeholder="Email Address" required />
//                   </div>
//                   <div className="col-lg-6">
//                     <input type="text" name="subject" placeholder="Subject" />
//                   </div>
//                   <div className="col-lg-12">
//                     <textarea name="message" placeholder="Write message" required></textarea>
//                   </div>
//                   <div className="col-lg-12 text-center">
//                     <button type="submit" className="theme-btn" disabled={isSubmitting}>
//                       {isSubmitting ? "Sending..." : "Send Us Message"}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;










// import { useRef, useState, FormEvent } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";

// const ContactForm = () => {
//   const form = useRef<HTMLFormElement | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const GOOGLE_SHEETS_WEBAPP_URL =
//     "https://script.google.com/macros/s/AKfycbzQcLl4OOsCkWwp502tWzQyriEKQloOynaZxwHTlPYF7_JTLHNJf9y8-t8-NuJZzCFx4g/exec";

//   const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const serviceID = "service_wswswsq";
//     const templateID = "template_nzsewus";
//     const publicKey = "e5vZ59vfSPFDcwThA";

//     if (!form.current) return;

//     try {
//       await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

//       fetch(GOOGLE_SHEETS_WEBAPP_URL, {
//         method: "POST",
//         mode: "no-cors",
//         body: new FormData(form.current),
//       });

//       form.current.reset();

//       Swal.fire({
//         title: "✅ Message Sent!",
//         text: "We'll get back to you shortly.",
//         icon: "success",
//         timer: 2500,
//         showConfirmButton: false,
//       });
//     } catch (error) {
//       Swal.fire({
//         title: "❌ Error!",
//         text: "Something went wrong. Please try again later.",
//         icon: "error",
//         confirmButtonColor: "#0C2E52",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Enhanced Inline CSS styles
//   const inputStyles = {
//     width: "100%",
//     padding: "14px 18px",
//     border: "2px solid #e1e8ed",
//     borderRadius: "8px",
//     fontSize: "16px",
//     lineHeight: "1.5",
//     backgroundColor: "#fff",
//     outline: "none",
//     transition: "all 0.3s ease",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//     WebkitAppearance: "none" as const,
//     MozAppearance: "none" as const,
//     appearance: "none" as const,
//     fontFamily: "inherit",
//     color: "#333",
//     // Placeholder styling
//     "::placeholder": {
//       color: "#8a94a6",
//       fontSize: "15px",
//       fontWeight: "400",
//       fontStyle: "italic"
//     }
//   };

//   const textareaStyles = {
//     ...inputStyles,
//     minHeight: "140px",
//     resize: "vertical" as const,
//     lineHeight: "1.6"
//   };

//   const buttonStyles = {
//     padding: "16px 40px",
//     fontSize: "18px",
//     fontWeight: "700",
//     border: "none",
//     borderRadius: "8px",
//     backgroundColor: "#0C2E52",
//     color: "#fff",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     outline: "none",
//     fontFamily: "inherit",
//     textTransform: "uppercase" as const,
//     letterSpacing: "1px",
//     boxShadow: "0 4px 15px rgba(12, 46, 82, 0.3)",
//     position: "relative" as const,
//     overflow: "hidden"
//   };

//   const buttonHoverStyles = {
//     ...buttonStyles,
//     backgroundColor: "#1a4d82",
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 20px rgba(12, 46, 82, 0.4)"
//   };

//   const buttonDisabledStyles = {
//     ...buttonStyles,
//     backgroundColor: "#a0a0a0",
//     cursor: "not-allowed",
//     opacity: 0.6,
//     transform: "none",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//   };

//   return (
//     <section className="contact-section-2 section-padding pt-0">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10">
//             <div className="contact-form-items">
//               <div className="title text-center">
//                 <h2>Send Us Message</h2>
//               </div>
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="row g-4">
//                   <div className="col-lg-6">
//                     <input 
//                       type="text" 
//                       name="name" 
//                       placeholder="Full Name" 
//                       required 
//                       style={inputStyles}
//                     />
//                   </div>
//                   <div className="col-lg-6">
//                     <input 
//                       type="text" 
//                       name="phone" 
//                       placeholder="Phone Number" 
//                       style={inputStyles}
//                     />
//                   </div>
//                   <div className="col-lg-6">
//                     <input 
//                       type="email" 
//                       name="email" 
//                       placeholder="Email Address" 
//                       required 
//                       style={inputStyles}
//                     />
//                   </div>
//                   <div className="col-lg-6">
//                     <input 
//                       type="text" 
//                       name="subject" 
//                       placeholder="Subject" 
//                       style={inputStyles}
//                     />
//                   </div>
//                   <div className="col-lg-12">
//                     <textarea 
//                       name="message" 
//                       placeholder="Write your message here..."
//                       required
//                       style={textareaStyles}
//                     ></textarea>
//                   </div>
//                   <div className="col-lg-12 text-center">
//                      <button
//                       type="submit"
//                       className="theme-btn"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Sending..." : "Send Us Message"}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;




import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEETS_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbzQcLl4OOsCkWwp502tWzQyriEKQloOynaZxwHTlPYF7_JTLHNJf9y8-t8-NuJZzCFx4g/exec";

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_wswswsq";
    const templateID = "template_nzsewus";
    const publicKey = "e5vZ59vfSPFDcwThA";

    if (!form.current) return;

    try {
      // ✅ Send email using EmailJS
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

      // ✅ Convert FormData → JSON for Google Sheets
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      // ✅ Send JSON data to Google Sheets
      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // ✅ Reset form and show success
      form.current.reset();

      Swal.fire({
        title: "✅ Message Sent!",
        text: "We'll get back to you shortly.",
        icon: "success",
        timer: 2500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: "❌ Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#0C2E52",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🔹 Input styling
  const inputStyles = {
    width: "100%",
    padding: "14px 18px",
    border: "2px solid #e1e8ed",
    borderRadius: "8px",
    fontSize: "16px",
    lineHeight: "1.5",
    backgroundColor: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    fontFamily: "inherit",
    color: "#333",
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: "140px",
    resize: "vertical" as const,
    lineHeight: "1.6",
  };

  // const buttonStyles = {
  //   padding: "16px 40px",
  //   fontSize: "18px",
  //   fontWeight: "700",
  //   border: "none",
  //   borderRadius: "8px",
  //   backgroundColor: "#0C2E52",
  //   color: "#fff",
  //   cursor: "pointer",
  //   transition: "all 0.3s ease",
  //   textTransform: "uppercase" as const,
  //   letterSpacing: "1px",
  //   boxShadow: "0 4px 15px rgba(12, 46, 82, 0.3)",
  // };

  return (
    <section className="contact-section-2 section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="contact-form-items">
              <div className="title text-center">
                <h2>Send Us Message</h2>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      style={inputStyles}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      style={inputStyles}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      style={inputStyles}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      style={inputStyles}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      required
                      style={textareaStyles}
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-center">
                    {/* <button
                      type="submit"
                      className="theme-btn"
                      disabled={isSubmitting}
                      style={
                        isSubmitting
                          ? { ...buttonStyles, opacity: 0.6, cursor: "not-allowed" }
                          : buttonStyles
                      }
                    >
                      {isSubmitting ? "Sending..." : "Send Us Message"}
                    </button> */}

                     <button
                      type="submit"
                      className="theme-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Us Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
