import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">Essenture Global Trade</h3>
                <div className="text-md font-medium text-gray-600">
                  <h3 className="font-bold text-xl mb-4">India Office</h3>
                  <p>
                    A-430, Vashi Plaza, Sector-17, Vashi, Navi Mumbai - 400703
                    Maharashtra India
                  </p>
                  <h3 className="font-bold text-xl mb-4">Ireland Office</h3>
                  <p>
                    Carlow Town, Dublin, Ireland
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#portfolio"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Products
                  </HashLink>
                </li>

                <li className="mb-2">
                  <HashLink
                    to="#about"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="contact#contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Export
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Import Agent
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Sourcing Agent
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mb-4 flex justify-center space-x-2">
                <a href="#!" className="btn text-white p-2 rounded-full bg-blue-700 hover:bg-blue-800">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                {/* <a href="#!" className="btn text-white p-2 rounded-full bg-blue-400 hover:bg-blue-500">
                  <FaTwitter className="w-4 h-4" />
                </a> */}
                <a href="#!" className="btn text-white p-2 rounded-full bg-red-600 hover:bg-red-700">
                  <FaGoogle className="w-4 h-4" />
                </a>
                <a href="#!" className="btn text-white p-2 rounded-full bg-purple-700 hover:bg-purple-800">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/j-j-global-trade-llp/?viewAsMember=true" target="_blank" className="btn text-white p-2 rounded-full bg-blue-600 hover:bg-blue-700">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                {/* <a href="#!" className="btn text-white p-2 rounded-full bg-gray-800 hover:bg-gray-900">
                  <FaGithub className="w-4 h-4" />
                </a> */}
              </div>

            </div>

          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-white font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Essenture Global Trade
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
