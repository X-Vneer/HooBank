import React from "react";
import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants/index";
import { useState } from "react";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="flex justify-between w-full py-6 items-center navbar relative">
      <a href="#">
        <img src={logo} alt="hoobank" className="h-[32px]" />
      </a>
      <ul className="list-none hidden sm:flex  items-center gap-2">
        {navLinks.map((nav, ind) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-white text-[16px] px-4"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button
        id="menu-btn"
        onClick={() => {
          setOpened((pre) => !pre);
        }}
        className={`block hamburger sm:hidden focus:outline-none ${
          opened ? "open" : ""
        } `}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <ul
        className={
          "absolute transition-all h-[220px] duration-500	 flex flex-col gap-3 shadow-sm items-center justify-center top-12 bg-black-gradient w-40 right-5 rounded-lg" +
          ` ${opened ? "z-10 opacity-100 " : "opacity-0 -z-10 top-[120px]"}`
        }
      >
        {navLinks.map((nav, ind) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-white text-[16px] text-center w-full py-2"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
