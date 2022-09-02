import { Scan, onlineAnalysis, paymentMethods } from "../assets";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTransform, useTime } from "framer-motion";

const CardDealShap = () => {
  const [select, setSelect] = useState("1 month");

  const myVaraints = {
    first: {
      rotate: [
        0, 0, 0, 0, 100, 100, 100, 100, 190, 190, 190, 190, 190, 360, 360, 360,
      ],
      transition: {
        repeat: Infinity,
        duration: 25,
      },
    },
  };
  const mySecVaraints = {
    first: {
      rotate: [
        0, 0, 0, 0, -100, -100, -100, -100, -190, -190, -190, -190, -190, -360,
        -360, -360,
      ],
      transition: {
        repeat: Infinity,
        duration: 25,
      },
    },
  };
  return (
    <motion.div
      variants={myVaraints}
      animate="first"
      className=" w-[230px] h-[230px] ss:w-[350px] ss:h-[350px]  relative "
    >
      <div className="w-[90%] absolute h-[90%] rounded-full border-[10px] top-[5%] left-[5%] border-[#3e7f81d6]"></div>
      <div className="w-[66%] absolute h-[66%] rounded-full border-[8px] top-[17%] left-[17%] border-[#397375d6]"></div>
      <div className="w-[34%] absolute h-[34%] rounded-full border-[6px] top-[33%] left-[33%] border-[#346567d6]"></div>
      {/*  */}
      <motion.div
        variants={mySecVaraints}
        className="rounded-[20px] bg-black-gradient p-2 ss:p-4 w-[110px] ss:w-[170px] h-fit z-[10] absolute -left-[80px] top-20"
      >
        <div className="flex justify-center items-center ">
          <div className=" bg-primary p-1 ssp-2 rounded-lg ">
            <img src={Scan} alt="Scan icon" className="w-4 ssw-5" />
          </div>
        </div>
        <h4 className=" capitalize text-white text-center font-bold py-1 ss:py-2 text-[14px] ss:text-[16px]">
          Scan credit cards
        </h4>
        <p className="text-dimWhite leading-4 ss:leading-6 text-center text-[12px] ss:text-[14px]">
          Scan yourcredit card in 4 minutes.
        </p>
      </motion.div>
      {/*  */}
      <motion.div
        variants={mySecVaraints}
        className="absolute -right-12 top-12"
      >
        <img
          src={onlineAnalysis}
          alt="online analysis"
          className="w-[160px] ss:w-[210px]"
        />
      </motion.div>
      {/*  */}
      <motion.div
        variants={mySecVaraints}
        className="absolute -bottom-10 right-[90px] "
      >
        <img
          src={paymentMethods}
          alt="online analysis"
          className="w-[120px] ss:w-[160px] "
        />
      </motion.div>
    </motion.div>
  );
};
export default CardDealShap;
