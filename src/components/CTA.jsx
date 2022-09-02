import React from "react";
import Button from "./Button";
import SubSection from "./SubSection";

const CTA = () => {
  return (
    <section id="cta" className="py-10">
      <div className="rounded-[25px] bg-black-gradient-2 py-8 flex-wrap gap-y-10 px-3 flex items-center justify-around ">
        <SubSection
          title="let's try our service now!"
          text="Everything you need to accept card payments and grow your business anywhere on the planet."
        />
        <Button />
      </div>
    </section>
  );
};

export default CTA;
