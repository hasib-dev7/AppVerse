import { Download, Star } from "lucide-react";

const InstallationCard = ({ installed }) => {
  const { image, title, companyName, ratingAvg, downloads, size } = installed;
  console.log(installed);
  return (
    <>
      <div className="flex justify-between items-center p-5 mb-5 bg-white shadow-md rounded-sm">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <figure className="w-28 h-28">
            <img className="w-full h-full  rounded-xl" src={image} alt={title} />
          </figure>
          <div>
            <h2>
              <span>{title}</span> <span>{companyName}</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex space-x-2">
                <p>
                  <Download color="#00D390" strokeWidth={2}></Download>
                </p>

                <p className="text-[#00D390] text-lg font-medium">
                  {downloads}M
                </p>
              </div>
              <div className="flex space-x-2">
                <p>
                  <Star color="#FF8811" strokeWidth={2}></Star>
                </p>

                <p className="text-[#FF8811] text-xlg font-medium">
                  {ratingAvg}
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="text-[#627382] text-lg font-medium">
                  {size} MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#00D390] text-white text-lg font-semibold px-5 py-3 rounded-lg">Unstall</button>
        </div>
      </div>
    </>
  );
};

export default InstallationCard;
