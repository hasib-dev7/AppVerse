import Banner from "../Component/Banner";
import Content from "../Component/Content";
import HeroSection from "../Component/HeroSection";
import LoadingSpinner from "../Component/LoadingSpinner";

import MobileAppsCard from "../Component/MobileAppsCard";
// import useLoadingSpinner from "../Hooks/useLoadingSpinner";
import useMobileApps from "../Hooks/useMobileApps";
import { Link } from "react-router";
const Home = () => {
  const [mobileApps, loading, error] = useMobileApps();
  // const loadingSpinner=useLoadingSpinner()
  // if(loadingSpinner)return <LoadingSpinner></LoadingSpinner>
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  const homePageApps = mobileApps.slice(0, 8);

  return (
    <>
      <div>
        <Banner></Banner>
        <HeroSection></HeroSection>
        {/* mobile apps */}
        <Content>
          <div>
            {/* heading section */}
            <div className="pt-10 md:pt-16 lg:pt-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001931] font-bold text-center mb-4">
                Trending Apps
              </h2>
              <p className="text-xl text-[#627382] text-center mb-10">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            {/* mobile app card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {homePageApps.map((app) => (
                <MobileAppsCard key={app.id} mobileApp={app}></MobileAppsCard>
              ))}
            </div>
          </div>
          {/* show all page button */}
          <div className="flex justify-center pt-10 pb-10">
            <Link to="/apps" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-4 rounded-sm shadow text-center">
              Show All
            </Link>
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
