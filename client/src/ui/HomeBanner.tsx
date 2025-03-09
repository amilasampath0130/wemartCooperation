import { homeBanner } from "../assets";
import Container from "./Container";
import LinkButton from "./LinkButton";

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      <div className=" inset-0 flex flex-col justify-center items-center px-100 absolute">
        <h2 className="text-xl md:text-4xl lg:text-6xl text-yellow-50 font-bold">
          WE-MART COOPERATION
        </h2>
        <h3 className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
          Beyond the Imagination
        </h3>
        <LinkButton className="w-44 flex items-center justify-center font-bold bg-white text-black hover:bg-darkText/90 hover:text-whiteText duration-200 mt-4" />
      </div>
      </div>
    </Container>
  );
};

export default HomeBanner;
