import { RingLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" flex flex-col items-center justify-center gap-5">
           
          <RingLoader size={80} color="#08ff81" />
       
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold ">
          Loading...
        </h2>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
