import { useState, useEffect } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 600);
      }, 300);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`preloader-wrapper ${fadeOut ? "fade-out" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        background: "#ffffff", // PURE WHITE
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div className="preloader-content" style={{ textAlign: "center" }}>
        <img
          src="/assets/img/logo/SHS_11zon.webp"
          alt="Sahyadri Logo"
          className="preloader-logo"
          style={{
            width: "230px",
            filter: "drop-shadow(0 0 12px rgba(0,0,0,0.05))",
          }}
        />
      </div>

      <style>{`
        .preloader-wrapper {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .preloader-wrapper.fade-out {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        /* Smooth Floating Pulse */
        .preloader-logo {
          animation: softPulse 1.6s ease-in-out infinite;
        }

        @keyframes softPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.045); opacity: 0.92; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
