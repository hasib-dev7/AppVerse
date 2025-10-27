import { useState } from "react";
import Content from "../Component/Content";
import useMobileApps from "../Hooks/useMobileApps";
import MobileAppsCard from "../Component/MobileAppsCard";
const MobileApps = () => {
  const [appSearch, setAppSearch] = useState("");
  const [mobileApps, loading, error] = useMobileApps();
  if (loading) return <p>loading ....</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  const tram = appSearch.trim().toLocaleLowerCase();
  const searchedApps = tram
    ? mobileApps.filter((a) => a.title.toLocaleLowerCase().includes(tram))
    : mobileApps;

  return (
    <>
      <Content>
        <div className="pt-20 pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001931] text-center">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382] text-center mt-5">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center pb-5">
          <p className="text-2xl font-semibold text-[#001931]">
            ({searchedApps.length}) Apps Found
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
            <input
              onChange={(e) => setAppSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {searchedApps.length > 0 ? (
            searchedApps.map((app) => (
              <MobileAppsCard key={app.id} mobileApp={app}></MobileAppsCard>
            ))
          ) : (
            <div className="col-span-full items-center justify-center pt-24">
              <p className="text-5xl font-bold text-center text-gray-500">
                No apps found matching
              </p>
              <div className="flex justify-center pt-10 pb-20">
                <button
                  onClick={() => setAppSearch("")}
                  className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-4 rounded-sm shadow text-center"
                >
                  Show All Apps
                </button>
              </div>
            </div>
          )}
        </div>
      </Content>
    </>
  );
};

export default MobileApps;
