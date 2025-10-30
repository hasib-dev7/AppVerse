import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import navLogo from "../../assets/logo.png";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* columme 01 */}
        <div className="w-3/12 space-y-4">
          <div className="flex items-center gap-2">
            <figure>
              <NavLink to="/">
                <img
                  className="w-10 h-10 md:w-12 md:h-12"
                  src={navLogo}
                  alt="nav logo image"
                />
              </NavLink>
            </figure>
            <h2 className="text-white text-2xl font-bold ">HERO.IO</h2>
          </div>
          <p className="text-[#A1A1AA]">
            App Hero is an innovative platform that showcases top-rated mobile
            applications, helping users discover, explore, and download the best
            apps easily.
          </p>
          {/*  */}
          <div className="flex gap-3  mt-5 lg:mt-0">
            <li className="list-none">
              <a href="#" className="flex gap-1 items-center">
                <span className="p-1 tex-2xl text-black bg-white rounded-4xl">
                  <FaSquareXTwitter />
                </span>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="flex gap-1 items-center">
                <span className="p-1 tex-2xl text-black bg-white rounded-4xl">
                  <FaInstagramSquare></FaInstagramSquare>
                </span>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="flex gap-1 items-center">
                <span className="p-1 tex-2xl text-black bg-white rounded-4xl">
                  <FaFacebookF></FaFacebookF>
                </span>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="flex gap-1 items-center">
                <span className="p-1 tex-2xl text-black bg-white rounded-4xl">
                  <MdEmail></MdEmail>
                </span>
              </a>
            </li>
          </div>
        </div>
        {/* columme 02 */}
        <div className="space-y-3 mt-5 lg:mt-0">
          <h2 className="text-white text-2xl font-bold">Usefull Links</h2>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> Privacy Protection</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#">Safe Payments</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#">Terms of Services</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> Documentation</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> Privacy Policy</a>
          </li>
        </div>
        {/* columme 03 */}
        <div className="space-y-3 mt-5 lg:mt-0">
          <h2 className="text-white text-2xl font-bold">Company</h2>
          <li className="text-[#A1A1AA] list-none">
            <a href="#">About us Sections</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> Pricing Section</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#">Features Section</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> FAQ Section</a>
          </li>
          <li className="text-[#A1A1AA] list-none">
            <a href="#"> Contact Section</a>
          </li>
        </div>
        {/* columme 04 */}
        <div className="space-y-3 mt-5 lg:mt-0 w-3/12">
          <h2 className="text-white text-2xl font-bold">Newsletter</h2>
          <p className="text-[#A1A1AA]">
            Subscribe our newsletter to get our update. We don't send span email
            to you.
          </p>
          <div className="join">
            <div>
              <label className="input validator join-item">
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="Enter Your Email" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
