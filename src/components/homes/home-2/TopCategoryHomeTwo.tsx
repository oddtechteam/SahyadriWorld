"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface InfraItem {
  title: string;
  desc: string;
  img: string;
  gradient: string;
}

const infraItems: InfraItem[] = [
  {
    title: "World-Class Learning Spaces",
    desc: "Smart classrooms, digital library, and innovation labs equipped with the latest technology to create engaging and future-ready learning environments.",
    img: "/assets/img/sah/school.jpeg",
    gradient: "linear-gradient(135deg,#dbeafe,#f0f9ff)",
  },
  {
    title: "Innovation & Design Thinking Labs",
    desc: "Hands-on learning spaces for STEM, Robotics, 3D Printing, AI, and Coding Studios that spark creativity, problem-solving, and innovation.",
    img: "/assets/img/sah/sci.jpeg",
    gradient: "linear-gradient(135deg,#d1fae5,#ecfdf5)",
  },
  {
    title: "State-of-the-Art Sports Complex",
    desc: "Badminton, Skating, Turf Grounds, and Indoor Sports Arenas built to encourage teamwork, discipline, and athletic excellence.",
    img: "/assets/img/imgnew/11zon.webp",
    gradient: "linear-gradient(135deg,#fee2e2,#fef2f2)",
  },
  {
    title: "Dedicated Arts & Performance Studios",
    desc: "Spaces for Theatre, Music, Dance, and Fine Arts where students express creativity, build confidence, and nurture artistic talent.",
    img: "/assets/img/imgnew/A2_11zon_11zon (2).webp",
    gradient: "linear-gradient(135deg,#f5e0ff,#faf5ff)",
  },
  {
    title: "Wellness & Mindfulness Hub",
    desc: "Counseling rooms, meditation zones, and holistic well-being programs designed to support emotional balance and student happiness.",
    img: "/assets/img/imgnew/15-Benefits-Of-Meditation-For-Students.jpg",
    gradient: "linear-gradient(135deg,#e0f2fe,#f0f9ff)",
  },
  {
    title: "Green & Sustainable Campus",
    desc: "Eco-friendly infrastructure featuring solar power, rainwater harvesting, and organic gardens fostering environmental awareness and sustainable living.",
    img: "/assets/img/imgnew/IMG_6905_11zon_11zon.webp",
    gradient: "linear-gradient(135deg,#dcfce7,#f0fdf4)",
  },
];

export default function StackingCards() {
  return (
    <div className="main">
      <style>{`
        .main {
          margin: 1vh 0;
        }

        .cardContainer {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          top: 0;
        }

        .card {
          position: relative;
          height: 480px;
          width: 90%;
          max-width: 1100px;
          border-radius: 26px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          transform-origin: top;
          backdrop-filter: blur(6px);
        }

        .card h2 {
          text-align: center;
          margin: 0;
          font-size: 32px;
          font-weight: 700;
        }

        .body {
          display: flex;
          height: 100%;
          margin-top: 40px;
          gap: 40px;
        }

        .description {
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* DESCRIPTION TEXT */
        .description p {
          font-size: clamp(1rem, 1.6vw, 1.35rem); /* responsive */
          line-height: 1.55;
          color: #333;
        }

        /* Make FIRST WORD bold + darker */
        .description p span.firstWord {
          font-weight: 700;
          color: #111;
        }

        .description p {
          font-size: 27px;
          line-height: 1.5;
        }

        .description p::first-letter {
          font-size: 32px;
        }

        .imageContainer {
          width: 60%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .imageContainer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* --- RESPONSIVE --- */

        @media (max-width: 900px) {
          .card {
            height: auto;
            padding: 25px;
          }

          .body {
            flex-direction: column;
            height: auto;
            gap: 25px;
          }

          .description {
            width: 100%;
            text-align: center;
          }

          .imageContainer {
            width: 100%;
            height: 280px;
          }
        }
      `}</style>

      {infraItems.map((item, i) => (
        <SingleCard key={i} item={item} index={i} />
      ))}
    </div>
  );
}

function SingleCard({ item, index }: { item: InfraItem; index: number }) {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className="cardContainer">
      <div
        className="card"
        style={{
          background: item.gradient,
          top: `calc(-4vh + ${index * 20}px)`,
        }}
      >
        <h2>{item.title}</h2>

        <div className="body">
          <div className="description">
            <p>
              <span className="firstWord">
                {item.desc.split(" ")[0]}
              </span>{" "}
              {item.desc.split(" ").slice(1).join(" ")}
            </p>

          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imgScale }}>
              <img src={item.img} alt={item.title} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
