import { Bold, Download, Star } from "lucide-react";
import { Link } from "react-router";
const MobileAppsCard = ({ mobileApp }) => {
  const { title, image, downloads, ratingAvg, id } = mobileApp;

  return (
    <>
      <Link to={`/mobileapps/${id}`}>
        <div className="p-5 rounded-xl shadow-md bg-white hover:scale-105 transition ease-in-out">
          <figure>
            <img className="rounded-xl w-full h-64 " src={image} alt="" />
          </figure>
          <h2 className="text-xl font-medium text-[#001931] py-5 text-center">
            {title}
          </h2>
          <div className="flex justify-between">
            <div className=" flex items-center gap-2 bg-[#F1F5E8] py-2 px-3 rounded-md ">
              <p>
                <Download color="#00D390" strokeWidth={2.5}></Download>
              </p>
              <p className="text-[#00D390] font-medium">{downloads} M</p>
            </div>
            <div className=" flex items-center gap-2 bg-[#FFF0E1] py-2 px-3 rounded-md ">
              <p>
                <Star color="#FF8811" strokeWidth={2.5}></Star>
              </p>
              <p className="text-[#FF8811] font-medium">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MobileAppsCard;
