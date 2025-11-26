import { Link } from "react-router-dom";

const AboutHomeOne = () => {
  return (
    <>
      <section className="about-section fix section-padding pt-0">
        <div className="about-wrapper">
          <div className="row g-4">
            
            {/* Left Image */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="about-image wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img src="assets/img/about/rok1.png" alt="Sahyadri campus" />
              </div>
            </div>

            {/* About Content */}
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="about-content">
                <div className="section-title">
                  <h4 className="wow fadeInUp">About Sahyadri World School</h4>
                  <h3 style={{fontSize:'2vw' , color:'#f4c330'}} className="wow fadeInUp" data-wow-delay=".3s">
                    Shaping Bright Minds, <br /> Building a Brighter Future
                  </h3>
                </div>

                <p
                  className="mt-3 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  At <strong>Sahyadri World School</strong>, we blend academics, innovation, 
                  and values to create confident, creative, and compassionate learners. 
                  With a focus on holistic growth, we prepare students to lead and 
                  succeed in a dynamic world.
                </p>

                <div className="counter-box-items">
                  <div
                    className="counter-content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">15</span>+
                    </h2>
                    <p>Years of Excellence</p>
                  </div>

                  <p
                    className="text wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Nurturing future leaders through world-class education, 
                    strong values, and a passion for innovation.
                  </p>
                </div>

                <Link
                  to="/about"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* Right Images */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="about-image-items">
                <div
                  className="about-image-2 wow img-custom-anim-top"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/img/about/Bckabt.jpg" alt="students learning" />
                </div>
                <div
                  className="about-image-3 wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/about/rok2.png" alt="school activity" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;
