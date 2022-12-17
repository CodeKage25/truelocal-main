import React from "react";
import Man from "../assets/images/image12.png";

const Contact = () => {
  return (
    <div className="m-14">
      <div className="contact flex flex-row gap-10 p-10">
        <div className="contact-form w-auto pt-16">
          <h1 className="text-4xl text-left font-semibold text-black">
            Have a question? <br /> We are ready to assist
          </h1>

          <form className="flex flex-row gap-60 p-10">
            <div className="flex flex-col">
              <input type="email" placeholder="Enter your email here" />
              <textarea placeholder="Enter your message here" />
            </div>
          </form>
        </div>
        <div className="img ml-16 w-auto">
          <div className="orange"></div>
          <img src={Man} alt="man smiling" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
