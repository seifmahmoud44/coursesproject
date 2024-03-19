import React from "react";
import logo from "../images/WhatsApp Image 2024-03-16 at 11.22.04 PM.jpeg";
import menuIcon from "../images/hamburger.png";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenMenu }) {
  const navigate = useNavigate();
  return (
    <div className=" h-24 bg-black ">
      <div className="  w-5/6 max-md:w-full m-auto flex max-md:justify-between justify-start items-center h-full max-md:px-5 ">
        <img src={logo} alt="" className="invert max-md:w-40 " />
        <div className="flex justify-center items-center h-full flex-grow gap-6 max-md:hidden ">
          <h1
            onClick={() => navigate("/")}
            className="text-white hover:text-blue-300 transition-all cursor-pointer"
          >
            الرئيسية
          </h1>
          <h1
            onClick={() => navigate("/courses")}
            className="text-white hover:text-blue-300 transition-all cursor-pointer"
          >
            الكورسات
          </h1>
          <h1
            onClick={() => navigate("/suggest")}
            className="text-white hover:text-blue-300 transition-all cursor-pointer"
          >
            اقترح كورسات
          </h1>
        </div>
        {/* menu */}
        <div className="md:hidden">
          <img
            onClick={() => setOpenMenu(true)}
            src={menuIcon}
            alt=""
            className="w-10 cursor-pointer hover:scale-125 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
