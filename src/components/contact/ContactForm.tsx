"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEETS_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbx04zlw9KL3wj6nQ4fGW7x05gb-jYxT4GyEUE5dFPo7DbapiZWDJrL8CO1CQy1FjjcgiQ/exec";

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      // SEND MAIL USING EMAILJS
      await emailjs.sendForm(
        "service_wswswsq",
        "template_nzsewus",
        form.current,
        "e5vZ59vfSPFDcwThA"
      );

      // Convert FormData → JSON
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      // SEND TO GOOGLE SHEET (IMPORTANT: PASS formType)
      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          ...data,
        }),
      });

      Swal.fire({
        title: "Message Sent!",
        text: "We will get back to you shortly.",
        icon: "success",
        timer: 2500,
        showConfirmButton: false,
      });

      form.current.reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Unable to submit. Please try again later.",
        icon: "error",
        confirmButtonColor: "#0C2E52",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = {
    width: "100%",
    padding: "14px 18px",
    border: "2px solid #e1e8ed",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#333",
    background: "#fff",
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: "140px",
    resize: "vertical" as const,
  };

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
                    <input type="text" name="name" placeholder="Full Name" required style={inputStyles} />
                  </div>

                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number (10 digits)"
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const digits = e.target.value.replace(/\D/g, "");
                        if (digits.length <= 10) e.target.value = digits;
                      }}
                      style={inputStyles}
                    />
                  </div>

                  <div className="col-lg-6">
                    <input type="email" name="email" placeholder="Email Address" required style={inputStyles} />
                  </div>

                  <div className="col-lg-6">
                    <input type="text" name="subject" placeholder="Subject" style={inputStyles} />
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
                    <button type="submit" className="theme-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : (
                        "Send Us Message"
                      )}
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
