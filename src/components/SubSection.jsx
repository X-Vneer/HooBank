import React from "react";
import Button from "./Button";

const SubSection = ({ title, text, btn }) => {
  const styles = {
    h1: "text-[2rem] sm:text-[2.5rem] leading-[45px] sm:leading-[65px] md:text-[2.7rem] font-poppins text-center md:text-left mb-3 text-white font-semibold",
    p: "font-poppins leading-6 text-center  mb-5 mx-auto md:mx-0 md:text-left max-w-[370px] text-dimWhite ",
  };
  return (
    <div>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>{text}</p>
      {btn && <Button />}
    </div>
  );
};

export default SubSection;
