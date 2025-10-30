import { Github } from "lucide-react";
import navLogo from "../assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-base-100  p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                      : "text-gray-700 hover:text-[#9F62F2]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                      : "text-gray-700 hover:text-[#9F62F2]"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                      : "text-gray-700 hover:text-[#9F62F2]"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          {/* nave left logo */}
          <div className="flex items-center gap-2">
            <figure>
              <NavLink to="/">
                <img
                  className="w-12 h-12 md:w-14 md:h-14"
                  src={navLogo}
                  alt="nav logo image"
                />
              </NavLink>
            </figure>
            <h2 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                    : "text-gray-700 hover:text-[#9F62F2]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                    : "text-gray-700 hover:text-[#9F62F2]"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]"
                    : "text-gray-700 hover:text-[#9F62F2]"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/"
            target="blank"
            className="flex items-center gap-2 px-4 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            {" "}
            <span>
              <Github></Github>
            </span>{" "}
            <span>Contribute</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
