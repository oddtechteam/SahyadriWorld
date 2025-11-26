// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const AboutHomeFive = () => {
  // const percentage = 98;
  // const percentage2 = 97;

  return (
    <>
      <section className="about-section fix section-padding pt-3 mt-5 pb-2">
        <div className="container">
          <div className="about-wrapper-4">
            <div className="row g-4">
              {/* Left Image Section */}
              <div className="col-lg-4">
                <div className="about-image">
                  <img
                    src="assets/img/sah/abtm_11zon (1)_11zon.webp"
                    alt="Sahyadri Campus"
                    className="wow img-custom-anim-left"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                    style={{ borderRadius: "10px" }}
                  />
                  {/* <div className="about-image-2">
                    <img
                      src="assets/img/sah/abtm.jpeg"
                      alt="Sahyadri Students"
                      className="wow img-custom-anim-top"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.5s"
                      style={{ borderRadius: "10px" }}
                    />
                  </div> */}
                </div>
              </div>

              {/* Right Content Section */}
              <div className="col-lg-8">
                <div className="about-content">
                  <div className="section-title color-blue">
                    <h6 className="wow fadeInUp">About Sahyadri World School</h6>
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Shaping young minds for 23 years with love and learning.
                    </h3>
                  </div>

                  <p
                    className="mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ fontSize: "15px" }}
                  >
                   Sahyadri World School has been shaping young minds for 23 years with care,
                    knowledge, and inspiration, empowering every student to dream big and achieve greatness.
                     We are committed to nurturing confident, compassionate, 
                   and future-ready individuals who will lead with wisdom and integrity.
                  </p>

                  {/* Progress Bars */}
                  {/* <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="circle-bar">
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      </div>
                      <div className="content">
                        <h6>
                          Academic <br /> Excellence
                        </h6>
                      </div>
                    </div>

                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="circle-bar">
                        <CircularProgressbar
                          value={percentage2}
                          text={`${percentage2}%`}
                        />
                      </div>
                      <div className="content">
                        <h6>
                          Holistic <br /> Development
                        </h6>
                      </div>
                    </div>
                  </div> */}

                  {/* Key Features */}
                  <div className="row g-4 mt-3">
                    <div
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ul className="list">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Smart Classrooms 
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          AI, Robotics & 3D Printing Labs
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Performing Arts & Music Studio
                        </li>
                      </ul>
                    </div>

                    <div
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ul className="list">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Sports, Yoga & Fitness Programs
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Day Boarding (8 AM – 6 PM)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Healthy Meals & Safe Campus
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Button & Author */}
                  <div className="about-author mt-4 justify-content-center">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Link
                        to="/"
                        className="theme-btn"
                        style={{
                          width: "200px",
                          textAlign: "center",
                          display: "block",
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                    {/* <div
                      className="author-image d-flex align-items-center gap-3 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                        <img
                        src="assets/img/about/signture.png"
                        alt="Signature"
                        style={{ width: "100px" }}
                      />

                      <img
                        src="assets/img/about/client.jpg"
                        alt="Principal"
                        style={{ width: "60px", borderRadius: "50%" }}
                      />
                    
                    </div> */}
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

export default AboutHomeFive;
