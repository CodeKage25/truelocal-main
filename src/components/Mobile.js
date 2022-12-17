import React from "react";
import { TiVendorApple } from "react-icons/ti";
import mobile from "../assets/images/phone.png";
import Google from '../assets/images/google.svg'

const Mobile = () => {
  return (
    <div
      className="mobile bg-white flex flex-row m-auto justify-between items-center mb-16"
      style={{
        width: "1000px",
        height: "300px",
        borderRadius: "20px",
        padding: "3em",
      }}
    >
      <section className="flex flex-col">
        <h4 className="text-dark-grey text-5xl">Try the mobile App</h4>
        <p className="text-grey text-xl mt-8 mr-10">
          TrueLocal is available on Andriod and Iphones, download to have it at
          your fingertip.
        </p>
        <section className="btn flex flex-row">
          <button className="gap-4 text-center p-1">
            <TiVendorApple className="icons" /><p className="flex flex-col">Available on <p className="text-lg">App Store</p></p> 
          </button>
          <button className="gap-4 text-center p-1">
            <img src={Google} alt='Google' width={20} /><p className="flex flex-col">Available on <p className="text-lg">Google Play</p></p> 
          </button>
        </section>
      </section>

      <div className="flex flex-row phone">
        <img src={mobile} alt="mobile"/>
      </div>
    </div>
  );
};

export default Mobile;
