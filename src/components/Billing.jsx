import React from "react";
import { bill, apple, google } from "../assets";
import SubSection from "./SubSection";

const Billing = () => {
  const rightSide = {
    title: (
      <>
        Easily control your <br /> billing & invoicing.
      </>
    ),
    text: "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
  };
  return (
    <section id="billing" className="py-10 relative">
      <div className="absolute z-[1] w-[200px] sm:w-[300px] h-[300px] rounded-full  left-[30px] white__gradient"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-12 ">
        <div className="basis-[500px] ">
          <img src={bill} alt="billing" className="w-full" />
        </div>
        <div>
          <SubSection
            title={rightSide.title}
            btn={false}
            text={rightSide.text}
          />
          <div className="flex flex-row gap-2 justify-center md:justify-start">
            <a href="#">
              <img className="h-[44px]" src={apple} alt="apple store" />
            </a>
            <a href="#">
              <img className="h-[44px]" src={google} alt="google play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
