// const FunfactHomeFour = () => {
//   return (
//     <>
//       <section className="meet-fun-section fix section-padding">
//         <div className="container">
//           {/* <div className="section-title text-center color-pink">
//             <h6 className="wow fadeInUp">Why Choose Us</h6>
//             <h2 className="wow fadeInUp" data-wow-delay=".3s">
//               Empowering Students <br /> Through Holistic Learning
//             </h2>
//           </div> */}
//           <div className="meet-fun-wrapper">
//             <div className="main-bg-shape">
//               <img src="assets/img/meet-fun-main-bg_11zon.webp" alt="img" />
//             </div>
//             <div className="row g-0 justify-content-between align-items-center">
//               <div className="col-xl-4 col-lg-6 col-md-6">
//                 <div className="meet-fun-items">
//                   <div
//                     className="meet-fun-box wow fadeInUp"
//                     data-wow-delay=".3s"
//                   >
//                     <div className="icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                       <i className="flaticon-tent"></i>
//                     </div>
//                     <div className="content">
//                       <h4 >Holistic Education</h4>{" "}
//                       <p>
//                         We provide holistic education that helps students grow in mind, body, 
//                         and spirit building knowledge, values, creativity, and confidence to succeed in life.
//                       </p>{" "}
//                     </div>
//                   </div>
//                   <div
//                     className="meet-fun-box bg-2 wow fadeInUp"
//                     data-wow-delay=".5s"
//                   >
//                     <div className="icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                       <i className="flaticon-night-club"></i>
//                     </div>
//                     <div className="content">
//                       <h4>Technology & Innovation</h4>
//                       <p>
//                        We integrate technology and innovation into learning, inspiring students to think creatively, solve problems, and lead in a digital world.

//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="col-xl-4 col-lg-6 col-md-6 order-2 order-lg-1 wow fadeInUp"
//                 data-wow-delay=".5s"
//               >
//                 <div className="meet-fun-image">
//                   <img src="assets/img/meet-fun.png" alt="img" />
//                   {/* <div className="bg-shape">
//                     <img src="assets/img/meet-fun-bg.png" alt="img" />
//                   </div> */}
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-6 col-md-6 order-1 order-lg-2">
//                 <div className="meet-fun-items">
//                   <div
//                     className="meet-fun-box bg-3 wow fadeInUp"
//                     data-wow-delay=".3s"
//                   >
//                     <div className="icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                       <i className="flaticon-games-1"></i>
//                     </div>
//                      <div className="content">
//                       <h4>Sports & Fitness</h4>
//                       <p>
//                        We promote sports and fitness to build strength, teamwork, and a healthy lifestyle.

//                       </p>
//                     </div>
//                   </div>
//                   <div
//                     className="meet-fun-box bg-4 wow fadeInUp"
//                     data-wow-delay=".5s"
//                   >
//                   <div className="icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                        <i className="flaticon-mop"></i>
//                   </div>

//                     <div className="content">
//                        <h4>Wellness & Mindfulness</h4>
//                       <p>
//                      We promote wellness and mindfulness in school to support students’ focus, emotional balance, and overall well-being.

//                       </p>
//                     </div>
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default FunfactHomeFour;



import "bootstrap/dist/css/bootstrap.min.css";

const FunfactHomeFour = () => {
  return (
    <>
      <section className="meet-fun-section fix section-padding">
{/* <section
  className="meet-fun-section fix px-4 pt-0 pb-10 md:px-8 md:pt-0 md:pb-20 lg:px-12 lg:pt-0 lg:pb-24"
> */}

        <div className="container">
          {/* Optional title section */}
          {/* 
          <div className="section-title text-center color-pink">
            <h6 className="wow fadeInUp">Why Choose Us</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Empowering Students <br /> Through Holistic Learning
            </h2>
          </div> 
          */}

          <div className="meet-fun-wrapper">
            <div className="main-bg-shape">
              <img style={{borderRadius:'20px'}} src="assets/img/meet-fun-main-bg_11zon.webp" alt="img" />
            </div>

            <div className="row g-0 justify-content-between align-items-center">
              {/* LEFT COLUMN */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="meet-fun-items">
                  {/* Box 1 */}
                  <div
                    className="meet-fun-box wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className="flaticon-tent"></i>
                    </div>
                    <div
                      className="content"
                      style={{ textAlign: "center" }}
                    >
                      <h4>Holistic Education</h4>
                      <p>
                        We provide holistic education that helps students grow in mind,
                        body, and spirit building knowledge, values, creativity, and
                        confidence to succeed in life.
                      </p>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div
                    className="meet-fun-box bg-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className="flaticon-night-club"></i>
                    </div>
                    <div
                      className="content"
                      style={{ textAlign: "center" }}
                    >
                      <h4>Technology & Innovation</h4>
                      <p>
                        We integrate technology and innovation into learning, inspiring
                        students to think creatively, solve problems, and lead in a
                        digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER IMAGE */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 order-2 order-lg-1 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="meet-fun-image text-center">
                  <img
                    src="assets/img/WhyUs.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-xl-3 col-lg-6 col-md-6 order-1 order-lg-2">
                <div className="meet-fun-items">
                  {/* Box 3 */}
                  <div
                    className="meet-fun-box bg-3 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className="flaticon-games-1"></i>
                    </div>
                    <div
                      className="content"
                      style={{ textAlign: "center" }}
                    >
                      <h4>Sports & Fitness</h4>
                      <p>
                        We promote sports and fitness to build strength, teamwork,
                        and a healthy lifestyle.
                      </p>
                    </div>
                  </div>

                  {/* Box 4 */}
                  <div
                    className="meet-fun-box bg-4 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className="flaticon-mop"></i>
                    </div>
                    <div
                      className="content"
                      style={{ textAlign: "center" }}
                    >
                      <h4>Wellness & Mindfulness</h4>
                      <p>
                        We promote wellness and mindfulness in school to support
                        students’ focus, emotional balance, and overall well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunfactHomeFour;
