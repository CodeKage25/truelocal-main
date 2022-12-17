import React from "react";
import logo from "../assets/images/footer-logo.png";
import text1 from "../assets/images/footer-text-logo.png";
import text2 from "../assets/images/footer-text-local.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-orange">
        <div className="container m-auto p-10 flex flex-col">
          <div className="flex flex-wrap justify-center">
            <img src={logo} alt="logo" className="w-10" />
            <img src={text1} alt="text1" className="w-" />
            <img src={text2} alt="text2" className="w-" />
          </div>
          <div className="p-16 m-auto flex flex-col">
            <h3 className="text-3xl text-white font-semibold text-center">
              We connect people looking to get their to-do buttonst done with people
              looking to make extra cash.
            </h3>
            <div className="buttons justify-center m-auto p-4">
               <button className="bg-white text-orange">Post a Job</button>
               <button className="bg-white text-orange">Provide a Service</button>
            </div>
          </div>

          <div className="links">
            <div className="flex flex-wrap justify-center flex-row buttonst-none text-white gap-10">
               <button>Post a Task</button>
               <button>Browse Jobs</button>
               <button>Services</button>
               <button>Find Talent</button>
               <button>Contact Us</button>
            </div>
          </div>
          <p className="text-white text-left text-lg p-6">© 2022 Truelocal</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
