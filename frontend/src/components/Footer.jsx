import React from "react";
import { assets } from "../assets/assets";
import {  useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Forever Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is your go-to fashion destination, offering the latest
            styles at affordable prices. We are committed to delivering quality,
            comfort, and convenience right to your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li onClick={() => handleNavigate("/")}>Home</li>
            <li onClick={() => handleNavigate("/about")}>About us</li>
            <li onClick={() => handleNavigate("/orders")}>Delivery</li>
            <li onClick={() => handleNavigate("/contact")}>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9581335263</li>
            <li>
              <a
                href="mailto:rajanarahul93@gmail.com"
                className="hover:underline"
              >
                rajanarahul93@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; {new Date().getFullYear()} Forever. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
