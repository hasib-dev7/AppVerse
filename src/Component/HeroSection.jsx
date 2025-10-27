import heroImage from "../assets/hero.png";

const HeroSection = () => {
  return (
    <>
      <div>
        {/* hero image */}
        <div className="md:w-11/12  lg:10/12 mx-auto px-4 md:px-3 lg:px-12  bg-[#F5F5F5] ">
          <figure className="flex justify-center pt-10 bg-[#F5F5F5] ">
            <img src={heroImage} alt="mobile app hero image" />
          </figure>
        </div>
        {/* hero content section */}
        <div className="p-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] md:w-11/12  lg:10/12 mx-auto">
          <div className="md:w-11/12  lg:/12 mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white text-center">
              Trusted by Millions, Built for You
            </h1>
            {/* card section */}
            <div className="flex justify-between flex-wrap text-center gap-3 lg:gap-0 pt-10">
              <div className="">
                <p className="text-[#ffffffbb]">Total Downloads</p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold my-4">
                  29.6M
                </h2>
                <h3 className="text-[#ffffffbb]">21% more than last month</h3>
              </div>
              <div>
                <p className="text-[#ffffffbb]">Total Reviews</p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold my-4">
                  906K
                </h2>
                <h3 className="text-[#ffffffbb]">46% more than last month</h3>
              </div>
              <div>
                <p className="text-[#ffffffbb]">Active Apps</p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold my-4">
                  132+
                </h2>
                <h3 className="text-[#ffffffbb]">31 more will Launch</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
