import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { BiChevronRight } from 'react-icons/bi';
import mechanic from "../assets/images/mechanic.png";
import typist from "../assets/images/typist.png";
import mecho from "../assets/images/mecho.png";
import half1 from "../assets/images/image11.png";
import half2 from "../assets/images/half2.png";
import mechanicSmall from "../assets/images/mini1.png";
import typistSmall from "../assets/images/mini2.png";
import mechoSmall from "../assets/images/mini3.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const SecondSlide = () => {
  return (
    <div>
      <section className="relative overflow-x-clip pb-10 pt-14" style={{background: '#EEE4D7'}}>
        <div className="absolute -top-16 left-1/2 h-24 w-[110%] -translate-x-1/2 minied-bl-[50%] minied-br-[50%] bg-main-bg md:minied-br-[100%] md:minied-bl-[100%]"></div>
        <h3 className="mt-6 mb-10 text-center text-3xl font-semibold  md:text-3xl">
          See what
          <span className="text-orange"> people </span>
          are getting done
        </h3>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          partialVisible={true}
          responsive={responsive}
          keyBoardControl={true}
          containerClass="pb-10 md:pb-12"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-8 md:px-4 md:first:ml-16"
        >
          {sliderDetail.map(
            (
              { type, open, title, loc, time, price, star, img, smImg },
              index
            ) => (
              <div
                className="relative h-[350px] minied-25 bg-cover bg-center bg-no-repeat md:h-[370px] md:minied-30"
                style={{  borderRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
              >
                <img src={img} alt='mechanic' style={{  borderRadius: '20px'}} />
                <span
                  className={`absolute top-3 left-5 minied-[50px] px-3 py-1 text-xs capitalize md:text-sm ${
                    open ? "bg-white text-sm" : "bg-primary text-white bg-orange"
                  }`} style={{borderRadius: '20px'}}
                >
                  {open ? "open" : "engaged"}
                </span>

                <div className="absolute bottom-4 left-1/2 w-11/12 -translate-x-1/2 minied-25 bg-white p-3.5 md:p-5" style={{ borderRadius: '20px' }}>
                  <div
                    style={{ borderRadius: '20px' }}
                    className={`absolute -top-8 right-6 minied-full p-2 md:-top-10 md:right-8 ${
                      index === 0 ? "bg-center" : "bg-right-top"
                    }`}
                  >
                    
                    <img
                      src={smImg}
                      alt={title}
                      className="w-6 minied-full md:w-auto"
                    />
                  </div>
                  <p className="text-xs font-medium text-orange md:text-sm">
                    {type}
                  </p>
                  <p className=" text-base font-semibold text-ltext md:text-lg">
                    {title}
                  </p>
                  <p className="my-2 flex items-center gap-x-1 text-xs text-ltext md:text-sm">
                    <SlLocationPin />
                    <span>{loc}</span>
                  </p>
                  <p className="my-2 flex items-center gap-x-1 text-xs text-ltext md:text-sm">
                    <AiOutlineClockCircle />
                    <span>{time}</span>
                  </p>
                  <p className=" text-base font-semibold md:text-lg">
                    {price}
                  </p>
                  <div className="flex items-center justify-between text-primary">
                    <span className="flex items-center gap-x-1">
                      <FaStar className="text-orange" />
                      <span className="mt-1 text-sm text-orange">{star}</span>
                    </span>
                    <button className="flex items-center gap-x-1.5 text-orange text-sm md:text-base detail-btn">
                      Details <BiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>

        <button className="mx-auto mt-6 block w-52 minied-20 bg-orange py-3.5 font-poppins text-sm font-medium text-white md:mb-28 md:mt-10 md:py-4 md:text-base" style={{borderRadius: '24px'}}>
          Post your own task
        </button>
      </section>

      <section className="mb-[800px] grid gap-16 md:mb-52 md:grid-cols-2 md:gap-10">
        <div className="minied-br-128 bg-light-red pb-36 pt-10 pl-8 md:-mr-40 md:pt-20 md:pb-64 md:pr-56 md:pl-16" style={{background: '#EEE4D7', borderBottomRightRadius: '24px'}}>
          <div className="pr-8 text-text md:pr-10">
            <h2 className=" text-2xl font-medium md:text-4xl">
              Become a Service Provider and start
              <span className="text-primary"> earning </span>
              today!
            </h2>
            <p className="my-4 text-sm font-medium md:my-6 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              convallis fusce nulla tincidunt sem iaculis. Amet velit etiam
              nisi.
            </p>
            <button className="minied-16 bg-orange py-2.5 px-8 text-base font-medium text-white md:minied-20 md:py-3.5 md:px-7" style={{borderRadius: '24px'}}>
              Start Earning
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={typist} width={400} height={400} style={{left: '100px', border: '20px solid #FFFFFF', borderRadius: '20px'}} alt="typist" className="absolute md:-top-20" />
          <img src={half2} width={200} height={200} alt="half1" className="absolute right-0 -top-10" />
          <img
            src={half1} width={200} height={100}
            alt="half2"
            className="absolute right-0 md:top-30 md:bottom-20"
          />
        </div>
      </section>
    </div>
  );
};
const sliderDetail = [
  {
    open: true,
    type: "Repairs & Maintenance",
    title: "Fix my faucet and mixers",
    loc: "Physical - Ketu, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "₦50,000",
    star: "4.0",
    img: mechanic,
    smImg: mechanicSmall,
  },
  {
    open: true,
    type: "IT Services",
    title: "Landing page for my product",
    loc: "Remote",
    time: "Flexible",
    price: "No budget yet",
    star: "4.0",
    img: typist,
    smImg: typistSmall,
  },
  {
    open: false,
    type: "IT Services",
    title: "Experienced toyota mechanic",
    loc: "Physical - VI, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "No budget yet",
    star: "4.0",
    img: mecho,
    smImg: mechoSmall,
  },
  {
    open: true,
    type: "Repairs & Maintenance",
    title: "Fix my faucet and mixers",
    loc: "Physical - Ketu, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "₦50,000",
    star: "4.0",
    img: mechanic,
    smImg: mechanicSmall,
  },
];
export default SecondSlide