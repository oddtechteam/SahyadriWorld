import { Link } from "react-router-dom";
import Count from "../../../common/Count";

const AboutHomeThree = () => {
  return (
    <>
      <div className="about-section-3 section-padding">
        <div className="container mt-3">
          <div className="about-wrapper-2">
            <div className="row g-4 justify-content-between">

              {/* LEFT CONTENT */}
              <div className="col-xl-6 col-lg-6">
                <div className="about-content">
                  
                  <div className="section-title">
                    <h3 className="text-white wow fadeInUp mb-2">
                      About Sahyadri World School
                    </h3>

                    <h2
                      className="text-white wow fadeInUp"
                      style={{ fontSize: "42px" }}
                      data-wow-delay=".3s"
                    >
                      We raise an independent and future ready individual
                    </h2>
                  </div>

                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    At Sahyadri World, we create inspiring and future ready learning
                    spaces where innovation meets purpose. Our dynamic and sustainable
                    environment nurtures curiosity, builds confidence, and cultivates
                    excellence empowering every learner to grow, achieve, and lead with vision.
                  </p>

                  {/* BUTTON */}
                  <Link
                    to="/about"
                    className="theme-btn wow fadeInUp"
                    style={{ backgroundColor: "#ffd25d" }}
                    data-wow-delay=".3s"
                  >
                    Learn About Us
                  </Link>

                  {/* COUNTERS */}
                  <div className="about-counter-items">

                    <div
                      className="counter-content wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h3>
                        <Count number={23} text="+" />
                      </h3>
                      <p>Years of Excellence</p>
                    </div>

                    <div
                      className="counter-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h3>
                        <Count number={10} text=" k+" />
                      </h3>
                      <p>Satisfied Students</p>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-xl-5 col-lg-6">
                <div className="about-image position-relative">
                  
                  <img
                    src="assets/img/about/abtm.webp"
                    alt="Sahyadri World School Building"
                    className="wow img-custom-anim-left"
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      objectFit: "cover",
                    }}
                  />

                  {/* SHAPE */}
                  <div
                    className="bg-shape"
                    style={{
                      position: "absolute",
                      top: "10%",
                      right: "-8%",
                      opacity: 0.15,
                      zIndex: "-1",
                    }}
                  >
                    <img
                      src="assets/img/about/bg-shape.webp"
                      alt="decorative shape"
                      style={{ width: "250px" }}
                    />
                  </div>

                  {/* COUNTER BOX OVERLAY */}
                  <div
                    className="counter-box"
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "12px",
                      padding: "12px 28px",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "#333",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px",
                      }}
                    >
                      More than
                    </p>

                    <h2
                      style={{
                        color: "#C02C2C",
                        fontSize: "42px",
                        fontWeight: "700",
                        lineHeight: "1",
                        marginBottom: "4px",
                      }}
                    >
                      <Count number={100} text="+" />
                    </h2>

                    <p
                      style={{
                        color: "#333",
                        fontSize: "15px",
                        fontWeight: "500",
                        margin: 0,
                      }}
                    >
                      Qualified Educators
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeThree;
