import React from "react";
import { stats } from "../constants/index";

const Status = () => (
  <div className="flex flex-row flex-wrap gap-8 items-center py-2 w-full  ">
    {stats.map((ele, ind) => (
      <div
        key={ele.id}
        className=" flex flex-row gap-2 flex-1 min-w-[220px] items-center justify-center"
      >
        <h4 className="font-poppins font-semibold text-[30px] leading-7 text-white">
          {ele.value}
        </h4>
        <p className="text-white text-[15px] text-gradient uppercase">
          {ele.title}
        </p>
      </div>
    ))}
  </div>
);

export default Status;
