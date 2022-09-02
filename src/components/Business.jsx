import React from "react";
import { features } from "../constants";
import SubSection from "./SubSection";

const Business = () => {
  const leftSide = {
    title: (
      <>
        You do the business, <br /> we'll handle the money.
      </>
    ),
    text: " With the right credit card, you can improve your financial life bybuilding credit, earning rewards and saving money. But with hundreds ofcredit cards on the market.",
  };
  const styles = {
    section:
      "w-full flex flex-col md:flex-row items-center justify-between py-[100px] gap-y-12  ",
    feature:
      "flex rounded-xl  text-white p-2 mb-4 items-center hover:-translate-y-2 duration-500 feature-card",
  };
  return (
    <section id="features" className={styles.section}>
      <SubSection title={leftSide.title} text={leftSide.text} btn={true} />
      {/*  */}
      <div>
        {features.map((ele, ind) => (
          <div key={ele.id} className={styles.feature}>
            <div className="h-[50px] w-[50px] rounded-full  bg-dimBlue flex items-center justify-center mr-3">
              <img
                src={ele.icon}
                alt={`${ele.title} icon`}
                className="h-[32px] object-contain"
              />
            </div>
            <div>
              <h5 className="capitalize text-[18px]">{ele.title}</h5>
              <p className="max-w-[330px] text-[14px] xl:text-[16px] text-dimWhite">
                {ele.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Business;
