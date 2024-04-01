import React from "react";
import { useNavigate } from "react-router-dom";

const RoadCard = ({ img, count, url, more }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/${url}`)}
        className="w-[400px] relative h-[400px] flex flex-col justify-between items-center border border-gray-300 cursor-pointer group"
      >
        <div className="absolute top-3 left-0 bg-blue-500 text-white px-4 py-2">
          <h2>{`${count} كورس`}</h2>
        </div>

        <div className="w-full p-5 h-full object-cover flex justify-center items-center">
          <img
            src={img}
            alt=""
            className={` object-contain m-auto max-w-44 group-hover:scale-125 transition-all`}
          />
        </div>
      </div>
    </div>
  );
};

export default RoadCard;
