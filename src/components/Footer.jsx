import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap py-12 justify-center gap-y-12 gap-x-12">
        <div className="w-[262px] mr-8">
          <img src={logo} alt="hooBank" className="w-full" />
          <p className="font-poppins text-dimWhite mt-6 ">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((ele, ind) => {
          return (
            <div
              key={ind}
              className="text-dimWhite basis-[240px] px-6 text-center sm:text-left"
            >
              <h3 className="text-white text-[22px]">{ele.title}</h3>
              <ul className="mt-4  ">
                {ele.links.map((e, i) => {
                  return (
                    <li
                      key={e.name}
                      className="py-2 hover:text-secondary transition-all duration-300 hover:pl-2"
                    >
                      <a href={e.link}> {e.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-dimWhite py-5  border-t-[0.5px]  border-[#3F3E45] flex justify-center gap-y-10 flex-wrap">
        <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        <div className="grow flex gap-4 justify-center ss:justify-end items-center">
          {socialMedia.map((e, i) => {
            return (
              <a href="e.link" key={e.id}>
                <img src={e.icon} alt="social meadia" />
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <p className="py-10 text-secondary text-center font-medium text-[20px]">
          This design was built using React v18 by{" "}
          <span className="text-white">Moneer A. Mizyed</span> contact me via{" "}
          <a className="text-white" href="mailto:xv.neer.business@gmail.com">
            email
          </a>{" "}
          or <span className="text-white">WhatsApp: +972598654780</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
