import React from "react";
import { arrowUp } from "../assets";
const GetStarted = () => {
  const styles = {
    mainDiv:
      "flex items-center justify-center w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] sm:-translate-y-[120px] sm:-translate-x-[120px]",
    subA: "sm:cursor-pointer flex flex-col justify-center items-center bg-primary w-full h-full rounded-full ",
  };
  return (
    <div className={styles.mainDiv}>
      <a href="#" className={styles.subA}>
        <div className="flex justify-center items-start">
          <p className=" font-poppins font-medium text-[18px]">
            <span className="text-gradient">Get</span>
            <img
              src={arrowUp}
              alt="arrow up"
              className=" inline w-[23px] h-[23px] object-contain"
            />
            <br />
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default GetStarted;
