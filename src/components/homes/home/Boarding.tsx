// import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DayBoarding = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       {/* 🌞 Day Boarding Section */}
//       <section
//         className="container-fluid py-5"
//         style={{
//           fontFamily: "Poppins, sans-serif",
//           background: "linear-gradient(180deg, #f9fbff 0%, #e6f8fb 100%)",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
//           style={{
//             gap: "30px",
//             animation: "fadeIn 1.5s ease-in-out",
//           }}
//         >
//           {/* 🏫 Left Side: Image */}
//           <div
//             className="col-md-6"
//             style={{
//               textAlign: "center",
//               animation: "slideInLeft 1.2s ease",
//             }}
//           >
//             <img
//               src="/assets/img/imgnew/IMG_6916_11zon_11zon.webp"
//               alt="Day Boarding at Sahyadri World School"
//               className="img-fluid rounded-4 shadow"
//               style={{
//                 width: "100%",
//                 maxWidth: "550px",
//                 height: "auto",
//                 borderRadius: "16px",
//                 boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           </div>

//           {/* ✨ Right Side: Text */}
//           <div
//             className="col-md-6"
//             style={{
//               animation: "slideInRight 1.2s ease",
//             }}
//           >
//             <h2
//               style={{
//                 color: "#0C2E52",
//                 fontWeight: "700",
//                 fontSize: "2.2rem",
//                 marginBottom: "20px",
//               }}
//             >
//               Day Boarding at{" "}
//               <span style={{ color: "#007bff" }}>Sahyadri World School</span>
//             </h2>

//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 color: "#333",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               <strong>Sahyadri World School</strong> is a premier{" "}
//               <strong>day boarding institution</strong> that harmoniously blends{" "}
//               <strong>academics, extracurricular activities, and personal care</strong>.
//               Operating from <strong>8 AM to 6 PM</strong>, the school ensures a nurturing
//               and structured environment where students learn, play, and grow under expert guidance.
//             </p>

//             <p
//               style={{
//                 fontSize: "1.05rem",
//                 color: "#555",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               The extended hours provide ample time for homework assistance, sports, music,
//               and skill development  building confidence, discipline, and leadership qualities
//               in every learner.
//             </p>

//             {/* 💬 Motivational Sentence */}
//             <p
//               style={{
//                 fontSize: "1.25rem",
//                 fontWeight: "600",
//                 color: "#0C2E52",
//                 marginTop: "20px",
//                 textAlign: "center",
//                 fontStyle: "italic",
//               }}
//             >
//               “Where learning meets care, and every child shines beyond the classroom!”
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 🤖 AI, Robotics & 3D Printing Labs Section */}
//       <section
//         className="container-fluid py-5"
//         style={{
//           background: "linear-gradient(180deg, #e6f8fb 0%, #d4f0f7 100%)",
//           fontFamily: "Poppins, sans-serif",
//         }}
//       >
//         <div
//           className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
//           style={{ gap: "30px" }}
//         >
//           {/* Left: Text */}
//           <div
//             className="col-md-6"
//             style={{
//               animation: "slideInLeft 1.2s ease",
//             }}
//           >
//             <h2
//               style={{
//                 color: "#0C2E52",
//                 fontWeight: "700",
//                 fontSize: "2.2rem",
//                 marginBottom: "20px",
//               }}
//             >
//               AI, Robotics & <span style={{ color: "#007bff" }}>3D Printing Labs</span>
//             </h2>

//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 color: "#333",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               At Sahyadri World School, innovation thrives in our{" "}
//               <strong>AI, Robotics, and 3D Printing Labs</strong>. Students are encouraged
//               to explore the world of <strong>technology, coding, and design thinking</strong>
//               through hands-on experiences and real-world problem solving.
//             </p>

//             <p
//               style={{
//                 fontSize: "1.05rem",
//                 color: "#555",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               Our <strong>Thinking Labs</strong> foster creativity and analytical reasoning,
//               preparing students to become future innovators, engineers, and leaders in
//               the digital age.
//             </p>

//             <p
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "600",
//                 color: "#007bff",
//                 marginTop: "20px",
//                 textAlign: "center",
//                 fontStyle: "italic",
//               }}
//             >
//               “Empowering young minds to build the future  one idea at a time.”
//             </p>
//           </div>

//           {/* Right: Image */}
//           <div
//             className="col-md-6 text-center"
//             style={{
//               animation: "slideInRight 1.2s ease",
//             }}
//           >
//             <img
//               src="/assets/img/imgnew/DSC09327_11zon_11zon.webp"
//               alt="AI, Robotics and 3D Printing Labs"
//               className="img-fluid rounded-4 shadow"
//               style={{
//                 width: "100%",
//                 maxWidth: "550px",
//                 height: "auto",
//                 borderRadius: "16px",
//                 boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* 🎶 Performing Arts & Music Studio Section */}
//       <section
//         className="container-fluid py-5"
//         style={{
//           background: "linear-gradient(180deg, #e6f8fb 0%, #f9fbff 100%)",
//           fontFamily: "Poppins, sans-serif",
//         }}
//       >
//         <div
//           className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
//           style={{ gap: "30px" }}
//         >
//           {/* Left: Image */}
//           <div
//             className="col-md-6 text-center"
//             style={{
//               animation: "slideInLeft 1.2s ease",
//             }}
//           >
//             <img
//               src="/assets/img/imgnew/A2_11zon_11zon (2).webp"
//               alt="Performing Arts and Music Studio"
//               className="img-fluid rounded-4 shadow"
//               style={{
//                 width: "100%",
//                 maxWidth: "550px",
//                 height: "auto",
//                 borderRadius: "16px",
//                 boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           </div>

//           {/* Right: Text */}
//           <div
//             className="col-md-6"
//             style={{
//               animation: "slideInRight 1.2s ease",
//             }}
//           >
//             <h2
//               style={{
//                 color: "#0C2E52",
//                 fontWeight: "700",
//                 fontSize: "2.2rem",
//                 marginBottom: "20px",
//               }}
//             >
//               Performing Arts & <span style={{ color: "#007bff" }}>Music Studio</span>
//             </h2>

//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 color: "#333",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               Our <strong>Performing Arts and Music Studio</strong> nurtures creativity,
//               expression, and cultural understanding. Students explore dance, drama, and
//               music discovering the joy of self-expression and teamwork.
//             </p>

//             <p
//               style={{
//                 fontSize: "1.05rem",
//                 color: "#555",
//                 lineHeight: "1.8",
//                 textAlign: "justify",
//               }}
//             >
//               The studio helps students build confidence, rhythm, and stage presence while
//               encouraging them to embrace their artistic passions.
//             </p>

//             <p
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "600",
//                 color: "#007bff",
//                 marginTop: "20px",
//                 textAlign: "center",
//                 fontStyle: "italic",
//               }}
//             >
//               “Where talent finds its rhythm, and every performance tells a story.”
//             </p>
//           </div>
//         </div>

//         {/* Inline Animations */}
//         <style>
//           {`
//             @keyframes fadeIn {
//               0% { opacity: 0; transform: scale(0.98); }
//               100% { opacity: 1; transform: scale(1); }
//             }
//             @keyframes slideInLeft {
//               0% { opacity: 0; transform: translateX(-80px); }
//               100% { opacity: 1; transform: translateX(0); }
//             }
//             @keyframes slideInRight {
//               0% { opacity: 0; transform: translateX(80px); }
//               100% { opacity: 1; transform: translateX(0); }
//             }
//             @media (max-width: 768px) {
//               h2 {
//                 font-size: 1.8rem !important;
//                 text-align: center;
//               }
//               p {
//                 text-align: center !important;
//               }
//             }
//           `}
//         </style>
//       </section>
//     </>
//   );
// };

// export default function App() {
//   return (
//     <div className="App">
//       <DayBoarding />
//     </div>
//   );
// }


import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DayBoarding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 🌟 Page Title Section */}
      <section
        className="text-center py-5"
        style={{
          background: "linear-gradient(180deg, #f0f8ff 0%, #e6f8fb 100%)",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <h1
          style={{
            color: "#0C2E52",
            fontWeight: "700",
            fontSize: "2.8rem",
         
            letterSpacing: "1px",
          }}
        >
          A Student-Centric Architecture
        </h1>
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#1FA6C6",
            margin: "15px auto 0",
            borderRadius: "2px",
            animation: "slideIn 1.2s ease",
          }}
        ></div>
      </section>

      {/* 🌞 Day Boarding Section */}
      <section
        className="container-fluid py-5"
        style={{
          fontFamily: "Poppins, sans-serif",
          background: "linear-gradient(180deg, #f9fbff 0%, #e6f8fb 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
          style={{
            gap: "30px",
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          {/* 🏫 Left Side: Image */}
          <div
            className="col-md-6"
            style={{
              textAlign: "center",
              animation: "slideInLeft 1.2s ease",
            }}
          >
            <img
              src="/assets/img/imgnew/IMG_6916_11zon_11zon.webp"
              alt="Day Boarding at Sahyadri World School"
              className="img-fluid rounded-4 shadow"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* ✨ Right Side: Text */}
          <div
            className="col-md-6"
            style={{
              animation: "slideInRight 1.2s ease",
            }}
          >
            <h2
              style={{
                color: "#0C2E52",
                fontWeight: "700",
                fontSize: "2.2rem",
                marginBottom: "20px",
              }}
            >
              Day Boarding at{" "}
              <span style={{ color: "#1FA6C6" }}>Sahyadri World School</span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              <strong>Sahyadri World School</strong> is a premier{" "}
              <strong>day boarding institution</strong> that harmoniously blends{" "}
              <strong>
                academics, extracurricular activities, and personal care
              </strong>
              . Operating from <strong>8 AM to 6 PM</strong>, the school ensures
              a nurturing and structured environment where students learn, play,
              and grow under expert guidance.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              The extended hours provide ample time for homework assistance,
              sports, music, and skill development  building confidence,
              discipline, and leadership qualities in every learner.
            </p>

            {/* 💬 Motivational Sentence */}
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#0C2E52",
                marginTop: "20px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “Where learning meets care, and every child shines beyond the
              classroom!”
            </p>
          </div>
        </div>
      </section>

      {/* 🤖 AI, Robotics & 3D Printing Labs Section */}
      {/* <section
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(180deg, #e6f8fb 0%, #d4f0f7 100%)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
          style={{ gap: "30px" }}
        >
          <div
            className="col-md-6"
            style={{
              animation: "slideInLeft 1.2s ease",
            }}
          >
            <h2
              style={{
                color: "#0C2E52",
                fontWeight: "700",
                fontSize: "2.2rem",
                marginBottom: "20px",
              }}
            >
              AI, Robotics & <span style={{ color: "#1FA6C6" }}>3D Printing Labs</span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              At Sahyadri World School, innovation thrives in our{" "}
              <strong>AI, Robotics, and 3D Printing Labs</strong>. Students are
              encouraged to explore the world of{" "}
              <strong>technology, coding, and design thinking</strong> through
              hands-on experiences and real-world problem solving.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              Our <strong>Thinking Labs</strong> foster creativity and analytical
              reasoning, preparing students to become future innovators,
              engineers, and leaders in the digital age.
            </p>

            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#1FA6C6",
                marginTop: "20px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “Empowering young minds to build the future  one idea at a time.”
            </p>
          </div>

          <div
            className="col-md-6 text-center"
            style={{
              animation: "slideInRight 1.2s ease",
            }}
          >
            <img
              src="/assets/img/imgnew/robotics_11zon.webp"
              alt="AI, Robotics and 3D Printing Labs"
              className="img-fluid rounded-4 shadow"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </section> */}

      {/* 🎶 Performing Arts & Music Studio Section */}
      {/* <section
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(180deg, #e6f8fb 0%, #f9fbff 100%)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
          style={{ gap: "30px" }}
        >
        
          <div
            className="col-md-6 text-center"
            style={{
              animation: "slideInLeft 1.2s ease",
            }}
          >
            <img
              src="/assets/img/imgnew/A2_11zon_11zon (2).webp"
              alt="Performing Arts and Music Studio"
              className="img-fluid rounded-4 shadow"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          <div
            className="col-md-6"
            style={{
              animation: "slideInRight 1.2s ease",
            }}
          >
            <h2
              style={{
                color: "#0C2E52",
                fontWeight: "700",
                fontSize: "2.2rem",
                marginBottom: "20px",
              }}
            >
              Performing Arts & <span style={{ color: "#1FA6C6" }}>Music Studio</span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              Our <strong>Performing Arts and Music Studio</strong> nurtures creativity,
              expression, and cultural understanding. Students explore dance, drama, and
              music discovering the joy of self-expression and teamwork.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              The studio helps students build confidence, rhythm, and stage presence while
              encouraging them to embrace their artistic passions.
            </p>

            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#1FA6C6",
                marginTop: "20px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “Where talent finds its rhythm, and every performance tells a story.”
            </p>
          </div>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: scale(0.98); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes slideInLeft {
              0% { opacity: 0; transform: translateX(-80px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInRight {
              0% { opacity: 0; transform: translateX(80px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideIn {
              0% { width: 0; opacity: 0; }
              100% { width: 120px; opacity: 1; }
            }
            @media (max-width: 768px) {
              h1 {
                font-size: 2rem !important;
              }
              h2 {
                font-size: 1.8rem !important;
                text-align: center;
              }
              p {
                text-align: center !important;
              }
            }
          `}
        </style>
      </section> */}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <DayBoarding />
    </div>
  );
}
