import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialHomeFive = () => {
  return (
    <>
      <section
        className="testimonial-section-5 fix section-padding"
        style={{ backgroundColor: "#f9fbff" }}
      >
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp" style={{ color: "#003366" }}>
              Voices of Trust
            </h6>
            <h3
              className="wow fadeInUp fw-bold"
              data-wow-delay=".3s"
              style={{ color: "#003366" }}
            >
              What Parents Say About Sahyadri World School
            </h3>
          </div>

          {/* Swiper Testimonials */}
          <Swiper
            spaceBetween={40}
            speed={800}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-dots",
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              991: { slidesPerView: 2 },
              768: { slidesPerView: 1 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="swiper testimonial-slider"
          >
            {/* Slide 1 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-card"
                style={{
                  background: "#fff",
                  border: "2px solid #e0e9ff",
                  borderRadius: "16px",
                  padding: "35px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        color: "#0057b8",
                        fontWeight: "700",
                        marginBottom: "5px",
                      }}
                    >
                      Neha Sharma
                    </h4>
                    <p style={{ color: "#444", marginBottom: "10px" }}>
                      Parent – Grade 6 Student
                    </p>
                    <div
                      style={{
                        height: "2px",
                        width: "80px",
                        backgroundColor: "#0057b8",
                        marginBottom: "15px",
                      }}
                    ></div>
                  </div>
                  {/* <img
                    src="/assets/img/meet-fun.png"
                    alt="school logo"
                    style={{ width: "45px", height: "45px" }}
                  /> */}
                </div>
                <p
                  style={{
                    color: "#333",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  “Sahyadri World School provides an excellent blend of
                  academics and activities. My child has become more confident
                  and expressive under the guidance of amazing teachers."
                </p>
                <div
                  style={{
                    fontSize: "28px",
                    color: "#0057b8",
                    position: "absolute",
                    bottom: "15px",
                    right: "25px",
                  }}
                >
                  “
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-card"
                style={{
                  background: "#fff",
                  border: "2px solid #e0e9ff",
                  borderRadius: "16px",
                  padding: "35px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        color: "#0057b8",
                        fontWeight: "700",
                        marginBottom: "5px",
                      }}
                    >
                      Arjun Mehta
                    </h4>
                    <p style={{ color: "#444", marginBottom: "10px" }}>
                      Parent – Grade 4 Student
                    </p>
                    <div
                      style={{
                        height: "2px",
                        width: "80px",
                        backgroundColor: "#0057b8",
                        marginBottom: "15px",
                      }}
                    ></div>
                  </div>
                  {/* <img
                    src="/assets/img/meet-fun.png"
                    alt="school logo"
                    style={{ width: "45px", height: "45px" }}
                  /> */}
                </div>
                <p
                  style={{
                    color: "#333",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  “The teachers are patient, skilled, and caring. Sahyadri World
                  School offers every child a chance to explore their strengths
                   in academics, sports, and art. My child loves coming to
                  school every day!”
                </p>
                <div
                  style={{
                    fontSize: "28px",
                    color: "#0057b8",
                    position: "absolute",
                    bottom: "15px",
                    right: "25px",
                  }}
                >
                  “
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-card"
                style={{
                  background: "#fff",
                  border: "2px solid #e0e9ff",
                  borderRadius: "16px",
                  padding: "35px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        color: "#0057b8",
                        fontWeight: "700",
                        marginBottom: "5px",
                      }}
                    >
                      Priya Nair
                    </h4>
                    <p style={{ color: "#444", marginBottom: "10px" }}>
                      Parent – Grade 2 Student
                    </p>
                    <div
                      style={{
                        height: "2px",
                        width: "80px",
                        backgroundColor: "#0057b8",
                        marginBottom: "15px",
                      }}
                    ></div>
                  </div>
                  {/* <img
                    src="/assets/img/meet-fun.png"
                    alt="school logo"
                    style={{ width: "45px", height: "45px" }}
                  /> */}
                </div>
                <p
                  style={{
                    color: "#333",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  “I appreciate the personal attention given to every student.
                  The focus on both academic and personal development makes
                  Sahyadri World School truly special. We’re very happy with our
                  child’s progress.”
                </p>
                <div
                  style={{
                    fontSize: "28px",
                    color: "#0057b8",
                    position: "absolute",
                    bottom: "15px",
                    right: "25px",
                  }}
                >
                  “
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Pagination Dots */}
          <div className="text-center mt-5">
            <div className="testimonial-dots"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeFive;
