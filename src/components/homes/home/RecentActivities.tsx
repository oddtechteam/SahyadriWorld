import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./RecentActivities.css";

const img = (folder: string, file: string) =>
  encodeURI(`/assets/img/gallery/${folder}/WhatsApp Image ${file}.jpeg`);

const activities = [
  {
    title: "Dentist Visit",
    tag: "Health",
    accent: "#e5484d",
    text: "A dental check-up camp where our students learned how to keep their teeth healthy.",
    images: [
      img("dentist visit", "2026-09-22 at 18.56.49"),
      img("dentist visit", "2026-09-22 at 18.56.49 (1)"),
      img("dentist visit", "2026-09-22 at 18.56.49 (3)"),
      img("dentist visit", "2026-09-22 at 18.56.49 (5)"),
    ],
  },
  {
    title: "Culinary Activity",
    tag: "Life Skills",
    accent: "#f7941d",
    text: "Students prepared healthy snacks together and discovered the joy of cooking.",
    images: [
      img("culinary", "2026-09-22 at 19.01.15"),
      img("culinary", "2026-09-22 at 19.01.15 (1)"),
      img("culinary", "2026-09-22 at 19.01.15 (2)"),
      img("culinary", "2026-09-22 at 19.01.15 (3)"),
      img("culinary", "2026-09-22 at 19.01.15 (4)"),
    ],
  },
  {
    title: "Independence Day",
    tag: "Celebration",
    accent: "#0057b8",
    text: "Our students celebrated Independence Day with performances full of pride and patriotism.",
    images: [
      img("independence day", "2026-09-23 at 15.22.07 (1)"),
      img("independence day", "2026-09-23 at 15.22.07 (2)"),
      img("independence day", "2026-09-23 at 15.22.07 (3)"),
      img("independence day", "2026-09-23 at 15.22.07 (4)"),
      img("independence day", "2026-09-23 at 15.22.07 (6)"),
      img("independence day", "2026-09-23 at 15.22.07 (7)"),
      img("independence day", "2026-09-23 at 15.22.07 (8)"),
    ],
  },
  {
    title: "Meditation",
    tag: "Wellness",
    accent: "#16a34a",
    text: "Mindfulness and meditation sessions that help children build calm and focus.",
    images: [
      img("Meditation", "2026-09-22 at 18.57.31 (5)"),
      img("Meditation", "2026-09-22 at 18.57.30 (1)"),
      img("Meditation", "2026-09-22 at 18.57.30 (2)"),
      img("Meditation", "2026-09-22 at 18.57.31 (2)"),
      img("Meditation", "2026-09-22 at 18.57.31 (4)"),
      img("Meditation", "2026-09-22 at 18.57.31 (6)"),
    ],
  },
  {
    title: "Temple Visit",
    tag: "Culture",
    accent: "#9b4dca",
    text: "Students, teachers and parents visited a temple together to learn about our culture and traditions.",
    images: [
      img("temple visit", "2026-09-22 at 18.58.47 (1)"),
      img("temple visit", "2026-09-22 at 18.58.47 (2)"),
      img("temple visit", "2026-09-22 at 18.58.49"),
      img("temple visit", "2026-09-22 at 18.58.49 (1)"),
      img("temple visit", "2026-09-22 at 18.58.49 (2)"),
      img("temple visit", "2026-09-22 at 18.58.49 (3)"),
    ],
  },
];

const RecentActivities = () => {
  const [open, setOpen] = useState<{ activity: number; photo: number } | null>(
    null
  );
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((dir: number) => {
    setOpen((cur) => {
      if (!cur) return cur;
      const count = activities[cur.activity].images.length;
      return { ...cur, photo: (cur.photo + dir + count) % count };
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open ? activities[open.activity] : null;

  return (
    <>
      <section className="ra-section">
        <div className="container">
          <div className="ra-head">
            <div>
              <span className="ra-eyebrow">
                <span className="ra-live"></span>
                Life at Sahyadri
              </span>
              <h2 className="ra-title">
                Recent <span>Activities</span>
              </h2>
              <p className="ra-subtitle">
                A glimpse of what our students have been learning and
                celebrating.
              </p>
            </div>
            <Link to="/gallery" className="ra-all">
              View Full Gallery <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="ra-grid">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="ra-card wow fadeInUp"
                data-wow-delay={`${0.1 * index}s`}
                role="button"
                tabIndex={0}
                aria-label={`View ${activity.title} photos`}
                style={{ "--ra-accent": activity.accent } as React.CSSProperties}
                onClick={() => setOpen({ activity: index, photo: 0 })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setOpen({ activity: index, photo: 0 });
                }}
              >
                <img
                  className="ra-cover"
                  src={activity.images[0]}
                  alt={activity.title}
                  loading="lazy"
                />
                <div className="ra-shade"></div>

                <span className="ra-tag">{activity.tag}</span>
                <span className="ra-count">
                  <i className="fas fa-images"></i> {activity.images.length}
                </span>

                <div className="ra-body">
                  <h4>{activity.title}</h4>
                  <p>{activity.text}</p>
                  <div className="ra-extra">
                    <div className="ra-thumbs">
                      {activity.images.slice(1, 4).map((src) => (
                        <img key={src} src={src} alt="" loading="lazy" />
                      ))}
                    </div>
                    <span className="ra-view">
                      View Photos
                      <span className="ra-view-icon">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo viewer */}
      {open && current && (
        <div className="ra-viewer" onClick={close}>
          <div className="ra-viewer-top" onClick={(e) => e.stopPropagation()}>
            <div>
              <h5>{current.title}</h5>
              <small>
                Photo {open.photo + 1} of {current.images.length}
              </small>
            </div>
            <button className="ra-close" onClick={close} aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div
            className="ra-stage"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <img
              key={current.images[open.photo]}
              src={current.images[open.photo]}
              alt={`${current.title} ${open.photo + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            {current.images.length > 1 && (
              <>
                <button
                  className="ra-nav prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className="ra-nav next"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>

          <div className="ra-strip" onClick={(e) => e.stopPropagation()}>
            {current.images.map((src, i) => (
              <button
                key={src}
                className={i === open.photo ? "active" : ""}
                onClick={() => setOpen({ activity: open.activity, photo: i })}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentActivities;
