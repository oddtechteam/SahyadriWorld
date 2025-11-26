import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-section fix section-padding">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: "40px" }}>
            <h6 className="wow fadeInUp" style={{ fontSize: "15px", letterSpacing: "0.5px" }}>
              Testimonials
            </h6>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ fontSize: "28px", lineHeight: "1.3", marginBottom: "20px" }}
            >
              What Parents and Students Say <br /> About Sahyadri World School
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            speed={2000}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              1199: { slidesPerView: 2 },
              991: { slidesPerView: 1 },
              767: { slidesPerView: 1 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="swiper testimonial-slider"
          >
            {/* Testimonial Card 1 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-box-items"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  padding: "25px",
                  borderRadius: "10px",
                  backgroundColor: "#fff6f6",
                  border: "1px solid #f1d6d6",
                }}
              >
                <div className="testimonial-content" style={{ width: "70%" }}>
                  <div className="star" style={{ fontSize: "12px", color: "#f4b400" }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#555",
                      marginTop: "10px",
                    }}
                  >
                    “Sahyadri World School provides an excellent balance of academics
                    and activities. My child has grown confident and responsible under
                    the guidance of wonderful teachers.”
                  </p>
                  <h4 style={{ fontSize: "15px", fontWeight: "600", marginTop: "15px" }}>
                    Neha Sharma
                  </h4>
                  <span style={{ fontSize: "13px", color: "#777" }}>
                    Parent of Grade 6 Student
                  </span>
                </div>

                <div
                  className="testimonial-image"
                  style={{
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="assets/img/testimonial/22.jpg"
                    alt="Parent"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial Card 2 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-box-items"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  padding: "25px",
                  borderRadius: "10px",
                  backgroundColor: "#fff9ed",
                  border: "1px solid #f1dfb0",
                }}
              >
                <div className="testimonial-content" style={{ width: "70%" }}>
                  <div className="star" style={{ fontSize: "12px", color: "#f4b400" }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#555",
                      marginTop: "10px",
                    }}
                  >
                    “The teachers are patient, caring, and skilled. The school offers
                    every child an opportunity to explore their talents, not just in
                    academics but also in sports and arts.”
                  </p>
                  <h4 style={{ fontSize: "15px", fontWeight: "600", marginTop: "15px" }}>
                    Arjun Mehta
                  </h4>
                  <span style={{ fontSize: "13px", color: "#777" }}>
                    Parent of Grade 4 Student
                  </span>
                </div>

                <div
                  className="testimonial-image"
                  style={{
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="assets/img/testimonial/22.jpg"
                    alt="Parent"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial Card 3 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="testimonial-box-items"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  padding: "25px",
                  borderRadius: "10px",
                  backgroundColor: "#f8faff",
                  border: "1px solid #dbe4f3",
                }}
              >
                <div className="testimonial-content" style={{ width: "70%" }}>
                  <div className="star" style={{ fontSize: "12px", color: "#f4b400" }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#555",
                      marginTop: "10px",
                    }}
                  >
                    “Sahyadri’s environment is full of encouragement and innovation.
                    I love the way learning is made fun and practical. I feel proud to
                    be part of this school.”
                  </p>
                  <h4 style={{ fontSize: "15px", fontWeight: "600", marginTop: "15px" }}>
                    Ananya Kulkarni
                  </h4>
                  <span style={{ fontSize: "13px", color: "#777" }}>
                    Student, Grade 9
                  </span>
                </div>

                <div
                  className="testimonial-image"
                  style={{
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="assets/img/testimonial/22.jpg"
                    alt="Student"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Pagination Dots */}
            <div className="swiper-dot text-center mt-5">
              <div className="dot"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeOne;
