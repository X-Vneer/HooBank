import React from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="p-5 sm:p-10 rounded-lg feedback-card box-shadow w-[250px] sm:w-[300px] font-poppins text-dimWhite mx-auto">
      <img src={quotes} alt="quotes" className="mb-4 w-[45px] object-contain" />
      <p className=" pt-3 leading-relaxed mb-7 min-h-[120px]">{content}</p>
      <div className="flex flex-row gap-3">
        <img src={img} alt="name" className="rounded-full w-[43px] h-[43px]" />
        <div>
          <h4 className="text-white  capitalize text-[18px]">{name}</h4>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
