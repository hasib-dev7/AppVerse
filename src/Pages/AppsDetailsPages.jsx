import { useParams } from "react-router";
import useMobileApps from "../Hooks/useMobileApps";
import Content from "../Component/Content";
import { Download, Star, ThumbsUp } from "lucide-react";
import {
  addToCollectionInsatllData,
  getInstallData,
} from "../Utility/addToInstall";
import { useEffect, useState } from "react";
const AppsDetailsPages = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { id } = useParams();
  const [mobileApps, loading, error] = useMobileApps();
  // ✅ Check if already installed
  useEffect(() => {
    const storedApps = getInstallData() || [];
    const alreadyInstalled = storedApps.includes(id);
    setIsSelected(alreadyInstalled);
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  const appDetails = mobileApps.find((a) => String(a.id) === id);
  // Prevent hooks/render errors
  if (!appDetails) return <p>App not found!</p>;
  const { image, title, companyName, downloads, ratingAvg, reviews, size } =
    appDetails;
  //
  const handleInstallApp = (id) => {
    addToCollectionInsatllData(id);
    setIsSelected(true)
  };
  return (
    <>
      <Content>
        <div className="flex gap-10 pt-20">
          <figure className="w-4/12 ">
            <img className="w-full h-[312px]" src={image} alt="" />
          </figure>
          <div className="flex-1">
            <div>
              <h2 className="text-[#001931] text-3xl font-bold">
                {title} : {companyName}
              </h2>
              <p className="text-xl font-medium">
                <span className="text-[#627382]">Developed by</span>{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  productive.io
                </span>
              </p>
            </div>
            <div className="divider"></div>
            {/* card */}
            <div className="flex gap-12">
              <div className="space-y-3">
                <p>
                  <Download color="#00D390" strokeWidth={2.5}></Download>
                </p>
                <p className="text-[#001931]">Downloads</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {downloads}M
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <Star color="#FF8811" strokeWidth={2.5}></Star>
                </p>
                <p className="text-[#001931]">Average Ratings</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {ratingAvg}
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <ThumbsUp color="#632EE3" strokeWidth={2.5} />
                </p>
                <p className="text-[#001931]">Total Reviews</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {(reviews / 1000000).toFixed(0)}K
                </p>
              </div>
            </div>
            {/* button */}
            <button
              onClick={() => {
                handleInstallApp(id);
                setIsSelected(true);
              }}
              disabled={isSelected}
              className="px-6 py-4 bg-[#00D390] text-white rounded mt-8"
            >
              {isSelected === true ? "Install" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </Content>
    </>
  );
};

export default AppsDetailsPages;
