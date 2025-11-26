import Count from "../../../common/Count";

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix section-padding">
        <div className="container">
          <div className="main-choose-us-wrapper">
            <div className="line-shape">
              <img src="assets/img/line-shape.png" alt="" />
            </div>

            {/* Top Section */}
            <div className="choose-us-top">
              <div className="section-title mb-0">
                <h3 className="wow fadeInUp">Why Choose Us</h3>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Empower Young Minds <br /> with Our Inspiring <br /> and
                  Nurturing Environment
                  {/* Inspire and nurture young minds <br /> to grow with confidence,<br /> creativity, and purpose */}
                </h2>
              </div>
              <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <i className="flaticon-satisfaction"></i>
                </div>
                <div className="content">
                    <p>Holistic Growth</p>
                  <h2>
                    <span className="odometer" data-count="99">
                      <Count number={99} text="%" />
                    </span>
                  </h2>
                  <p>
                    Parents trust us for quality learning and holistic growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="choose-us-bottom">
              <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                <div className="icon ">
                  <i className="flaticon-graduation"></i>
                </div>
                <div className="content">
                  <p>Student Enrolled</p>
                  <h2>
                    <span className="odometer" data-count="1200">
                        <Count number={1200} text="+" />
                    </span>
                  </h2>
                  <p>Sahyadri shapes bright minds through innovation.</p>
                </div>
              </div>

              <div
                className="icon-items style-2 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-teacher"></i>
                </div>
                <div className="content">
                  <p>Instructors</p>
                  <h2>
                    <span className="odometer" data-count="80">
                      <Count number={80} text="+" />
                    </span>
                  </h2>
                  <p>Expert teachers inspire values and excellence daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseHomeOne;
