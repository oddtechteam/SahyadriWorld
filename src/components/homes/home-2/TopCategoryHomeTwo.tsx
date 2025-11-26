import React, { useEffect } from "react";

const infraItems = [
  {
    title: "World-Class Learning Spaces",
    desc: "Smart classrooms, digital library, and innovation labs equipped with the latest technology to create engaging and future-ready learning environments.",
    img: "/assets/img/sah/school.jpeg",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)",
  },
  {
    title: "Innovation & Design Thinking Labs",
    desc: "Hands-on learning spaces for STEM, Robotics, 3D Printing, AI, and Coding Studios that spark creativity, problem-solving, and innovation.",
    img: "/assets/img/sah/sci.jpeg",
    gradient: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)",
  },
  {
    title: "State-of-the-Art Sports Complex",
    desc: "Badminton, Skating, Turf Grounds, and Indoor Sports Arenas built to encourage teamwork, discipline, and athletic excellence.",
    img: "/assets/img/imgnew/11zon.webp",
    gradient: "linear-gradient(135deg, #fee2e2 0%, #fef2f2 100%)",
  },
  {
    title: "Dedicated Arts & Performance Studios",
    desc: "Spaces for Theatre, Music, Dance, and Fine Arts where students express creativity, build confidence, and nurture artistic talent.",
    img: "/assets/img/imgnew/A2_11zon_11zon (2).webp",
    gradient: "linear-gradient(135deg, #f5e0ff 0%, #faf5ff 100%)",
  },
  {
    title: "Wellness & Mindfulness Hub",
    desc: "Counseling rooms, meditation zones, and holistic well-being programs designed to support emotional balance and student happiness.",
    img: "/assets/img/imgnew/15-Benefits-Of-Meditation-For-Students.jpg",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)",
  },
  {
    title: "Green & Sustainable Campus",
    desc: "Eco-friendly infrastructure featuring solar power, rainwater harvesting, and organic gardens fostering environmental awareness and sustainable living.",
    img: "/assets/img/imgnew/IMG_6905_11zon_11zon.webp",
    gradient: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)",
  },
];

const StackingCards: React.FC = () => {
  useEffect(() => {
    // MOBILE STACKING LOGIC
    if (window.innerWidth >= 768) return;

    const cards = document.querySelectorAll<HTMLLIElement>(".card");

    const onScroll = () => {
      const scrollY = window.scrollY;

      cards.forEach((card, index) => {
        const content = card.querySelector(".card-content") as HTMLElement;
        if (!content) return;

        const start = index * 200;
        const end = start + 320;

        const progress = Math.min(
          Math.max((scrollY - start) / (end - start), 0),
          1
        );

        const translateY = progress * index * 52;
        const scale = 1 - progress * 0.06;

        content.style.transform = `translateY(${translateY}px) scale(${scale})`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stacking-wrapper">

      {/* ================= CSS ================= */}
      <style>{`
        .stacking-wrapper * { box-sizing: border-box; }

        .stacking-wrapper {
          width: 100%;
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px 15px;
          background: transparent;
        }

        :root {
          --card-height: 55vh;
          --card-margin: 3vh;
          --card-top-offset: 2em;
          --numcards: 6;
        }

        @media (max-width: 768px) {
          :root {
            --card-height: auto; 
          }
          #cards {
            padding-bottom: 20vh;
          }
        }

        #cards {
          list-style: none;
          display: grid;
          grid-template-rows: repeat(var(--numcards), var(--card-height));
          gap: var(--card-margin);
          padding-bottom: calc(var(--numcards) * var(--card-top-offset));
         
        }

        .card {
         background: transparent;
          position: sticky;
          top: 160px;
          border-color: transparent;
        }

        .card-content {
          border-radius: 1.2rem;
          padding: 1.5rem;
          overflow: hidden;
          transition: transform 0.25s ease-out;
          will-change: transform;

          /* Desktop Layout */
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        /* MOBILE STACK — text first, image last */
        @media (max-width: 768px) {
          .card-content {
            grid-template-columns: 1fr;
          }
          .card-content figure {
            order: 3;
          }
        }

        .card-content img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: .7rem;
          box-shadow: 0 4px 18px rgba(0,0,0,0.15);
        }

        .card h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0b2b5c;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 1rem;
          color: #003b80;
          line-height: 1.6;
        }

        /* DESKTOP SCROLL ANIMATION */
        @supports (animation-timeline: works) {
          @media (min-width: 768px) {

            @scroll-timeline cards-scroll {
              source: selector(.stacking-wrapper);
              time-range: 6s;
            }

            .card:nth-child(1) { --index: 1; }
            .card:nth-child(2) { --index: 2; }
            .card:nth-child(3) { --index: 3; }
            .card:nth-child(4) { --index: 4; }
            .card:nth-child(5) { --index: 5; }
            .card:nth-child(6) { --index: 6; }

            .card {
              --i0: calc(var(--index) - 1);
              --rev: calc(var(--numcards) - var(--i0));
              --rev0: calc(var(--rev) - 1);
              padding-top: calc(var(--index) * var(--card-top-offset));
            }

            .card-content {
              animation: scale-card linear forwards;
              animation-timeline: cards-scroll;
              animation-duration: calc(var(--rev0) * 1s);
              animation-delay: calc(var(--i0) * 1s);
            }

            @keyframes scale-card {
              to { transform: scale(calc(1.06 - (0.09 * var(--rev)))); }
            }
          }
        }

      `}</style>

      {/* ================= CARDS ================= */}
      <ul id="cards">
        {infraItems.map((item, index) => (
          <li className="card" key={index}>
            <div
              className="card-content"
              style={{ background: item.gradient }}
            >
              <div className="text-box">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackingCards;
