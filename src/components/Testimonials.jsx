import React from "react";
import FeedBackCard from "./FeedBackCard";
import { feedback } from "../constants";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Testimonials = () => {
  const items = feedback.map((ele, ind) => {
    return <FeedBackCard key={ele.id} {...ele} />;
  });
  const responsive = {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  };
  return (
    <section id="testimonials" className="py-10 relative">
      <div className="absolute z-[1] w-[200px] sm:w-[350px] h-[350px] rounded-full  -right-[100px] blue__gradient"></div>

      <div className="relative flex flex-col gap-y-7 gap-x-[30px] text-center md:text-left  md:flex-row items-center justify-between font-poppins mb-10">
        <h1 className="text-white font-bold text-[2rem] sm:text-[2.5rem] leading-[45px] sm:leading-[65px] md:text-[2.7rem]  ">
          What people are saying about us
        </h1>
        <p className="text-dimWhite ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <AliceCarousel
        items={items}
        infinite={true}
        mouseTracking={true}
        keyboardNavigation={true}
        disableDotsControls={true}
        autoPlay={true}
        autoPlayInterval={6500}
        responsive={responsive}
        disableButtonsControls
      />
    </section>
  );
};

export default Testimonials;
