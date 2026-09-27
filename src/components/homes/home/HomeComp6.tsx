import {
  FaLaptopCode,
  FaShieldAlt,
  FaUserGraduate,
  FaUniversity,
  FaHeart,
  FaBookOpen,
  FaFirstAid,
  FaBusAlt,
} from "react-icons/fa";
import { useRef, useEffect } from "react";
import "./schoolEcoSystem.css";

const SchoolEcoSystemSlider = () => {

  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<number | null>(null);
  const isDragging = useRef(false);

  const features = [
    { title: "Digital EcoSystem", description: "Advanced digital learning tools.", icon: <FaLaptopCode />, image: "/assets/img/cta/DSC09327_11zon_11zon.webp" },
    { title: "Certified Safe School", description: "Highest safety standards.", icon: <FaShieldAlt />, image: "/assets/img/cta/DSC09137_11zon_11zon.webp" },
    { title: "Career Guidance", description: "Professional career counseling.", icon: <FaUserGraduate />, image: "/assets/img/cta/a2_11zon.webp" },
    { title: "Knowledge Hub", description: "Modern & digital library.", icon: <FaUniversity />, image: "/assets/img/cta/DSC08747_11zon_11zon.webp" },
    { title: "Centre of Well Being", description: "Student wellness programs.", icon: <FaHeart />, image: "/assets/img/cta/DSC09318_11zon_11zon.webp" },
    { title: "Library", description: "Modern reading experience.", icon: <FaBookOpen />, image: "/assets/img/cta/homecom66_11zon_11zon.webp" },
    { title: "Professional Infirmary", description: "24/7 medical care.", icon: <FaFirstAid />, image: "/assets/img/cta/images_11zon_11zon.webp" },
    { title: "Transport", description: "Safe school transportation.", icon: <FaBusAlt />, image: "/assets/img/cta/homecom68_11zon_11zon.webp" },
  ];

  const extended = [...features, ...features, ...features];

  const slideRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector(".ecosystem-card") as HTMLElement;
    if (!card) return;
    slider.scrollBy({ left: card.offsetWidth + 20, behavior: "smooth" });
  };

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector(".ecosystem-card") as HTMLElement;
    if (!card) return;
    slider.scrollBy({ left: -(card.offsetWidth + 20), behavior: "smooth" });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const center = () => (slider.scrollLeft = slider.scrollWidth / 3);

    const loop = () => {
      if (!slider) return;
      if (slider.scrollLeft <= 0) center();
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2) center();
    };

    slider.addEventListener("scroll", loop, { passive: true });

    setTimeout(center, 50);

    return () => slider.removeEventListener("scroll", loop);
  }, []);

  useEffect(() => {
    autoRef.current = window.setInterval(() => {
      if (!isDragging.current) slideRight();
    }, 2600);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    isDragging.current = true;
  };

  const resumeAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    isDragging.current = false;
    autoRef.current = window.setInterval(() => slideRight(), 2600);
  };

  return (
    <div className="school-eco-wrapper">
      <section className="eco-section">
        <div className="eco-inner">
          <div className="container">
            <div className="eco-head">
              <div>
                <span className="eco-eyebrow">Beyond the Classroom</span>
                <h2 className="eco-title-main">
                  Sahyadri World School <span>Growth Hub</span>
                </h2>
                <p className="eco-subtitle">
                  Everything your child needs to learn, grow and stay safe, all
                  in one campus.
                </p>
              </div>

              {/* Arrows */}
              <div className="eco-controls">
                <button className="slider-arrow" onClick={slideLeft} aria-label="Previous">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="slider-arrow" onClick={slideRight} aria-label="Next">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="ecosystem-slider"
            ref={sliderRef}
            onMouseEnter={pauseAuto}
            onMouseLeave={resumeAuto}
            onPointerDown={pauseAuto}
            onPointerUp={resumeAuto}
          >
            {extended.map((f, index) => (
              <div className="ecosystem-card" key={index}>
                <img className="eco-img" src={f.image} alt={f.title} loading="lazy" />
                <div className="eco-shade"></div>

                <span className="eco-number">
                  {String((index % features.length) + 1).padStart(2, "0")}
                </span>

                <div className="ecosystem-body">
                  <div className="ecosystem-icon">{f.icon}</div>
                  <h5 className="feature-title">{f.title}</h5>
                  <p className="feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SchoolEcoSystemSlider;
