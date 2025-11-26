import { Link } from "react-router-dom";

const GalleryArea = () => {
  return (
    <>
      <section className="gallery-section section-padding pt-0 fix">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <h6>Photo Gallery</h6>
            <h2>Life at Sahyadri World School</h2>
          </div>

          {/* Tabs */}
          <ul className="nav justify-content-center mb-4">
            <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
              <a href="#All" data-bs-toggle="tab" className="nav-link active">
                All
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
              <a href="#Events" data-bs-toggle="tab" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
              <a href="#Activities" data-bs-toggle="tab" className="nav-link">
                Activities
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
              <a href="#Academics" data-bs-toggle="tab" className="nav-link">
                Academics
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay="1s">
              <a href="#Campus" data-bs-toggle="tab" className="nav-link">
                Campus Life
              </a>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {/* All Tab */}
            <div id="All" className="tab-pane fade show active">
              <div className="row g-4">
                {[
              
                  {
                    img: "/assets/img/sah/sci_11zon_11zon.webp",
                    title: "Science & Robotics Exhibition",
                    cat: "Academics",
                  },





                  {
                    img: "/assets/img/sah/Gymn_11zon.webp",
                    title: "Gymnastics & Physical Training",
                    cat: "Activities",
                  },
                   
                  
                  // {
                  //   img: "/assets/img/sah/arch_11zon_11zon.webp",
                  //   title: "Architecture Learning Zone",
                  //   cat: "Academics",
                  // },





                  {
                    img: "/assets/img/sah/extra_11zon (1)_11zon.webp",
                    title: "Extracurricular Workshops",
                    cat: "Activities",
                  },
              
                  {
                    img: "/assets/img/imgnew/A2_11zon_11zon (2).webp",
                    title: "Performing Arts & Music Studio",
                    cat: "Events",
                  },
                    {
                    img: "/assets/img/imgnew/IMG_6908_11zon_11zon.webp", 
                    title: "Be proud of your effort",
                    cat: "Campus Life",
                  },
                  





                     {
                    img: "/assets/img/sah/DSC08771_11zon_11zon.webp",
                    title: "Hard Work Earns Great Success",
                    cat: "Academics",
                  },   
                  {
                    img: "/assets/img/sah/DSC08747_11zon (1)_11zon.webp", 
                    title: "Success Is The Result Of Effort",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC08774_11zon_11zon.webp", 
                    title: "Our Champions Define School Success",
                    cat: "Academics",
                  },










                  
                   {
                    img: "/assets/img/sah/DSC09278_11zon_11zon.webp", 
                    title: "Hands-On Science Builds Success Now",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC09108_11zon_11zon.webp", 
                    title: "Focused Aim Hits Every Goal",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC09272_11zon_11zon.webp", 
                    title: "Practical Skills Build Bright Futures",
                    cat: "Academics",
                  },











                   {
                    img: "/assets/img/sah/DSC08830_11zon.webp", 
                    title: "Hands-On Experiments Build Future Experts",
                    cat: "Campus Life",
                  },

                     {
                    img: "/assets/img/sah/DSC08807_11zon_11zon.webp", 
                    title: "Scientific Focus Brings Great Results",
                    cat: "Campus Life",
                  },

             








                   {
                    img: "/assets/img/sah/DSC09315_11zon_11zon.webp", 
                    title: "Teamwork Tastes Like Great Success",
                    cat: "Activities",
                  },
                  
                      {
                    img: "/assets/img/sah/DSC09319_11zon_11zon.webp", 
                    title: "Health Education Empowers Every Student",
                    cat: "Activities",
                  },








                
                      {
                    img: "/assets/img/sah/DSC09171_11zon_11zon.webp", 
                    title: "Little Steps Lead To Big Goals",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC09168_11zon.webp", 
                    title: "Balance, Joy, And Daily Fitness",
                    cat: "Campus Life",
                  },
                  








                       {
                    img: "/assets/img/sah/DSC09118_11zon_11zon.webp", 
                    title: "Never Give Up The Fight.",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC08981_11zon_11zon.webp", 
                    title: "Practice Builds School Sporting Legends",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC09097_11zon_11zon.webp", 
                    title: "Jump Higher, Reach New Heights",
                    cat: "Campus Life",
                  },





                  
                       {
                    img: "/assets/img/sah/DSC08695_11zon_11zon.webp", 
                    title: "Morning Assembly Inspires Greatness Now.",
                    cat: "Campus Life",
                  },
                     
                 
                  


                  // newimg 1
                  
                        {
                    img: "/assets/img/imgnew/IMG_6934_11zon_11zon.webp", 
                    title: "Teamwork lifts everyone higher",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6933_11zon_11zon.webp", 
                    title: "Industrial visits to enhance learning experiences",
                    cat: "Industrial Visits",
                  },
                 
                        {
                    img: "/assets/img/imgnew/IMG_6931_11zon_11zon.webp", 
                    title: "Creative effort makes learning memorable",
                    cat: "Academics",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6930_11zon_11zon.webp", 
                    title: "Creative hands build beautiful things",
                    cat: "Activities",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6929_11zon_11zon.webp", 
                    title: "School projects build strong minds",
                    cat: "Activities",
                  },
                  
                 
                 
                      {
                    img: "/assets/img/imgnew/IMG_6927_11zon_11zon.webp", 
                    title: "Training creates great responsibility.",
                    cat: "Academics",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6926_11zon_11zon.webp", 
                    title: "Focus aims for future success",
                    cat: "Academics",
                  },
                  
                    {
                    img: "/assets/img/imgnew/IMG_6925_11zon_11zon.webp", 
                    title: "Skills learned bring great joy",
                    cat: "Activities",
                  },
                  





                     {
                    img: "/assets/img/imgnew/IMG_6924_11zon_11zon.webp", 
                    title: "Experiment to discover great wisdom",
                    cat: "Academics",
                  },
                  


                     {
                    img: "/assets/img/imgnew/IMG_6922_11zon_11zon.webp", 
                    title: "Hands-on learning is truly fun",
                    cat: "Activities",
                  },
                  


                     

                  //    {
                  //   img: "/assets/img/imgnew/IMG_6907_11zon_11zon.webp", 
                  //   title: "Learning history builds strong futures",
                  //   cat: "Campus Life",
                  // },
                  




// INE IMG 2









    
                  

                     {
                    img: "/assets/img/imgnew/IMG_6916_11zon_11zon.webp", 
                    title: "Friendship and knowledge grow always",
                    cat: "Campus Life",
                  },

                  
                  
    {
                    img: "/assets/img/imgnew/IMG_6914_11zon_11zon.webp", 
                    title: "Community learning is very important",
                    cat: "Activities",
                  }, 
                  

                  // INE IMG 3

                     {
                    img: "/assets/img/imgnew/IMG_6915_11zon_11zon.webp", 
                    title: "Community supports student achievement always",
                    cat: "Campus Life",
                  },
                  
                


                  


                     {
                    img: "/assets/img/imgnew/IMG_6899_11zon_11zon.webp", 
                    title: "Sports teach teamwork and discipline",
                    cat: "Campus Life",
                  },
                  

                       {
                    img: "/assets/img/imgnew/IMG_6900_11zon_11zon.webp", 
                    title: "Team spirit inspires achievement always",
                    cat: "Campus Life",
                  },
                  


                  // INE IMG  4



                       {
                    img: "/assets/img/imgnew/IMG_6904_11zon_11zon (1).webp", 
                    title: "Small hands save the world",
                    cat: "Activities",
                  },
                  


                     {
                    img: "/assets/img/imgnew/IMG_6905_11zon_11zon.webp", 
                    title: "Knowledge inspires positive change always",
                    cat: "Activities",
                  }, {
                    img: "/assets/img/imgnew/IMG_6909_11zon_11zon.webp", 
                    title: "Express yourself with bold artistry",
                    cat: "Events",
                  },
                  

                        {
                    img: "/assets/img/imgnew/IMG_6910_11zon_11zon.webp", 
                    title: "Embrace your role with passion",
                    cat: "Events",
                  },
                  

                        {
                    img: "/assets/img/imgnew/IMG_6913_11zon_11zon.webp", 
                    title: "Practice achieves perfect synchronization always",
                    cat: "Academics",
                  },
                  
                      



                ].map((item, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                    <div className="portfolio-item">
                      <div className="portfoio-thumb">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                        />
                        
                        <div className="portfolio-text">
                          <h3>{item.title}</h3>
                          <p>{item.cat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Tab */}
            <div id="Events" className="tab-pane fade">
              <div className="row g-4">
                {[

                  
                 {
                    img: "/assets/img/imgnew/A2_11zon_11zon (2).webp",
                    title: "Performing Arts & Music Studio",
                    cat: "Events",
                  },
                  

                  {
                    img: "/assets/img/sah/extra_11zon (1)_11zon.webp",
                    title: "Cultural Performances",
                    cat: "Events",
                  },
                  

                     {
                    img: "/assets/img/imgnew/IMG_6909_11zon_11zon.webp", 
                    title: "Express yourself with bold artistry",
                    cat: "Events",
                  },
                  

                        {
                    img: "/assets/img/imgnew/IMG_6910_11zon_11zon.webp", 
                    title: "Embrace your role with passion",
                    cat: "Events",
                  },
                ].map((item, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                    <div className="portfolio-item">
                      <div className="portfoio-thumb">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ borderRadius: "10px", width: "100%" }}
                        />
                        <div className="portfolio-arrow">
                          <Link to="/gallery">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="portfolio-text">
                          <h3>{item.title}</h3>
                          <p>{item.cat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Tab */}
            <div id="Activities" className="tab-pane fade">
              <div className="row g-4">
                {[
                  {
                    img: "/assets/img/sah/Gymn_11zon.webp",
                    title: "Gymnastics Practice",
                    cat: "Activities",
                  },
                  {
                    img: "/assets/img/sah/extra_11zon (1)_11zon.webp",
                    title: "Art & Craft Workshops",
                    cat: "Activities",
                  },
                         {
                    img: "/assets/img/sah/DSC09315_11zon_11zon.webp", 
                    title: "Teamwork Tastes Like Great Success",
                    cat: "Activities",
                  },
                    
                      {
                    img: "/assets/img/sah/DSC09319_11zon_11zon.webp", 
                    title: "Health Education Empowers Every Student",
                    cat: "Activities",
                  },


              {
                    img: "/assets/img/imgnew/IMG_6908_11zon_11zon.webp", 
                    title: "Be proud of your effort",
                    cat: "Campus Life",
                  },
   {
                    img: "/assets/img/imgnew/IMG_6930_11zon_11zon.webp", 
                    title: "Creative hands build beautiful things",
                    cat: "Activities",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6929_11zon_11zon.webp", 
                    title: "School projects build strong minds",
                    cat: "Activities",
                  },
                  
                    {
                    img: "/assets/img/imgnew/IMG_6925_11zon_11zon.webp", 
                    title: "Skills learned bring great joy",
                    cat: "Activities",
                  },
                  


            
                   

                ].map((item, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                    <div className="portfolio-item">
                      <div className="portfoio-thumb">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ borderRadius: "10px", width: "100%" }}
                        />
                        <div className="portfolio-arrow">
                          <Link to="/gallery">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="portfolio-text">
                          <h3>{item.title}</h3>
                          <p>{item.cat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academics Tab */}
            <div id="Academics" className="tab-pane fade">
              <div className="row g-4">
                {[ {
                    img: "/assets/img/sah/sci_11zon_11zon.webp",
                    title: "Science & Robotics Exhibition",
                    cat: "Academics",
                  },
                    {
                    img: "/assets/img/sah/arch_11zon_11zon.webp",
                    title: "Archery Learning Zone",
                    cat: "Sports",
                  },

   {
                    img: "/assets/img/imgnew/IMG_6931_11zon_11zon.webp", 
                    title: "Creative effort makes learning memorable",
                    cat: "Academics",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6927_11zon_11zon.webp", 
                    title: "Training creates great responsibility.",
                    cat: "Academics",
                  },
                      {
                    img: "/assets/img/imgnew/IMG_6926_11zon_11zon.webp", 
                    title: "Focus aims for future success",
                    cat: "Academics",
                  },

                     {
                    img: "/assets/img/imgnew/IMG_6924_11zon_11zon.webp", 
                    title: "Experiment to discover great wisdom",
                    cat: "Academics",
                  },
                  




                     {
                    img: "/assets/img/sah/DSC08771_11zon_11zon.webp",
                    title: "Hard Work Earns Great Success",
                    cat: "Academics",
                  },   
                  {
                    img: "/assets/img/sah/DSC08747_11zon (1)_11zon.webp", 
                    title: "Success Is The Result Of Effort",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC08774_11zon_11zon.webp", 
                    title: "Our Champions Define School Success",
                    cat: "Academics",
                  },










                  
                   {
                    img: "/assets/img/sah/DSC09278_11zon_11zon.webp", 
                    title: "Hands-On Science Builds Success Now",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC09108_11zon_11zon.webp", 
                    title: "Focused Aim Hits Every Goal",
                    cat: "Academics",
                  },
                   {
                    img: "/assets/img/sah/DSC09272_11zon_11zon.webp", 
                    title: "Practical Skills Build Bright Futures",
                    cat: "Academics",
                  }, {
                    img: "/assets/img/imgnew/IMG_6913_11zon_11zon.webp", 
                    title: "Practice achieves perfect synchronization always",
                    cat: "Academics",
                  },
                ].map((item, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                    <div className="portfolio-item">
                      <div className="portfoio-thumb">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ borderRadius: "10px", width: "100%" }}
                        />
                        <div className="portfolio-arrow">
                          <Link to="/gallery">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="portfolio-text">
                          <h3>{item.title}</h3>
                          <p>{item.cat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Life Tab */}
            <div id="Campus" className="tab-pane fade">
              <div className="row g-4">
                {[ {
                    img: "/assets/img/sah/DSC08830_11zon.webp", 
                    title: "Hands-On Experiments Build Future Experts",
                    cat: "Campus Life",
                  }, {
                    img: "/assets/img/sah/DSC08807_11zon_11zon.webp", 
                    title: "Scientific Focus Brings Great Results",
                    cat: "Campus Life",
                  }, {
                    img: "/assets/img/sah/DSC08811_11zon_11zon.webp", 
                    title: "Practical Learning Fuels Scientific Inquiry",
                    cat: "Campus Life",
                  },{
                    img: "/assets/img/sah/DSC09171_11zon_11zon.webp", 
                    title: "Little Steps Lead To Big Goals",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC09168_11zon.webp", 
                    title: "Balance, Joy, And Daily Fitness",
                    cat: "Campus Life",
                  },{
                    img: "/assets/img/sah/DSC09118_11zon_11zon.webp", 
                    title: "Never Give Up The Fight.",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC08981_11zon_11zon.webp", 
                    title: "Practice Builds School Sporting Legends",
                    cat: "Campus Life",
                  },
                      {
                    img: "/assets/img/sah/DSC09097_11zon_11zon.webp", 
                    title: "Jump Higher, Reach New Heights",
                    cat: "Campus Life",
                  },{
                    img: "/assets/img/sah/DSC08695_11zon_11zon.webp", 
                    title: "Morning Assembly Inspires Greatness Now.",
                    cat: "Campus Life",
                  }, {
                    img: "/assets/img/imgnew/IMG_6934_11zon_11zon.webp", 
                    title: "Teamwork lifts everyone higher",
                    cat: "Campus Life",
                  },
                 {
                    img: "/assets/img/imgnew/IMG_6933_11zon_11zon.webp", 
                    title: "School visit to See the Amazing Cars",
                    cat: "Campus Life",
                  },
                  //  {
                  //   img: "/assets/img/imgnew/IMG_6908_11zon_11zon.webp", 
                  //   title: "Be proud of your effort",
                  //   cat: "Campus Life",
                  // }, 
                  {
                    img: "/assets/img/imgnew/IMG_6915_11zon_11zon.webp", 
                    title: "Community supports student achievement always",
                    cat: "Campus Life",
                  }, {
                    img: "/assets/img/imgnew/IMG_6899_11zon_11zon.webp", 
                    title: "Sports teach teamwork and discipline",
                    cat: "Campus Life",
                  },{
                    img: "/assets/img/imgnew/IMG_6900_11zon_11zon.webp", 
                    title: "Team spirit inspires achievement always",
                    cat: "Campus Life",
                  },].map((item, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                    <div className="portfolio-item">
                      <div className="portfoio-thumb">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ borderRadius: "10px", width: "100%" }}
                        />
                        <div className="portfolio-arrow">
                          <Link to="/gallery">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="portfolio-text">
                          <h3>{item.title}</h3>
                          <p>{item.cat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryArea;
