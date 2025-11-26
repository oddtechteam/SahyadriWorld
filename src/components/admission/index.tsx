import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
// import MarqueeThree from "../../common/MarqueeThree";
// import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
// import TopCategoryHomeTwo from "../homes/home-2/TopCategoryHomeTwo";
import AdmissionApplicationSection from "./AdmissionApplicationSection";
import AdmissionProcessSection from "./AdmissionProcessSection";
import RegisterForm from "../register/RegisterForm";
// import GalleryArea from "./GalleryArea";

const Admission = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeaderOne />
     
      <BreadcrumbEvent title="Admission" subtitle="Admission" />
        <RegisterForm />
      <AdmissionProcessSection />
       
      <AdmissionApplicationSection />
      <MarqueeOne />    

      {/* <TopCategoryHomeTwo /> */}

      {/* <GalleryArea /> */}
      <FooterTwo />
      <ScrollTop />
    </>
  );
};

export default Admission;
