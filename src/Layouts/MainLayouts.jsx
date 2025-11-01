import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer/Footer";
import { ToastContainer, Bounce } from "react-toastify";
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
        <div className="w-full md:w-11/12  lg:10/12 mx-auto px-4 md:px-3 lg:px-12 py-2 md:py-2 lg:py-12 bg-gradient-to-r from-[#7203bc] to-[#3363f4]">
          <Footer></Footer>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
};

export default MainLayouts;
