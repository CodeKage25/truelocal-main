import React from 'react'
// import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import name from "../assets/images/true.png";
import local from "../assets/images/local.png";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex flex-row p-10 gap-14">
        <div className="logo md:flex gap-2">
          <img src={logo} alt="Logo" />
          <div className="md:flex pt-3">
            <img
              src={name}
              alt="name"
              style={{ width: "50%", height: "50%" }}
            />
            <img
              src={local}
              alt="name"
              style={{ width: "50%", height: "50%" }}
            />
          </div>
          <button
            className="text-orange ml-12 text-lg"
            style={{
              border: "1px solid #E98100",
              borderRadius: "10px",
              width: "120px",
              height: "55px",
            }}
          >
            Post a Job
          </button>
        </div>

        <div className="nav-links md:flex flex-row gap-8 ml-10 mt-3 text-grey text-sm list-none">
          <li>Tasks</li>
          <li>Discover Service Providers</li>
          <li>How It Works</li>
        </div>

        <div
          className="md:flex text-lg gap-8 ml-6"
          style={{ borderLeft: "1px solid #E98100" }}
        >
          <button className="text-orange ml-8">Log In</button>
          <button className="text-orange">Sign Up</button>
          <button
            className="text-white bg-orange service"
            style={{ borderRadius: "10px", width: "175px", height: "55px" }}
          >
            Provide a Service
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar