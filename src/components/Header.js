import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { BiPlay } from "react-icons/bi";
import Image1 from "../assets/images/image1.png";


const Header = () => {
  return (
    <div>
      <header className="pt-12 pl-12 md:flex flex-row gap-20" id="home">
        <div>
          <h3 className="text-dark-grey text-6xl">
            Get <span className="text-orange">Plumbing</span> done on your own
            terms
          </h3>
          <p className="text-dark-grey text-xl mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
            convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.
          </p>
          <div className="wrapper" style={{ position: "relative" }}>
            <div className="icon">
              <FaRegEnvelope />
            </div>
            <button>Get Started</button>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="md:flex play">
            <div className="play-icon">
              <BiPlay />
            </div>
            <p className="text-dark-grey text-lg mt-2">See how it works</p>
          </div>
        </div>

        <div className="image">
          <img src={Image1} alt="Lady holding a tap" />
        </div>
      </header>

      <section className="md:flex texts flex-row text-dark-grey text-lg gap-7 mt-8 ml-16 pl-6">
        <h6 className="text-orange">Everything is easy</h6>
        <p>1</p>
        <h6>Post a Task</h6>
        <p>2</p>
        <h6>Set your budget or not</h6>
        <p>3</p>
        <h6>Receive quotes & pick the best provider</h6>
      </section>
    </div>
  )
}

export default Header