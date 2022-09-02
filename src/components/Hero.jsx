import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const styles = {
    left: "flex flex-col gap-12 items-center justify-center md:items-start pl-0 basis-[650px] z-[1] ",
    discount:
      "flex items-center uppercase text-sm rounded-lg bg-discount-gradient text-dimWhite px-3 py-1 w-fit cursor-pointer",
    h1: "text-white font-semibold text-[42px] leading-[55px] sm:leading-[65px] sm:text-[56px] text-center sm:text-left",
    text: "flex items-center capitalize font-poppins flex-col sm:flex-row ",
    subText: "text-dimWhite max-w-[450px] my-5 text-center sm:text-left",
  };

  return (
    <section
      id="home"
      className="pt-[30px] md:pt-[120px] flex flex-col md:flex-row justify-between "
    >
      <div className={styles.left}>
        <div className={styles.discount}>
          <img src={discount} alt="discount" className=" w-6 text-start mr-1" />
          <p>
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white">1 month </span> account
          </p>
        </div>
        {/*  */}
        <div className={styles.text}>
          <div>
            <h1 className={styles.h1}>
              The Next <br /> <span className="text-gradient">Generation</span>{" "}
              <br /> Payment Method
            </h1>
            <p className={styles.subText}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div>
            <GetStarted />
          </div>
        </div>
        {/*  */}
      </div>
      <div className="basis-[350px] relative md:hidden ">
        <img src={robot} alt="robot arm" className="ml-auto -mr-[15px]" />
        <div></div>
        <div className=" block md:hidden absolute z-[0] w-[60%] h-[290px] xs:h-[410px] ss:h-[500px] right-[20%] top-[0px] main__gradient"></div>
        <div className="absolute z-[1] w-[200px] h-[200px] rounded-full  right-[30px] top-0 white__gradient"></div>
      </div>
      <div className="absolute z-[0] w-[300px] h-[400px]  right-[100px] top-[110px] main__gradient"></div>
      <div className="absolute z-[1] w-[300px] h-[300px] rounded-full  right-[30px] white__gradient"></div>
    </section>
  );
};

export default Hero;
