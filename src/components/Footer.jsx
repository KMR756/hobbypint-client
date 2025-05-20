import React from "react";
import logo from "../assets/logo-white.png";
import { Link } from "react-router";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F2F2F2] rounded-lg shadow-sm  ">
        <div className="w-10/12  mx-auto  md:py-8">
          <div className="sm:flex  sm:items-center px-15 sm:justify-between">
            <Link
              to={"/"}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-15" alt="Flowbite Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <Link
                  to={"about"}
                  className="lato-bold hover:underline me-4  text-xl md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"policy"}
                  className="lato-bold hover:underline text-xl me-4 md:me-6"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to={"contract"}
                  className="lato-bold hover:underline text-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="lato-black text-center text-2xl mt-10">
            connected with us.....
          </h1>
          <div className="flex gap-6 justify-center mt-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare size={40} color="#1877F2" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin size={40} color="#0A66C2" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare size={40} color="#F20185" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube size={40} color="#FF0033" />
            </a>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2025{" "}
            <a href="#" className="hover:underline">
              HobbyPoint
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
