import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className="py-12 ">
      <div className="flex flex-row flex-wrap gap-9 items-end justify-center">
        {clients.map((ele, ind) => {
          return (
            <div
              key={ele.id}
              className={`h-[100px] flex items-end ${
                ele.id === "client-3" ? "items-center" : ""
              }`}
            >
              <img
                src={ele.logo}
                alt="client logo"
                className={`max-h-[70px] max-w-full `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
