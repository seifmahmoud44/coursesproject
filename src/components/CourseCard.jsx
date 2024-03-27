import React from "react";
import arrow from "../images/arrow.png";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ img, text, count, lang, data, authur }) => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/onecourse/${text}/${`Net Ninja`}/${lang}`, {
      state: data,
    });
  };
  return (
    <div className="relative h-[400px] flex flex-col justify-between items-center border border-gray-300">
      <div className="absolute top-3 left-0 bg-blue-500 text-white px-4 py-2">
        <h2>{`${count} درس`}</h2>
      </div>
      <div className="absolute top-16 left-0 bg-red-600 text-white px-4 py-2">
        <h2>{`${lang}`}</h2>
      </div>
      <div className="w-full p-5 h-64">
        <img src={img} alt="" className=" object-contain m-auto max-w-44" />
      </div>
      <div className="flex-grow w-full p-5 ">
        <h1 className="text-2xl font-bold mb-5">{text}</h1>

        <p className="">كورس Flutter باللغة الانجليزية</p>
        <div className="flex justify-between items-center  ">
          <p
            rel="noreferrer"
            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"
            target="_blank"
            className="hover:text-blue-500 transition-all"
          >
            {authur}
          </p>
          <div
            onClick={handelClick}
            className="flex justify-between items-center gap-4 hover:gap-2 transition-all cursor-pointer hover:text-blue-500"
          >
            <p> تصفح الكورس</p>
            <img src={arrow} alt="" className="w-6 rotate-180 mt-1 g" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
