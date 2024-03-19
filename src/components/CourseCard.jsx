import React from "react";

const CourseCard = ({ img, text, count }) => {
  return (
    <div className="relative bg-slate-300 h-[400px] flex flex-col justify-between items-center">
      <img src={img} alt="" className="w-24  object-contain p-9" />
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default CourseCard;
