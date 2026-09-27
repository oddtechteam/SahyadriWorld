import { useCallback, useEffect, useState } from "react";
import { videos } from "../../gallery/videos";
import "./HomeVideos.css";

const HomeVideos = () => {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  // Silent preview on hover (desktop); full playback with sound opens in the modal
  const preview = (e: React.MouseEvent<HTMLVideoElement>, play: boolean) => {
    const el = e.currentTarget;
    if (play) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0.5;
    }
  };

  return (
    <>
      <section className="home-videos section-padding fix">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp home-videos__eyebrow">
              <i className="fas fa-video"></i> Video Gallery
            </h6>
            <h3 className="wow fadeInUp fw-bold home-videos__title" data-wow-delay=".3s">
              Watch Our Students in Action
            </h3>
            <p className="wow fadeInUp home-videos__subtitle" data-wow-delay=".5s">
              Moments of learning, play and discovery from everyday life at Sahyadri
              World School.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {videos.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                key={item.title}
              >
                <div
                  className="home-videos__card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpen(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setOpen(index);
                  }}
                >
                  <video
                    src={`${item.src}#t=0.5`}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => preview(e, true)}
                    onMouseLeave={(e) => preview(e, false)}
                  />
                  <div className="home-videos__overlay" />
                  <span className="home-videos__badge">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-videos__play" aria-hidden="true">
                    <i className="fas fa-play"></i>
                  </span>
                  <div className="home-videos__info">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video player */}
      {open !== null && (
        <div className="home-videos__modal" onClick={close}>
          <button className="home-videos__close" onClick={close} aria-label="Close">
            ×
          </button>
          <div className="home-videos__player" onClick={(e) => e.stopPropagation()}>
            <video src={videos[open].src} controls autoPlay playsInline />
            <p>{videos[open].title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeVideos;
