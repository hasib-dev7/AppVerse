import { useState, useEffect } from "react";
import Content from "../Component/Content";
import useMobileApps from "../Hooks/useMobileApps";
import {
  getInstallData,
  removeFromInstalledList,
} from "../Utility/addToInstall";
import InstallationCard from "../Component/InstallationCard";
import { ArrowBigDown } from "lucide-react";
import LoadingSpinner from "../Component/LoadingSpinner";
import { toast } from "react-toastify";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortDownload, setSortDownload] = useState("");
  const [mobileApps, loading, error] = useMobileApps();
  useEffect(() => {
    if (!loading && !error && mobileApps.length > 0) {
      const storedApps = getInstallData() || [];
      const convertId = storedApps.map((id) => parseInt(id));
      const isExting = mobileApps.filter((app) => convertId.includes(app.id));
      setInstallation(isExting);
    }
  }, [mobileApps, loading, error]);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500">{error}</p>;
  // sort function
  const handleSort = (type) => {
    setSortDownload(type);
    if (type === "low") {
      const sortLow = [...installation].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstallation(sortLow);
    }
    if (type === "high") {
      const sortHigh = [...installation].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstallation(sortHigh);
    }
  };
 
  //   remove installed list app
  const handleRemove = (id) => {
    // find the app first
  const app = installation.find((app) => app.id === id);
    // remove from localstorage
    removeFromInstalledList(id);
    // for ui instant update
    setInstallation((prev) => prev.filter((app) => app.id !== id));
  // show toast with title
  if (app) {
    toast.success(`${app.title} : ${app.companyName}  removed successfully!`);
  }
  };
  return (
    <>
      <Content>
        <div >
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
            {/* dropDown menu section */}
            <details className="dropdown">
              <summary className="btn m-1">
                {sortDownload ? (
                  <span>
                    {sortDownload === "low" ? "Low-High" : "High-Low"}
                  </span>
                ) : (
                  <p className="flex items-center gap-1">
                    Sort By Size <ArrowBigDown size={16} strokeWidth={0.75} />
                  </p>
                )}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={() => handleSort("low")}>Low-High</a>
                </li>
                <li>
                  <a onClick={() => handleSort("high")}>High-Low</a>
                </li>
              </ul>
            </details>
          </div>
          {/* installation card section */}
          <div className="pb-5">
            {installation.map((installed) => (
              <InstallationCard
                key={installed.id}
                installed={installed}
                handleRemove={handleRemove}
              ></InstallationCard>
            ))}
          </div>
        </div>
      </Content>
    </>
  );
};

export default Installation;
