// import Count from "../../common/Count";

// const AboutCounter = () => {
//   return (
//     <>
//     <div className="counter-section-23 section-padding pt-0">
//             <div className="container custom-container">
//                 <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg-3.jpg)`}}>
//                     <div className="counter-items">
//                         <div className="icon">
//                             <i className="flaticon-success"></i>
//                         </div>
//                         <div className="content">
//                             <h2><span className="odometer" data-count="48.5"> <Count number={48} text='.5k' /> </span></h2>
//                             <p>Student Enrolled</p>
//                         </div>
//                     </div>
//                     <div className="counter-items">
//                         <div className="icon">
//                             <i className="flaticon-medal"></i>
//                         </div>
//                         <div className="content">
//                             <h2><span className="odometer" data-count="100"> <Count number={100} text='+' /> </span></h2>
//                             <p>Awards Winning</p>
//                         </div>
//                     </div>
//                     <div className="counter-items">
//                         <div className="icon">
//                             <i className="flaticon-satisfaction"></i>
//                         </div>
//                         <div className="content">
//                             <h2><span className="odometer" data-count="99"><Count number={99} text='%' /></span></h2>
//                             <p>Satisfaction Rate</p>
//                         </div>
//                     </div>
//                     <div className="counter-items">
//                         <div className="icon">
//                             <i className="flaticon-instructor"></i>
//                         </div>
//                         <div className="content">
//                             <h2><span className="odometer" data-count="250"><Count number={250} text='+' /></span></h2>
//                             <p>Instructors</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </>
//   );
// };

// export default AboutCounter;

  // import Count from "../../common/Count";

  // const AboutCounter = () => {
  //   return (
  //     <>
  //       <div className="counter-section-23 section-padding pt-0">
  //         <div className="container custom-container">
  //           <div
  //             className="counter-wrapper-2 bg-cover"
  //             style={{backgroundColor:'var(--theme-blue)'}}
  //             >
  //             {/* Students Enrolled */}
  //             <div className="counter-items">
  //               <div className="icon">
  //                 <i className="flaticon-success"></i>
  //               </div>
  //               <div className="content">
  //                 <h2>
  //                   <span className="odometer" data-count="1200">
  //                     <Count number={10} text="K+" />
  //                   </span>
  //                 </h2>
  //                 {/* <p>Students Enrolled</p>  */}
  //                 <p>Inspiring Minds</p>
  //               </div>
  //             </div>

  //             {/* Qualified Educators */}
  //             <div className="counter-items">
  //               <div className="icon">
  //                 <i className="flaticon-instructor"></i>
  //               </div>
  //               <div className="content">
  //                 <h2>
  //                   <span className="odometer" data-count="80">
  //                     <Count number={100} text="+" />
  //                   </span>
  //                 </h2>
  //                 <p>Qualified Educators</p>
  //               </div>
  //             </div>

  //             {/* Academic Excellence */}
  //             <div className="counter-items">
  //               <div className="icon">
  //                 <i className="flaticon-satisfaction"></i>
  //               </div>
  //               <div className="content">
  //                 <h2>
  //                   <span className="odometer" data-count="99">
  //                     <Count number={99} text="%" />
  //                   </span>
  //                 </h2>
  //                 <p>Excellence Rate</p>
  //               </div>
  //             </div>

  //             {/* Holistic Growth Activities */}
  //             <div className="counter-items">
  //               <div className="icon">
  //                 <i className="flaticon-community"></i>
  //               </div>
  //               <div className="content">
  //                 <h2>
  //                   <span className="odometer" data-count="50">
  //                     <Count number={50} text="+" />
  //                   </span>
  //                 </h2>
  //                 <p>Holistic Growth Programs</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // export default AboutCounter;






    
  import Count from "../../common/Count";

  const AboutCounter = () => {
    return (
      <>
        <div className="counter-section-23 section-padding pt-0">
          <div className="container custom-container">
            <div
              className="counter-wrapper-2 bg-cover"
              style={{backgroundColor:'var(--theme-blue)'}}
            >
              {/* Students Enrolled */}
              <div className="counter-items">
                <div className="icon">
                  <i className="flaticon-success"></i>
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count="1200">
                      <Count number={10} text="K+" />
                    </span>
                  </h2>
                  {/* <p>Students Enrolled</p>  */}
                  <p>Inspiring Minds</p>
                </div>
              </div>

              {/* Qualified Educators */}
              <div className="counter-items">
                <div className="icon">
                  <i className="flaticon-instructor"></i>
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count="80">
                      <Count number={100} text="+" />
                    </span>
                  </h2>
                  <p>Qualified Educators</p>
                </div>
              </div>

              {/* Academic Excellence */}
              <div className="counter-items">
                <div className="icon">
                  <i className="flaticon-satisfaction"></i>
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count="99">
                      <Count number={100} text="%" />
                    </span>
                  </h2>
                  <p>Excellence Rate</p>
                </div>
              </div>

              {/* Holistic Growth Activities */}
              <div className="counter-items">
                <div className="icon">
                  <i className="flaticon-community"></i>
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count="50">
                      <Count number={50} text="+" />
                    </span>
                  </h2>
                  <p>Holistic Growth Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style  >{`
          @media (max-width: 768px) {
            .counter-wrapper-2 {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: auto auto !important;
              gap: 60px !important;
            }
            
            .counter-items {
              width: 100% !important;
              margin-bottom: 0 !important;
              text-align: center !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .counter-items .icon {
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              margin-bottom: 5px !important;
            }

          
            
            .counter-items .content {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
            }
          }
        `}</style>
      </>
    );
  };

  export default AboutCounter;