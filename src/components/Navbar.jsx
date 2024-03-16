import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import LogoImg from "../assets/LOGO.svg";
import { IonIcon } from "@ionic/react";

const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Challenges", link: "/" },
    { name: "Help Center", link: "/" },
    { name: "About Us", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`shadow-md w-full fixed top-0 left-0 z-[100] ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#008905]  leading-10 ">
          <span className="text-4xl  mr-3 pt-2">
            <img src={LogoImg} alt="" />
          </span>
          TruFunder
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <IonIcon
            name={open ? "close" : "menu"}
            className={
              open
                ? "text-dark bg-white rounded-[50%]"
                : `text-${isScrolled ? "black" : "white"}`
            }
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:bg-transparent md:static lg:bg-transparent bg-[#070E2A] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className={`text-${
                  isScrolled ? "green" : "white"
                } hover:text-[#] text-[16px] duration-500 active:text-red-800 font-[Poppins]`}
                activeClassName="text-green-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <div className="lg:hidden">
            <Button className="lg:hidden bg-[#008905] text-white md:ml-8">
              Client Area
            </Button>
          </div>
        </ul>
        <div className="hidden lg:block">
          <Button className="bg-[#008905] text-white md:ml-8">
            Client Area
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
