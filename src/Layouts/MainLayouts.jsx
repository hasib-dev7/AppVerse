import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <div className="w-full md:w-11/12  lg:10/12 mx-auto px-4 md:px-3 lg:px-12 py-2 md:py-2 lg:py-2 shadow-sm">
          <Navbar></Navbar>
        </div>

        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayouts;
