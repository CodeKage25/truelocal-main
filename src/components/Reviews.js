import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import eze from "../assets/images/eze.png";
import jibike from "../assets/images/jibike.png";
import damilare from "../assets/images/damilare.png";
import precious from "../assets/images/precious.png";
import nneka from "../assets/images/nneka.png";
import adebanji from "../assets/images/adebanji.png";
import victor from "../assets/images/victor.png";
import { FaStar } from "react-icons/fa";
  const reviews = [
    {
      name: "Eze Chinedu",
      img: eze,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
    },
    {
      name: "Damilare Usman",
      img: damilare,
      comment:
        "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
    },
    {
      name: "Adegboyega Precious",
      img: precious,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
    },
    {
      name: "Jibike Alarape",
      img: jibike,
      comment:
        "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
    },
    {
      name: "Jibike Alarape",
      img: jibike,
      comment:
        "Amet adipiscing pellentesque nisl urna malesuada vulputate sed volutpat gravida. In non massa lectus feugiat. Et lectus augue vitae porttitor ut pulvinar ultricies donec. Pharetra diam vel est tempus amet vitae eget egestas dolor. Tempor urna facilisi posuere sit. A semper tortor viverra id.",
    },
    {
      name: "Nneka Chukwu",
      img: nneka,
      comment:
        "Amet adipiscing pellentesque nisl urna malesuada vulputate sed volutpat gravida. In non massa lectus feugiat. Et lectus augue vitae porttitor ut pulvinar ultricies donec. Pharetra diam vel est tempus amet vitae eget egestas dolor. Tempor urna facilisi posuere sit. A semper tortor viverra id.",
    },
    {
      name: "Nneka Chukwu",
      img: nneka,
      comment:
        "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
    },
    {
      name: "Adebanji Bolaji",
      img: adebanji,
      comment:
        "Amet adipiscing pellentesque nisl urna malesuada vulputate sed volutpat gravida. In non massa lectus feugiat. Et lectus augue vitae porttitor ut pulvinar ultricies donec. Pharetra diam vel est tempus amet vitae eget egestas dolor. Tempor urna facilisi posuere sit. A semper tortor viverra id.",
    },
    {
      name: "Victor Adebisi",
      img: victor,
      comment:
        "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
    },
    
  ];
  const Reviews = () => {
    return (
      <section className="mb-20 px-8 md:px-16 mt-16" style={{borderTopLeftRadius: '50% 40%', borderTopRightRadius: '50% 40%'}}>
        <h3 className="mt-6 mb-10 text-center font-bai-jamjuree text-2xl font-semibold text-text">
          Our Customers love what we do.
        </h3>
        <div className="grid-container relative grid items-start gap-8 overflow-y-clip md:grid-cols-3">
          <div className="absolute top-0 z-10 h-36 w-full bg-gradient-to-b from-main-bg to-transparent"></div>
          <div className="grid grid-flow-row grid-cols-1 gap-8 md:-translate-y-10">
            {reviews.slice(0, 3).map(({ name, comment, img }, index) => (
              <div key={index} className="grid rounded-24 bg-white p-4" style={{borderRadius: '25px'}}>
                <div className="mb-2 flex items-center gap-x-2">
                  <img src={img} alt={name} />
                  <p className="font-bai-jamjuree text-lg font-medium text-text">
                    {name}
                  </p>
                </div>
                <div className="my-3 flex gap-x-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      <FaStar className="text-orange" />
                    </span>
                  ))}
                </div>
                <p>{comment}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-flow-row grid-cols-1 items-center gap-8">
            {reviews.slice(4, 6).map(({ name, comment, img }, index) => (
              <div key={index} className="h-full rounded-24 bg-white p-4" style={{borderRadius: '25px'}}>
                <div className="mb-2 flex items-center gap-x-2">
                  <img src={img} alt={name} />
                  <p className="font-bai-jamjuree text-lg font-medium text-text">
                    {name}
                  </p>
                </div>
                <div className="my-3 flex gap-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      <FaStar className="text-orange" />
                    </span>
                  ))}
                </div>
                <p>{comment}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-flow-row grid-cols-1 gap-8 md:-translate-y-32">
            {reviews.slice(6).map(({ name, comment, img }, index) => (
              <div key={index} className="rounded-24  bg-white p-4" style={{borderRadius: '25px'}}>
                <div className="mb-2 flex items-center gap-x-2">
                  <img src={img} alt={name} />
                  <p className="font-bai-jamjuree text-lg font-medium text-text">
                    {name}
                  </p>
                </div>
                <div className="my-3 flex gap-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      <FaStar className="text-orange" />
                    </span>
                  ))}
                </div>
                <p>{comment}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-20 z-10 h-56 w-full rounded-br-128 bg-gradient-to-t from-main-bg to-transparent md:bottom-10 grid-container-bottom"></div>
        </div>
      </section>
    );
  };

export default Reviews;
