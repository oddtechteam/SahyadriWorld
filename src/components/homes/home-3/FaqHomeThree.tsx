const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding mt-5 pt-0">
        <div className="container">
          <div className="faq-wrapper style-2">
            <div className="row g-4 align-items-center">
              {/* FAQ Content */}
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title color-blue">
                    <h3 className="wow fadeInUp">Asked Questions</h3>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Frequently Asked <br /> Questions
                    </h2>
                  </div>

                  <div className="faq-items mt-4 mt-md-0 mb-0">
                    <div className="accordion" id="accordionExample">

                      {/* Question 1 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What curriculum does Sahyadri World School follow?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Sahyadri World School follows a comprehensive CBSE curriculum,
                              designed to promote conceptual learning, creativity, and critical
                              thinking. We integrate academics with life skills, values, and
                              co-curricular programs for holistic development.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Question 2 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I apply for my child’s admission?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              You can apply online through our Admissions page or visit the
                              school campus. Fill out the registration form, submit required
                              documents, and our admissions team will guide you through the
                              process, including interaction and assessment (if applicable).
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Question 3 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What facilities does the school provide?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The school offers smart classrooms, science and computer labs,
                              a library, sports grounds, art and music rooms, transport
                              services, and a safe, eco-friendly campus designed for
                              interactive and joyful learning.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Question 4 */}
                      <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Does the school focus on extracurricular activities?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes. Sahyadri World School emphasizes a balance between
                              academics and extracurriculars. Students can participate in
                              sports, arts, music, robotics, and leadership programs, which
                              build confidence, teamwork, and creativity.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Image */}
<div className="col-lg-6">
  <div
    className="faq-image-2"
    style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    {/* Main Image */}
    {/* <img
      src="assets/img/sah/1_11zon_11zon.webp"
      alt="FAQ Illustration"
      className="wow img-custom-anim-left"
      style={{
        borderRadius: "30px",
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        objectFit: "cover",

      }}
    /> */}
    <img
  src="assets/img/sah/1_11zon_11zon.webp"
  alt="FAQ Illustration"
  className="wow img-custom-anim-left"
  style={{
    borderRadius: "30px",
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "cover",
  // 🔹 Moves image slightly upward
  }}
/>


    {/* Secondary Image */}
    <div
      className="quote-shape float-bob-x hide-on-mobile"
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        src="/assets/img/imgnew/IMG_6931_11zon11_11zon.webp"
        alt="Quote Shape"
        className="wow img-custom-anim-left"
        style={{
          borderRadius: "30px",
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          objectFit: "cover",
             marginBottom: "-50px",
        }}
      />
    </div>

    {/* CSS for hiding on mobile */}
    <style>
      {`
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}
    </style>
  </div>
</div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHomeThree;
