/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/WhatsApp Image 2024-03-16 at 11.22.04 PM.jpeg";
import menuIcon from "../images/hamburger.png";
import close from "../images/close.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signout } from "../useApi";
function Navbar({ setOpenMenu, openMenu, none }) {
  const navigate = useNavigate();
  const handelNav = () => {
    if (Cookies.get("token") === undefined) {
      navigate("/signin");
    }
  };
  return (
    <div id="navbar" className={` h-24 bg-black `}>
      <div className="  w-5/6 max-md:w-full m-auto flex max-md:justify-between justify-start items-center h-full max-md:px-5 ">
        <img src={logo} alt="" className="invert max-md:w-40 " />

        <div className="flex justify-center items-center h-full flex-grow gap-6 max-md:hidden ">
          <h1
            onClick={() => navigate("/")}
            className="text-white hover:text-blue-300 transition-all cursor-pointer"
          >
            الرئيسية
          </h1>
          <div className="group relative ">
            <h1
              onClick={() => navigate("/roadmaps")}
              className="text-white hover:text-blue-300 transition-all cursor-pointer"
            >
              مسارات
            </h1>

            <div className="z-20 rounded-md border-t-4 border-red-300 group-hover:block hidden absolute top-full left-1/2 -translate-x-1/2 w-fit h-fit bg-white shadow-md text-black ">
              <h1
                onClick={() => navigate("/android")}
                className="cursor-pointer py-3 px-5 hover:bg-slate-300 transition-all"
              >
                Android
              </h1>
              <h1
                onClick={() => navigate("/ios")}
                className="cursor-pointer py-3 px-5 hover:bg-slate-300 transition-all"
              >
                IOS
              </h1>
              <h1
                onClick={() => navigate("/crossplateform")}
                className="cursor-pointer py-3 px-5 hover:bg-slate-300 transition-all text-nowrap"
              >
                Cross Plateform
              </h1>
            </div>
          </div>
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
        <div className="flex justify-center items-center gap-4 max-md:hidden">
          <h1
            onClick={handelNav}
            className="cursor-pointer text-white text-base"
          >
            {Cookies.get("token") !== undefined
              ? `مرحبا ${Cookies.get("email")}`
              : "تسجيل الدخول"}
          </h1>
          {Cookies.get("token") !== undefined && (
            <h1
              onClick={() => signout().then((e) => navigate("/"))}
              className="cursor-pointer text-white text-base border border-red-500 rounded-md py-2 px-4"
            >
              تسجيل خروج
            </h1>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-full bg-black z-20  transition-all bg-opacity-70 ${
          openMenu ? "" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => {
            setOpenMenu(false);
          }}
          className="absolute right-5 top-5 text-white"
        >
          <img src={close} alt="" className="w-10" />
        </button>
        <div className="h-full w-full flex flex-col justify-center items-start py-5 gap-10">
          <h1
            onClick={handelNav}
            className="cursor-pointer text-white text-2xl mx-auto"
          >
            {Cookies.get("token") !== undefined
              ? `مرحبا ${Cookies.get("name")}`
              : "تسجيل الدخول"}
          </h1>
          <h1
            onClick={() => {
              navigate("/");
              setOpenMenu(false);
            }}
            className="text-white text-4xl border-b w-full pb-3 pr-6  cursor-pointer hover:pr-8 transition-all hover:border-blue-400"
          >
            الرئيسية
          </h1>
          <h1
            onClick={() => {
              navigate("/roadmaps");
              setOpenMenu(false);
            }}
            className="text-white text-4xl border-b w-full pb-3 pr-6 cursor-pointer hover:pr-8 transition-all hover:border-blue-400"
          >
            مسارات
          </h1>
          <h1
            onClick={() => {
              navigate("/suggest");
              setOpenMenu(false);
            }}
            className="text-white text-4xl border-b w-full pb-3 pr-6 cursor-pointer hover:pr-8 transition-all hover:border-blue-400"
          >
            اقترح كورس
          </h1>

          <div className="flex justify-center items-center gap-4  w-full">
            {Cookies.get("token") !== undefined && (
              <h1
                onClick={() => {
                  signout().then((e) => navigate("/"));
                  setOpenMenu(false);
                }}
                className="cursor-pointer text-white text-base border border-red-500 rounded-md py-2 px-4 bg-red-500"
              >
                تسجيل خروج
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
