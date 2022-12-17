import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../assets/images/Vector.png";
import ITImage from "../assets/images/IT.png";
import maintenance from "../assets/images/maintenance.png";
import beauty from "../assets/images/beauty.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const FirstSlide = () => {
  const services = [
    {
      title: "IT Services",
      img: ITImage,
      smImg: maintenance,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: ITImage,
      smImg: maintenance,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: ITImage,
      smImg: beauty,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "IT Services",
      img: ITImage,
      smImg: maintenance,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: ITImage,
      smImg: maintenance,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: ITImage,
      smImg: beauty,
      desc: "For software, web development, networking, programming, etc.",
    },
  ];
  return (
    <section className="mt-36 grid items-center gap-12 pb-20 md:grid-cols-5 md:pl-16 first-slide">
      <div className="relative col-span-2 w-screen px-8 md:w-auto md:px-0">
        <img src={arrow} alt='arrow' className="absolute -top-40 left-60 w-28 md:-top-[95%] right-20 md:w-auto" />
        <div className="text-text md:pr-14">
          <h2 className=" text-2xl font-medium md:text-4xl">
            Explore by Categories
          </h2>
          <p className="my-4 text-base font-medium md:mr-14">
            Browse our categories and find the right talents that matches the
            job you want to get done.
          </p>
          <button className="rounded-20 bg-orange px-7 py-3.5 text-sm font-medium text-white md:py-4 md:text-base" style={{borderRadius: '24px'}}>
            See all Categories
          </button>
        </div>
      </div>

      <div className="col-span-3 w-screen md:w-auto">
        <Carousel
          showDots={true}
          partialVisible={true}
          responsive={responsive}
          keyBoardControl={true}
          containerClass="pb-8"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style --first-slider"
          itemClass="px-4"
        >
          {services.map(({ title, desc, img, smImg }, index) => (
            <div className="relative" key={index}>
              <img src={img} alt={title} />
              <div className="absolute  bottom-6 h-1/4 p-4 text-white md:bottom-8 md:pl-6">
                <p className=" text-lg font-medium md:text-2xl">
                  {title}
                </p>
                <p className="font-mulish">{desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FirstSlide;