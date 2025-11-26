import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
// import MarqueeThree from "../../common/MarqueeThree";
// import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
import FooterTwo from "../../layouts/footers/FooterTwo";
import HeaderOne from "../../layouts/headers/HeaderOne";
import GalleryArea from "./GalleryArea";

 

const Gallery = () => {
	return (
		<>
		{/* <Preloader /> */}
			<HeaderOne />
			<BreadcrumbEvent title="Gallery" subtitle="Gallery" />
			<GalleryArea />
			<MarqueeOne />
			<FooterTwo />
			<ScrollTop />
		</>
	);
};

export default Gallery;
