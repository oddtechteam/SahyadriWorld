// import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import BreadcrumbShop from "../../common/breadcrumb/BreadcrumbShop";
import MarqueeFour from "../../common/MarqueeFour";
// import MarqueeOne from "../../common/MarqueeOne";
// // import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import TopCategoryHomeTwo from "../homes/home-2/TopCategoryHomeTwo";
// import AboutHomeThree from "../homes/home-3/AboutHomeThree";
import AboutHomeFive from "../homes/home-5/AboutHomeFive";
// import TeamHomeFive from "../homes/home-5/TeamHomeFive";
import TestimonialHomeFive from "../homes/home-5/TestimonialHomeFive";
// import AboutHomeOne from "../homes/home/AboutHomeOne";
// import BrandsHomeOne from "../homes/home/BrandsHomeOne";
// import NewsletterHomeOne from "../homes/home/NewsletterHomeOne";
// import TestimonialHomeOne from "../homes/home/TestimonialHomeOne";
// import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import FeatureArea from "./FeatureArea";
import HomeComp6 from "../homes/home/HomeComp6";
import Blogs from "./Blogs";
import BoardingAbout from "./BoardingAbout"

const About = () => {
  return (
    <>
{/* <Preloader /> */}
      <HeaderOne />
      {/* <BreadcrumbCourses title="About Us" subtitle="About Us" /> */}
      <BreadcrumbEvent title="About" subtitle="About" />
      {/* <AboutArea /> */}
      <AboutHomeFive />
      <FeatureArea />
      
      {/* <TeamHomeFive style_2={true} /> */}
      <AboutCounter />
       <BoardingAbout/>
      <TopCategoryHomeTwo />
      <HomeComp6 /> 
      <Blogs /> 
     

      {/* <TestimonialHomeOne /> */}
      <TestimonialHomeFive />
      {/* <BrandsHomeOne /> */}
      {/* <NewsletterHomeOne /> */}
      <MarqueeFour />
      {/* <MarqueeOne style_2={true} /> */}
      <FooterTwo />
      <ScrollTop />
    </>
  );
};

export default About;
