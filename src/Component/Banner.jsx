import googleImage from "../assets/google-store.png";
import appImage from "../assets/app-store.png";
import Content from "./Content";

const Banner = () => {
  return (
    <>
      <Content>
        <div className="text-center pt-10 md:pt-16 lg:pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#001931] mb-2">
            We Build
          </h1>
          <h2>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              Productive
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#001931]">
             
              Apps
            </span>
          </h2>
          <div className="text-[#627382] mt-3">
            <p>
              At,HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          {/* button */}
          <div className="flex justify-center gap-5 pt-5 md:pt-8 lg:pt-10">
            <button className="flex items-center gap-3 border border-gray-300 shadow-sm px-5 py-3 rounded-md text-[#001931] font-semibold">
              <img src={googleImage} alt="google store image" />
              <span>Google Play</span>
            </button>
            <button className="flex items-center gap-3 border border-gray-300 shadow-sm  px-5 py-3 rounded-md text-[#001931] font-semibold">
              <img src={appImage} alt="google store image" />
              <span>App Store</span>
            </button>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Banner;
