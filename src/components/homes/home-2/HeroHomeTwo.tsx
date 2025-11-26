import "bootstrap/dist/css/bootstrap.min.css";
import "./OurSchools.css";

const OurSchools = () => {
  return (
    <section className="position-relative w-100 overflow-hidden ">
      <div className="position-relative" style={{ height: "70vh" }}>
        {/* Video */}
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          src="assets/img/hero/m1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 🔥 Dark Overlay */}
        <div className="video-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        {/* Text Overlay */}
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
          <h1 className="display-4 fw-bold text-white mb-3 fadeInDown">
            Sahyadri World School
          </h1>

          <p
            className="fs-5 text-white fadeInUp mt-2"
            style={{ maxWidth: "750px" }}
          >
            Cultivating intellectual curiosity, character, health, and holistic
            excellence.
          </p>

          <div
            className="mt-4 rounded-pill bg-white fadeInUp"
            style={{ width: "100px", height: "4px" }}
          ></div>

        <button
  className="admission-btn glow-btn px-5 py-3 fw-bold rounded-pill mt-4"
  onClick={() => (window.location.href = "/register")}
>
  Admissions Open Now
</button>

        </div>
      </div>
    </section>
  );
};

export default OurSchools;





// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Count from "../../../common/Count";
// import VideoPopup from "../../../modals/VideoPopup";

// const HeroHomeTwo = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   return (
//     <>
//       <section className="hero-section hero-2 fix">
//         <div className="container">
//           <div className="row g-4 align-items-center">

//             {/* LEFT CONTENT */}
//             <div className="col-lg-6">
//               <div className="hero-content">
//                 <h1 className="wow fadeInUp" data-wow-delay=".3s">
//                   Nurturing Young Minds <br />
//                   for a <span>Brighter Future <img src="assets/img/hero/bar-shape-2.png" alt="shape-img" /></span>
//                 </h1>
//                 <p className="wow fadeInUp" data-wow-delay=".5s">
//                   Sahyadri World School blends academics, innovation, and
//                   values to develop confident, creative, and compassionate learners
//                   empowering every child to grow beyond the classroom.
//                 </p>
//                 <div className="hero-button">
//                   <Link
//                     to="/about"
//                     className="theme-btn wow fadeInUp"
//                     data-wow-delay=".3s"
//                   >
//                     Explore Our School
//                   </Link>
//                   <span className="button-text wow fadeInUp" data-wow-delay=".5s">
//                     <a
//                       onClick={() => setIsVideoOpen(true)}
//                       style={{ cursor: "pointer" }}
//                       className="video-btn video-popup"
//                     >
//                       <i className="fas fa-play"></i>
//                     </a>
//                     <span className="ms-3 d-line">Watch Campus Video</span>
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT IMAGE + COUNTER */}
//             <div className="col-lg-6">
//               <div className="hero-image-items">
//                 <div className="hero-image position-relative">
//                   <img
//                     src="assets/img/sah/win.jpeg"
//                     style={{ width: "546px", borderRadius: "20px" }}
//                     alt="Sahyadri Students"
//                     className="wow img-custom-anim-left"
//                     data-wow-duration="1.5s"
//                     data-wow-delay="0.5s"
//                   />
//                   <div className="hero-shape">
//                     <img
//                       src="assets/img/hero/hero-shape.png"
//                       alt="img"
//                       className="wow img-custom-anim-top"
//                       data-wow-duration="1.5s"
//                       data-wow-delay="0.2s"
//                     />
//                   </div>

//                   {/* Counter Box */}
//                   <div
//                     className="counter-box float-bob-y"
//                     style={{
//                       background: "#f4c330",
//                       borderRadius: "10px",
//                       padding: "12px 25px",
//                       boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                     }}
//                   >
//                     <p className="text-dark mb-1 fw-semibold">More than</p>
//                     <h2 className=" mb-1">
//                       <span className="odometer" data-count="1200">
//                         <Count number={1200} text="+" />
//                       </span>
//                     </h2>
//                     <p className="text-dark small mb-0">
//                       Happy Students Learning Every Day
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Video Modal */}
//       <VideoPopup
//         isVideoOpen={isVideoOpen}
//         setIsVideoOpen={setIsVideoOpen}
//         videoId={""}
//       />
//     </>
//   );
// };

// export default HeroHomeTwo;



// import "bootstrap/dist/css/bootstrap.min.css";
// import "./OurSchools.css";

// const OurSchools = () => {
//   return (
//     <section className="position-relative w-100 overflow-hidden">
//       {/* 🔹 Image Header Section */}
//       <div className="position-relative" style={{ height: "70vh" }}>
//         <img
//           src="assets/img/hero/website banner.jpg" // ✅ replace with your image path
//           alt="Sahyadri World School"
//           className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//         />

//         {/* 🔹 Gradient Overlay */}

//       </div>
//     </section>
//   );
// };

// export default OurSchools;

// import "bootstrap/dist/css/bootstrap.min.css";

// const OurSchools = () => {
//   return (
//     <section
//       className="position-relative w-100 overflow-hidden"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* 🔹 Responsive Image Header Section */}
//       <div
//         className="position-relative d-flex justify-content-center align-items-center"
//         style={{
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src="assets/img/hero/hero_11zon.webp"
//           alt="Our Schools"
//           className="img-fluid hero-img"
//           style={{
//             width: "100%",
//             height: "auto",
//             objectFit: "contain",
//             objectPosition: "center",
//             maxHeight: "75vh", // desktop height
//           }}

//         />

//       </div>

//       {/* 🔹 Mobile-specific styling */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .hero-img {
//               max-height: 60vh !important; /* ✅ Lower height for mobile */
//               width: 100% !important;
//               height: auto !important;
//               object-fit: contain !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default OurSchools;

// import "bootstrap/dist/css/bootstrap.min.css";

// const OurSchools = () => {
//   return (
//     <section
//       className="position-relative w-100 overflow-hidden"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* 🔹 Responsive Image Header Section */}
//       <div
//         className="position-relative d-flex justify-content-center align-items-center"
//         style={{
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* 🖥️ Desktop Image */}
//         <img
//           src="assets/img/hero/hero_11zon.webp"
//           alt="Our Schools Desktop"
//           className="img-fluid hero-img desktop-banner"
//           style={{
//             width: "100%",
//             height: "auto",
//             objectFit: "contain",
//             objectPosition: "center",
//             maxHeight: "75vh",
//             display: "block",
//           }}
//         />

//         {/* 📱 Mobile Image */}
//         <img
//           // src="/assets/img/imgnew/website banner 360 X 640 - Copy_11zon_11zon.webp"
//            src="/assets/img/imgnew/MOBILE VIEW (1) (1)_11zon.webp"
//           alt="Our Schools Mobile"
//           className="img-fluid hero-img mobile-banner"
//           style={{
//             width: "100vw",
//             height: "100vh",
//             objectFit: "cover",
//             objectPosition: "center",
//             display: "none", // hidden by default
//           }}
//         />
//       </div>

//       {/* 🔹 CSS Media Queries */}
//       <style>
//         {`
//           /* Default: show desktop banner, hide mobile */
//           .desktop-banner {
//             display: block;
//           }
//           .mobile-banner {
//             display: none;
//           }

//           /* 📱 For mobile devices only */
//           @media (max-width: 768px) {
//             .desktop-banner {
//               display: none !important;
//             }
//             .mobile-banner {
//               display: block !important;
//               width: 100vw !important;
//               height: 100vh !important;
//               object-fit: cover !important;
//               object-position: center !important;
//             }

//             /* Prevent extra space or scroll */
//             body, html {
//               margin: 0;
//               padding: 0;
//               overflow-x: hidden;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default OurSchools;

// import "bootstrap/dist/css/bootstrap.min.css";

// const OurSchools = () => {
//   return (
//     <section
//       className="position-relative w-100 overflow-hidden"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* 🔹 Responsive Image Header Section */}
//       <div
//         className="position-relative d-flex justify-content-center align-items-center"
//         style={{
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* 🖥️ Desktop Image */}
//         <img
//           src="assets/img/hero/hero_11zon.webp"
//           alt="Our Schools Desktop"
//           className="img-fluid hero-img desktop-banner"
//           style={{
//             width: "100%",
//             height: "auto",
//             objectFit: "contain",
//             objectPosition: "center",
//             maxHeight: "75vh",
//             display: "block",
//           }}
//         />

//         {/* 📱 Mobile Image */}
//         <img
//           // src="/assets/img/imgnew/website banner 360 X 640 - Copy_11zon_11zon.webp"
//            src="/assets/img/imgnew/MOBILE VIEW (1) (1)_11zon.webp"
//           alt="Our Schools Mobile"
//           className="img-fluid hero-img mobile-banner"
//           style={{
//             width: "100vw",
//             height: "100vh",
//             objectFit: "cover",
//             objectPosition: "center",
//             display: "none", // hidden by default
//           }}
//         />
//       </div>

//       {/* 🔹 CSS Media Queries */}
//       <style>
//         {`
//           /* Default: show desktop banner, hide mobile */
//           .desktop-banner {
//             display: block;
//           }
//           .mobile-banner {
//             display: none;
//           }

//           /* 📱 For mobile devices only */
//           @media (max-width: 768px) {
//             .desktop-banner {
//               display: none !important;
//             }
//             .mobile-banner {
//               display: block !important;
//               width: 100vw !important;
//               height: 70vh !important;
//               object-fit: cover !important;
//               object-position: center !important;
//             }

//             /* Prevent extra space or scroll */
//             body, html {
//               margin: 0;
//               padding: 0;
//               overflow-x: hidden;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default OurSchools;
