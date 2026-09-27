import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Same number as the footer contact details.
const PHONE = "919049043628";
const WHATSAPP_TEXT = "Hello, I would like to know more about admissions at Sahyadri World School.";

const FloatingContact = () => {
  return (
    <>
      <div className="floating-contact">
        <a
          className="fc-btn fc-whatsapp"
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
          <span className="fc-label">Chat with us</span>
        </a>
        <a className="fc-btn fc-call" href={`tel:+${PHONE}`} aria-label="Call the school">
          <FaPhoneAlt />
          <span className="fc-label">Call now</span>
        </a>
      </div>

      <style>{`
        .floating-contact {
          position: fixed;
          left: 18px;
          bottom: 22px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fc-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 52px;
          min-width: 52px;
          padding: 0 16px;
          border-radius: 30px;
          color: #fff !important;
          font-size: 22px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
          transition: transform 0.25s ease;
        }
        .fc-btn:hover {
          transform: translateY(-3px);
        }
        .fc-whatsapp {
          background: #25d366;
          animation: fc-pulse 2.4s infinite;
        }
        .fc-call {
          background: #0c2e52;
          font-size: 18px;
        }
        .fc-label {
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }
        @keyframes fc-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @media (max-width: 767px) {
          .floating-contact { left: 14px; bottom: 16px; }
          .fc-btn { padding: 0; justify-content: center; width: 50px; height: 50px; min-width: 0; }
          .fc-label { display: none; }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;
