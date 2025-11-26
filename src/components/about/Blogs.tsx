
const AboutSahyadri = () => {
  const aboutPoints = [
    {
      title: "CBSE Curriculum with Modern Teaching Techniques",
      img: "/assets/img/sah/DSC08830_11zon.webp",
      description:
        " At Sahyadri World School, we follow the CBSE curriculum with modern teaching methods that foster learning, creativity, and innovation for global excellence.",
    },
    {
      title:
        "Cultivating Discipline, Creativity & Passion through Sports and Arts",
      img: "/assets/img/imgnew/IMG_6900_11zon_11zon.webp",
      description:
        "We believe education goes beyond classrooms, nurturing discipline, teamwork, and creativity through world class sports and arts facilities.",
    },
    {
      title: "Safe & Eco-Friendly Campus",
      img: "/assets/img/sah/school_11zon.webp",
      description:
        "At Sahyadri World School, our eco-friendly campus ensures safety, sustainability, and a positive space for confident learning and growth.",
    },
    {
      title: "Balanced Teacher-Student Ratio for Focused Learning",
      img: "/assets/img/imgnew/IMG_6915_11zon_11zon.webp",
      description:
        " Our small class sizes ensure personalized attention, guidance, and mentorship for every learner.",
    },
    {
      title: "Focus on Holistic Development",
      img: "/assets/img/sah/DSC08771_11zon_11zon.webp",
      description:
        " We nurture well rounded individuals by balancing academics, sports, arts, leadership, and emotional well being.",
    },
    {
      title: "Day Care & Extended Hours for All Age Groups",
      img: "/assets/img/imgnew/IMG_6904_11zon_11zon (1).webp",
      description:
        " Sahyadri World School offers day care and extended hours, ensuring comfort, learning, and safety for every child.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to bottom, #f9fbff, #ffffff)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <div className="text-center mb-5">
        <h2
          className="fw-bold mb-3"
          style={{ fontSize: "2.5rem", color: "#007DC5" }}
        >
          Sahyadri World School
        </h2>
        <p
          className="text-muted mx-auto"
          style={{ maxWidth: "700px", fontSize: "1.1rem" }}
        >
          “Welcome to Sahyadri World School Where Learning Inspires Excellence”
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {aboutPoints.map((point, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src={point.img}
                  alt={point.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="card-body" style={{ padding: "1.5rem" }}>
                  <h5
                    className="card-title fw-semibold"
                    style={{ color: "#007DC5", fontSize: "1.2rem" }}
                  >
                    {point.title}
                  </h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSahyadri;
