import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-gray-300 py-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              id?
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashoard</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4 ">Contact</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +91 999999999</p>
            <p>Address: Hyderabad, India</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a
            href="#"
            className="text-white p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition duration-300 hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-white p-2 rounded-full bg-gray-700 hover:bg-blue-400 transition duration-300 hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-white p-2 rounded-full bg-gray-700 hover:bg-pink-500 transition duration-300 hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-white p-2 rounded-full bg-gray-700 hover:bg-blue-700 transition duration-300 hover:scale-110"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <button
          // onClick={handleNext}
          className="absolute right-3 h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button 
  shadow-md hover:shadow-lg border-[2px] border-black transition-all duration-300 transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5v14" /> {/* Vertical line */}
            <path d="M18 11l-6 -6l-6 6" /> {/* Upward-facing arrow */}
          </svg>
        </button>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-600">
          Developed by{" "}
          <a href="https://veereshnaik.vercel.app/" target="_blank">
            Veeresh naik
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
