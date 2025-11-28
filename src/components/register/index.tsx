// import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import MarqueeOne from "../../common/MarqueeOne";
// import MarqueeThree from "../../common/MarqueeThree";
// import Preloader from "../../common/Preloader";
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import AdmissionProcessSection from "../admission/AdmissionProcessSection";
import TopCategoryHomeTwo from "../homes/home-2/TopCategoryHomeTwo";
import RegisterForm from "./RegisterForm";

// import GalleryArea from "./GalleryArea";

const register = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="register" subtitle="Register" />
      <RegisterForm	/>
      <AdmissionProcessSection />
      {/* <AdmissionApplicationSection /> */}
      {/* <MarqueeOne /> */}
	  

      <TopCategoryHomeTwo />

      {/* <GalleryArea /> */}
      <FooterTwo />
      <ScrollTop />
    </>
  );
};

export default register;
