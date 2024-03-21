import React from "react";
import w3schools from "../images/w3schools.svg";
import mdn from "../images/mdn.svg";
import stack from "../images/stack.svg";
import zero from "../images/zero.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#151515] ">
      <h1 className="text-center  max-md:text-3xl mt-4 text-white text-bold text-4xl py-10 ">
        مواقع أخرى للاستفادة
      </h1>
      <div className="w-5/6 m-auto max-md:w-full max-md:flex-col max-md:gap-7 max-md:px-24 flex justify-center items-center pb-10">
        <a
          className="w-1/4 max-md:w-full"
          href="https://www.w3schools.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={w3schools} alt="" className=" cursor-pointer" />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/"
          target="_blank"
          rel="noreferrer"
          className="w-1/4 max-md:w-full"
        >
          <img src={mdn} alt="" className="  cursor-pointer" />
        </a>
        <a
          className="w-1/4 max-md:w-full"
          href="https://stackoverflow.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={stack}
            alt=""
            className=" pr-8 cursor-pointer max-md:mt-6"
          />
        </a>

        <a
          href="https://elzero.org/"
          target="_blank"
          rel="noreferrer"
          className="relative cursor-pointer "
        >
          <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl text-nowrap">
            اكاديمية الزيرو
          </h1>
          <img
            src={zero}
            alt=""
            className="w-52 max-md:w-full max-md:p-3 -translate-y-5 max-w-52"
          />
        </a>
      </div>
      <div className="text-white  border-gray-400 border-t p-10 flex justify-between items-start max-md:flex-col w-5/6 max-md:w-full m-auto">
        <h1> ارشدني, جميع الحقوق محفوظة. 2020 - 2024</h1>
        <div className="flex justify-center items-center gap-10 max-md:mt-3">
          <h1 onClick={() => navigate("/")}>الرئيسية</h1>
          <a href="#courses">الكورسات</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
