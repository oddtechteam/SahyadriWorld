import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialHomeFive.css";

// `name` is the bold line, `role` the smaller line under it.
// `initials` are shown in the round avatar.
const testimonials = [
  {
    name: "Parent of Jeet Vinayak Patil",
    role: "Sahyadri Parent",
    initials: "JP",
    text: "Overall, I am happy with the school's teaching, discipline, and learning environment. The teachers are supportive and caring, and my child is making good progress. I appreciate the school's efforts and would encourage continued focus on communication, activities, and the overall development of students.",
  },
  {
    name: "Parent of Aarvi Shivaji Deokar",
    role: "Sahyadri Parent",
    initials: "AD",
    text: "I am very happy with the overall performance of my daughter. The school is doing great. Beyond academics, the school's focus on other activities like stage daring is very good and has encouraged my daughter to be more confident. I hope this will continue. All the best to all the teachers and staff. Thank you.",
  },
  {
    name: "Parent of Ovi Akash Shirke",
    role: "Sahyadri Parent",
    initials: "OS",
    text: "The teachers are very supportive and polite. Teaching methods are easy to understand. The school environment is safe and friendly.",
  },
  {
    name: "Parent of Hitarth Vaibhav Patil",
    role: "Sahyadri Parent",
    initials: "HP",
    text: "Amazing setup and performance by all the kids. Kudos to all the teachers and kids for their efforts and hard work.",
  },
  {
    name: "Parent of Anvit Narkhede",
    role: "Grade II Parent",
    initials: "AN",
    text: "Teachers are very supportive. I am very happy with his academic results. I have seen a very positive change in my son.",
  },
  {
    name: "Parent of Mohammadali Amir Mulani",
    role: "Sahyadri Parent",
    initials: "MM",
    text: "First, thanks to all the staff for supporting my son in every situation. I am very happy with my son's progress. Thank you for your support and guidance.",
  },
  {
    name: "Parent of Ansh S. Shegokar",
    role: "Grade II Parent",
    initials: "AS",
    text: "Immense efforts are seen in the overall environment of the school, which makes my kid feel safe. The school premises are good, and my kid wants to come every day. The results are good and can be seen in his behaviour too.",
  },
  {
    name: "Parent of Pranav Tejas Sathe",
    role: "Sahyadri Parent",
    initials: "PS",
    text: "Thank you to all the teachers, Mavshi and Kaka for handling Pranav so nicely. Sahyadri School is a wonderful place for a child's education. The teachers are kind, helpful and always encourage our child to do his best. A beautiful environment with many activities.",
  },
  {
    name: "Parent of Devansh R. Gajbhare",
    role: "Sahyadri Parent",
    initials: "DG",
    text: "The teachers' efforts are good and focused on the students. Thanks for the support.",
  },
  {
    name: "Nitin Hadke",
    role: "Parent of Devanshi Nitin Hadke",
    initials: "NH",
    text: "The overall infrastructure and curriculum followed by the school are good, and we are happy with the culture they are building. Keep promoting, encouraging and motivating students, as it will give them a good shape in life, work-life balance and society.",
  },
  {
    name: "Revati Rajkumar Kale",
    role: "Sahyadri Parent",
    initials: "RK",
    text: "The atmosphere is good and improvement in learning is visible. The school campus is well planned with good staff, and creative ideas are used to build the students' confidence and knowledge.",
  },
  {
    name: "Hemlata Bhushan Patil",
    role: "Mother of Swaraj & Pratyush Patil",
    initials: "HP",
    text: "Thank you to all the teachers and staff. My kids are enjoying learning with fun and no extra burden of study. Thanks also for encouraging them to take part in every activity and guiding them. They are very enthusiastic about coming to school and eager to learn everything. At affordable fees, they are getting many more opportunities and much more knowledge. We hope this continues. Special thanks to all the teachers.",
  },
  {
    name: "Parents of Darshini & Ashdeep More",
    role: "Sahyadri Parents",
    initials: "DM",
    text: "Thank you very much for the hard work and effort taken towards building the future of our little children. The school is designed according to a child's nature, and all the students feel happy in their classrooms. Special thanks to all the teachers and support staff for being so friendly as well as supportive at every level.",
  },
  {
    name: "Parents of Pragan Patil",
    role: "Sahyadri Parents",
    initials: "PP",
    text: "Thank you very much for the Open Day activity and your hard work for our child. The school culture is very good, and his academics are very good. Thank you to Vikshita Ma'am and Jyoti Ma'am for good teaching and for supporting him in his other activities. Thanks to Pravin Sir and Michael Sir for sports and music, and to Rupali Ma'am for continuous support with the bus facility and more.",
  },
  {
    name: "Parent of Sparsh Santosh Katkhade",
    role: "Sahyadri Parent",
    initials: "SK",
    text: "First, thanks to all the staff for supporting my child in every situation. My son's progress is very good, with improvement in his communication and studies. He is also very active all day because of yoga. I am very impressed with your teaching and all the activities. Choosing Sahyadri School was the best decision for our child. Thank you.",
  },
];

// Quotes longer than this get a "Read more" toggle.
const LONG_QUOTE = 220;

const TestimonialHomeFive = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <section className="testimonial-v2 fix section-padding">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp" style={{ color: "#003366" }}>
              Voices of Trust
            </h6>
            <h3
              className="wow fadeInUp fw-bold"
              data-wow-delay=".3s"
              style={{ color: "#003366" }}
            >
              What Parents Say About Sahyadri World School
            </h3>
            <p className="tv2-subtitle wow fadeInUp" data-wow-delay=".4s">
              Real words from the families who are part of our school.
            </p>
          </div>

          {/* Swiper Testimonials */}
          <Swiper
            spaceBetween={28}
            speed={800}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{ prevEl: ".tv2-prev", nextEl: ".tv2-next" }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".tv2-dots",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              1200: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {testimonials.map((item, index) => {
              const isLong = item.text.length > LONG_QUOTE;
              const isOpen = expanded === index;
              return (
                <SwiperSlide key={item.name}>
                  <div className="tv2-card">
                    <div className="tv2-quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p className={`tv2-text ${isLong && !isOpen ? "clamped" : ""}`}>
                      {item.text}
                    </p>
                    {isLong && (
                      <button
                        className="tv2-more"
                        onClick={() => setExpanded(isOpen ? null : index)}
                      >
                        {isOpen ? "Show less" : "Read more"}
                      </button>
                    )}
                    <div className="tv2-author">
                      <div className="tv2-avatar">{item.initials}</div>
                      <div>
                        <h5 className="tv2-name">{item.name}</h5>
                        <span className="tv2-role">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Controls */}
          <div className="tv2-controls">
            <button className="tv2-arrow tv2-prev" aria-label="Previous testimonial">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="tv2-dots"></div>
            <button className="tv2-arrow tv2-next" aria-label="Next testimonial">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeFive;
