import { videos } from "./videos";

const VideoGallery = () => {
  return (
    <section className="video-gallery-section fix section-padding pt-0">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h6 className="wow fadeInUp" style={{ color: "#003366" }}>
            Video Gallery
          </h6>
          <h3
            className="wow fadeInUp fw-bold"
            data-wow-delay=".3s"
            style={{ color: "#003366" }}
          >
            Watch Our Students in Action
          </h3>
        </div>

        <div className="row g-4 justify-content-center">
          {videos.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #e0e9ff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* #t=0.5 shows a frame as the thumbnail; preload="metadata" avoids downloading the whole file */}
                <video
                  src={`${item.src}#t=0.5`}
                  controls
                  preload="metadata"
                  playsInline
                  style={{
                    width: "100%",
                    height: "480px",
                    objectFit: "contain",
                    display: "block",
                    background: "#000",
                  }}
                />
                <div style={{ padding: "22px 25px" }}>
                  <h4
                    style={{
                      color: "#0057b8",
                      fontWeight: "700",
                      fontSize: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      marginBottom: 0,
                    }}
                  >
                    {item.text}
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

export default VideoGallery;
