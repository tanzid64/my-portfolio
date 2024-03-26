import BannerFullScreen from "./BannerFullScreen";
import IntroTypeAnimation from "./IntroTypeAnimation";
import background from "/images/banner.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Intro = () => {
  return (
    <div
      className="relative hover:border-[3px] border-gray-600
            rounded-lg  transition-all duration-300
            ease-in-out cursor-pointer  
           "
    >
      <img
        src={background}
        alt=""
        className="h-auto min-w-full opacity-85 dark:opacity-100 "
        onClick={()=><BannerFullScreen/>}
      />
      <div className="absolute inset-0 flex ml-5 lg:ml-48 md:ml-32 items-center">
        <div className="text-center ">
          <h1 className="text-gray-100 text-xs md:text-2xl lg:text-5xl">
            Discover my spaces...
          </h1>
          <div className="flex flex-col md:flex-row items-center md:mt-5 text-xs md:text-medium lg:text-xl justify-center">
            <p className="text-yellow-200 flex items-center">
              <FaAngleLeft />
              code
              <FaAngleRight />
            </p>
            <IntroTypeAnimation />
            <p className="text-yellow-200 flex items-center">
              <FaAngleLeft />
              <span className="text-red-500">/</span>code
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
