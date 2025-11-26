import { Link } from "react-router-dom";

const TopCategoryHomeOne = () => {
  return (
    <>
      <section className="top-category section-padding">
        <div className="container">
          <div className="row g-4">
            {/* LEFT SIDE CONTENT */}
            <div className="col-lg-5">
              <div className="section-title">
                <h6 className="wow fadeInUp">Why Choose Sahyadri World School</h6>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Building Future-Ready Learners
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                At Sahyadri World School, we nurture intellectual growth, 
                creativity, wellness, and values through an integrated approach 
                that balances academics, skills, and holistic development.
              </p>
              <div className="top-category-button">
                <Link
                  to="/about"
                  className="theme-btn yellow-btn mt-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE GRID */}
            <div className="col-lg-7">
              <div className="top-category-wrapper">
                <div className="row g-0">

                  {/* 1️⃣ Day Boarding */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="top-category-box-items active">
                      <Link to="/admissions">
                        <div className="icon">
                          {/* <i className="flaticon-sun"></i> */}
                        </div>
                        <h6>Day Boarding (Optional)</h6>
                        <p>
                          8 AM–6 PM full-day learning program designed 
                          for future-ready students.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* 2️⃣ Smart Meals */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="top-category-box-items">
                      <Link to="/facilities">
                        <div className="icon">
                          {/* <i className="flaticon-cutlery"></i> */}
                        </div>
                        <h6>Smart Meals & Healthy Delights</h6>
                        <p>
                          Nutritious, balanced, and hygienic meals crafted 
                          for growing young minds.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* 3️⃣ Technology & Practical Learning */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="top-category-box-items border-right-none">
                      <Link to="/academics">
                        <div className="icon">
                          {/* <i className="flaticon-robot"></i> */}
                        </div>
                        <h6>Technology & Practical Learning</h6>
                        <p>
                          AI Robotics, Design Thinking, 3D Printing, 
                          and Financial Literacy.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* 4️⃣ Building Flexibility & Endurance */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="top-category-box-items">
                      <Link to="/activities">
                        <div className="icon">
                          {/* <i className="flaticon-football"></i> */}
                        </div>
                        <h6>Building Flexibility & Endurance</h6>
                        <p>
                          Gymnastics, Tennis, Martial Arts, Cycling 
                          & other sports programs.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* 5️⃣ Performing Art Studio */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="top-category-box-items">
                      <Link to="/activities">
                        <div className="icon">
                          {/* <i className="flaticon-paint-palette"></i> */}
                        </div>
                        <h6>Performing Art Studio</h6>
                        <p>
                          Theatre, Dance, Music, and Creative Workshops 
                          like pottery and resin art.
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* 6️⃣ Wellness & Mindfulness */}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="top-category-box-items border-right-none">
                      <Link to="/facilities">
                        <div className="icon">
                          {/* <i className="flaticon-lotus"></i> */}
                        </div>
                        <h6>Wellness & Mindfulness</h6>
                        <p>
                          Yoga, Meditation & Ayurveda to promote 
                          balance and well-being.
                        </p>
                      </Link>
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

export default TopCategoryHomeOne;
