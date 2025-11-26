import MarqueeOne from "../../../common/MarqueeOne";
// import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import FooterTwo from "../../../layouts/footers/FooterTwo";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import HeroHomeTwo from "../home-2/HeroHomeTwo";
import TopCategoryHomeTwo from "../home-2/TopCategoryHomeTwo";
import AboutHomeThree from "../home-3/AboutHomeThree";
import FaqHomeThree from "../home-3/FaqHomeThree";
import FunfactHomeFour from "../home-4/FunfactHomeFour";
import TestimonialHomeFive from "../home-5/TestimonialHomeFive";
import ChooseHomeOne from "./ChooseHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import HomeComp6 from "./HomeComp6";
// import Boarding from "./Boarding";
import BoardingAbout from "../../about/BoardingAbout";
// import Preloader from "../../../common/Preloader";
// import TopCategoryHomeOne from "./TopCategoryHomeOne";

const HomeOne = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeaderOne />

      <HeroHomeTwo />
      <AboutHomeThree />

      <FunfactHomeFour />

     
      {/* <TopCategoryHomeOne /> */}
            <ChooseHomeOne />

      <MarqueeOne />

       <TopCategoryHomeTwo />

      <TeamHomeOne />
      <BoardingAbout />
      {/* <Boarding/> */}
      <TestimonialHomeFive />
      <HomeComp6 />
      <FaqHomeThree />

      <MarqueeOne />
      <FooterTwo />
      <ScrollTop />
    </>
  );
};

export default HomeOne;
