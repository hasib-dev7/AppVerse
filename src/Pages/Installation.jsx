import { useState, useEffect } from "react";
import Content from "../Component/Content";
import useMobileApps from "../Hooks/useMobileApps";
import { getInstallData } from "../Utility/addToInstall";
import InstallationCard from "../Component/InstallationCard";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [mobileApps, loading, error] = useMobileApps();
  useEffect(() => {
    if (!loading && !error && mobileApps.length > 0) {
      const storedApps = getInstallData() || [];
      const convertId = storedApps.map((id) => parseInt(id));
      const isExting = mobileApps.filter((app) => convertId.includes(app.id));
      setInstallation(isExting);
    }
  }, [mobileApps, loading, error]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <Content>
        <div>
          <div className="pt-20 pb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001931] text-center">
              Your Installed Apps
            </h2>
            <p className="text-lg lg:text-xl text-[#627382] text-center mt-5">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center pb-5 gap-5">
            <p className="text-xl lg:text-2xl font-semibold text-[#001931]">
              ({installation.length}) Apps Found
            </p>
            {/* search bar section */}
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search Apps" />
            </label>
          </div>
          {/* installation card section */}
          <div>
            {
                installation.map(installed=><InstallationCard key={installed.id} installed={installed}></InstallationCard>)
            }
          </div>
        </div>
      </Content>
    </>
  );
};

export default Installation;
