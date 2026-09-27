import { useCallback, useEffect, useState } from "react";

const img = (folder: string, file: string) =>
  encodeURI(`/assets/img/gallery/${folder}/WhatsApp Image ${file}.jpeg`);

const activities = [
  {
    title: "Dentist Visit",
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

const navButton: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(255, 255, 255, 0.9)",
  color: "#003366",
  fontSize: "18px",
  cursor: "pointer",
};

const RecentActivities = () => {
  const [open, setOpen] = useState<{ activity: number; photo: number } | null>(
    null
  );

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
      <section
        className="recent-activities-section fix section-padding"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp" style={{ color: "#003366" }}>
              Life at Sahyadri
            </h6>
            <h3
              className="wow fadeInUp fw-bold"
              data-wow-delay=".3s"
              style={{ color: "#003366" }}
            >
              Recent Activities
            </h3>
          </div>

          <div className="row g-4 justify-content-center">
            {activities.map((activity, index) => (
              <div className="col-lg-4 col-md-6" key={activity.title}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpen({ activity: index, photo: 0 })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setOpen({ activity: index, photo: 0 });
                  }}
                  style={{
                    background: "#fff",
                    border: "2px solid #e0e9ff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={activity.images[0]}
                      alt={activity.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        background: "rgba(0, 51, 102, 0.85)",
                        color: "#fff",
                        fontSize: "13px",
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      <i className="fas fa-images" style={{ marginRight: "6px" }}></i>
                      {activity.images.length} Photos
                    </span>
                  </div>
                  <div style={{ padding: "22px 25px" }}>
                    <h4
                      style={{
                        color: "#0057b8",
                        fontWeight: "700",
                        fontSize: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {activity.title}
                    </h4>
                    <p
                      style={{
                        color: "#444",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        marginBottom: "12px",
                      }}
                    >
                      {activity.text}
                    </p>
                    <span
                      style={{ color: "#0057b8", fontWeight: "600", fontSize: "14px" }}
                    >
                      View Photos →
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
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "36px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "1000px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img
              src={current.images[open.photo]}
              alt={`${current.title} ${open.photo + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "78vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            {current.images.length > 1 && (
              <>
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  style={{ ...navButton, left: "10px" }}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  style={{ ...navButton, right: "10px" }}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
            <p style={{ color: "#fff", marginTop: "15px", marginBottom: 0 }}>
              {current.title} — {open.photo + 1} / {current.images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentActivities;
