 
// const FeatureArea = () => {
//   return (
//     <>
//      <div className="feature-section-3 section-padding">
//             <div className="container">
//                 <div className="feature-wrapper-3 style-2">
//                     <div className="row">
//                         <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
//                             <div className="feature-card-items">
//                                 <div className="icon">
//                                     <i className="flaticon-graduation"></i>
//                                 </div>
//                                 <div className="content">
//                                     <h5>Scholarship Facility</h5>
//                                     <p>
//                                         Scholarship facility provides
//                                         financial assistance
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
//                             <div className="feature-card-items">
//                                 <div className="icon">
//                                     <i className="flaticon-instructor"></i>
//                                 </div>
//                                 <div className="content">
//                                     <h5>Expert Instructors</h5>
//                                     <p>
//                                         Scholarship facility provides
//                                         financial assistance
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
//                             <div className="feature-card-items">
//                                 <div className="icon">
//                                     <i className="flaticon-certficate"></i>
//                                 </div>
//                                 <div className="content">
//                                     <h5>Certificate Program</h5>
//                                     <p>
//                                         Scholarship facility provides
//                                         financial assistance
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
//                             <div className="feature-card-items">
//                                 <div className="icon">
//                                     <i className="flaticon-school"></i>
//                                 </div>
//                                 <div className="content">
//                                     <h5>Graduate Admissions</h5>
//                                     <p>
//                                         Scholarship facility provides
//                                         financial assistance
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     </>
//   );
// };

// export default FeatureArea;

const FeatureArea = () => {
  return (
    <>
      <div className="feature-section-3 section-padding">
        <div className="container">
          <div className="feature-wrapper-3 style-2">
            <div className="row">
              
              {/* Smart Learning Environment */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-online-education"></i>
                  </div>
                  <div className="content">
                    <h5>Smart Learning Environment</h5>
                    <p>
                      Interactive smart classrooms and digital tools enhance
                      each child’s learning experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert & Caring Faculty */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-instructor"></i>
                  </div>
                  <div className="content">
                    <h5>Expert & Caring Faculty</h5>
                    <p>
                      Our qualified educators focus on academic excellence and
                      emotional well-being.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovative Curriculum */}

              
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="feature-card-items">
                  <div className="icon">
                     <i className="flaticon-certficate"></i>
                  </div>
                  <div className="content">
                    <h5>Innovative Curriculum</h5>
                    <p>
                      A blend of academics, technology, and values including AI,
                      Robotics, and Financial Literacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Holistic Development */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-community"></i>
                  </div>
                  <div className="content">
                    <h5>Holistic Development</h5>
                    <p>
                      Balanced growth through sports, arts, yoga, and
                      co-curricular programs for overall excellence.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
