import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const setting = {
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
  breakpoints: {
    1399: { slidesPerView: 5 },
    1199: { slidesPerView: 4 },
    991: { slidesPerView: 3 },
    767: { slidesPerView: 2 },
    575: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

const slides = [
  {
    img: "assets/img/sah/DSC08771_11zon_11zon.webp",
    title: "Sahyadri's Young Achievers",
    text: "Sahyadri students proudly display their innovative space models",
  },
  {
    img: "assets/img/sah/DSC09278_11zon_11zon.webp",
    title: "Technology & Practical Learning",
    text: "Design Thinking | AI, Robotics & 3D Printing | Early Mechanics | Financial Literacy",
  },
  {
    img: "assets/img/sah/DSC09315_11zon_11zon.webp",
    title: "Creative Culinary Skills Activity Time",
    text: "Students gain valuable life skills and teamwork while proudly presenting their culinary creations",
  },
  {
    img: "assets/img/sah/extra_11zon (1)_11zon.webp",
    title: "Performing Art Studio",
    text: "The Performing Art Studio brings stories to life through vibrant dance and drama, celebrating culture and creativity",
  },
  {
    img: "assets/img/sah/DSC09108_11zon_11zon.webp",
    title: "Our student shows great focus while practicing archery",
    text: "Students learn to focus and aim high with our Archery program",
  },



  {
    img: "assets/img/sah/DSC09151_11zon_11zon.webp",
    title: "Joyful Gymnastics Stars",
    text: "Motivated students passionately practicing group gymnastics at Sahyadri World School.",
  },
  {
    img: "assets/img/sah/A2_11zon_11zon (2).webp",
    title: "Celebrating the Spirit of Sahyadri Through Dance",
    text: "Students perform a powerful traditional dance celebrating cultural arts nurtured by Sahyadri World School.",
  },



  {
    img: "assets/img/imgnew/IMG_6931_11zon11_11zon.webp",
    title: "Aspire to Achieve Greatness",
    text: "Every small step you take today is a giant leap towards the successful future you are building",
  },
    {
    img: "assets/img/imgnew/IMG_6915_11zon_11zon.webp",
    title: "The Sahyadri Family Celebrating Creativity and Community Spirit",
    text: "This event beautifully captured the talent and collaborative heart of our entire Sahyadri community",
  },
    {
    img: "assets/img/imgnew/IMG_6916_11zon_11zon.webp",
    title: "School Friends on an Adventure",
    text: "Big smiles and new friends Learning is fun when we do it together",
  },




    {
    img: "assets/img/imgnew/IMG_6908_11zon_11zon.webp",
    title: "Celebrating Collaborative Success",
    text: "When teachers guide with wisdom and students strive with determination, the entire school community achieves brilliance together",
  },
   
  
];

const TeamHomeOne = () => {
  return (
    <section
      className="team-section relative"
      style={{
        padding: "50px 0",
        background: "linear-gradient(180deg, #f9fbff 0%, #eef4ff 100%)",
        position: "relative",
      }}
    >
      {/* Navigation Arrows */}
      <button
        className="arrow-prev"
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.8)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 10,
          fontSize: "20px",
          color: "#004080",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        ❮
      </button>

      <button
        className="arrow-next"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.8)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 10,
          fontSize: "20px",
          color: "#004080",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        ❯
      </button>

      <Swiper {...setting} className="swiper team-slider">
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="team-box-items"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
            >
              <div
                className="team-image position-relative group"
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                {/* Overlay + Text */}
                <div
                  className="team-content"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
                    color: "#fff",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 600,
                      marginBottom: "10px",
                      transition: "all 0.3s ease",
                    }}
                    className="hover-title"
                  >
                    <Link
                      to={""}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      color: "#e0e0e0",
                      maxWidth: "90%",
                      transition: "all 0.4s ease",
                    }}
                    className="hover-text"
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hover Animation Styling */}
      <style>{`
        .team-box-items:hover .hover-title {
          font-size: 22px !important;
          font-weight: 800 !important;
          color: #1a1a1a !important;
        }

        .team-box-items:hover .hover-text {
          font-size: 16px !important;
          font-weight: 600;
          color: #1a1a1a !important;
        }

        .team-box-items:hover .team-content {
          background: #f5c541 !important; /* ✅ Golden hover background */
          transform: scale(1.02);
        }

        @media (max-width: 767px) {
          .arrow-prev,
          .arrow-next {
            width: 30px !important;
            height: 30px !important;
            font-size: 16px !important;
          }
          .hover-title {
            font-size: 16px !important;
          }
          .hover-text {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamHomeOne;
