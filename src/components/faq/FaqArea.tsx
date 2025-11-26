const FaqArea = () => {
  return (
    <>
      <section className="faq-section section-padding pt-0 fix">
        <div className="faq-wrapper style-5">
          <div className="container">
            <div className="section-title text-center mb-5">
              <h6 style={{ color: "#0066cc" }}>Questions & Answers</h6>
              <h2 style={{ color: "#0b2b5c", fontWeight: 700 }}>
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  color: "#004080",
                  maxWidth: "700px",
                  margin: "10px auto 0",
                }}
              >
                Here are some of the most common questions we receive from
                parents and guardians about Sahyadri World School admissions,
                programs, and facilities.
              </p>
            </div>

            <div className="row g-4">
              {/* LEFT COLUMN */}
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionLeft">
                    {/* 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a1"
                          aria-expanded="true"
                          aria-controls="a1"
                        >
                          What curriculum does Sahyadri World School follow?
                        </button>
                      </h2>
                      <div
                        id="a1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="q1"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            We follow the CBSE curriculum, designed to foster
                            conceptual understanding, creativity, and holistic
                            development. Our teaching integrates modern learning
                            methodologies with traditional values.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a2"
                          aria-expanded="false"
                          aria-controls="a2"
                        >
                          Do you provide day boarding facilities?
                        </button>
                      </h2>
                      <div
                        id="a2"
                        className="accordion-collapse collapse"
                        aria-labelledby="q2"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes! Sahyadri World School offers a structured Day
                            Boarding Program from 8 AM to 6 PM. Students enjoy
                            nutritious meals, academic support, co-curricular
                            activities, and sports under supervision.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a3"
                          aria-expanded="false"
                          aria-controls="a3"
                        >
                          How can I apply for admission?
                        </button>
                      </h2>
                      <div
                        id="a3"
                        className="accordion-collapse collapse"
                        aria-labelledby="q3"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            You can fill out our online admission form available
                            on the website under the “Admissions” section or
                            visit the school’s administrative office. Our
                            admission team will assist you through every step of
                            the process.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 4 */}
                    <div className="accordion-item mb-0">
                      <h2 className="accordion-header" id="q4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a4"
                          aria-expanded="false"
                          aria-controls="a4"
                        >
                          What grades are currently offered?
                        </button>
                      </h2>
                      <div
                        id="a4"
                        className="accordion-collapse collapse"
                        aria-labelledby="q4"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            We currently offer classes from Nursery to Grade X,
                            with plans to expand to higher grades in upcoming
                            academic years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionRight">
                    {/* 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a5"
                          aria-expanded="false"
                          aria-controls="a5"
                        >
                          What co-curricular activities are available?
                        </button>
                      </h2>
                      <div
                        id="a5"
                        className="accordion-collapse collapse"
                        aria-labelledby="q5"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            We offer a wide range of co-curricular programs like
                            music, dance, theatre, art, robotics, coding, yoga,
                            and sports to promote creativity, teamwork, and
                            leadership.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 6 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a6"
                          aria-expanded="false"
                          aria-controls="a6"
                        >
                          What safety measures are in place for students?
                        </button>
                      </h2>
                      <div
                        id="a6"
                        className="accordion-collapse collapse"
                        aria-labelledby="q6"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            The safety of our students is our top priority. Our
                            campus is equipped with 24/7 CCTV surveillance,
                            trained security staff, first-aid facilities, and
                            child-friendly infrastructure.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 7 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="q7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a7"
                          aria-expanded="false"
                          aria-controls="a7"
                        >
                          What are the school timings?
                        </button>
                      </h2>
                      <div
                        id="a7"
                        className="accordion-collapse collapse"
                        aria-labelledby="q7"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            The regular school timings are from 8:00 AM to 2:30
                            PM. Day boarding students stay till 6:00 PM with
                            supervised study sessions and activities.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 8 */}
                    <div className="accordion-item mb-0">
                      <h2 className="accordion-header" id="q8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#a8"
                          aria-expanded="false"
                          aria-controls="a8"
                        >
                          How can parents stay updated on their child’s progress?
                        </button>
                      </h2>
                      <div
                        id="a8"
                        className="accordion-collapse collapse"
                        aria-labelledby="q8"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Parents can access our digital portal for regular
                            updates, progress reports, event notifications, and
                            teacher communication. We also conduct PTMs and
                            parent workshops frequently.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
