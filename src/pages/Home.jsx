import React from "react";
import ios from "../images/ios.png";
import android from "../images/android.png";
import vid from "../images/vid.mp4";
import { useNavigate } from "react-router-dom";
import RoadCard from "../components/RoadCard";
import both from "../images/both.png";

// import dart from "../images/dart.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="   ">
      <div className="relative flex flex-col justify-center items-center  gap-9   px-4 h-[80vh]">
        <video
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={vid}
          autoPlay
          muted
          loop
        ></video>
        <h1 className="bg-black bg-opacity-40 px-2 text-white text-4xl text-center py-3 max-md:text-3xl">
          العديد من الكورسات التي تلبي جميع الاختصاصات
        </h1>
        <button
          onClick={() => navigate("/roadmaps")}
          className="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-105 "
        >
          تصفح الكورسات
        </button>
      </div>
      {/* course section */}

      <div id="courses">
        <h1 className="text-center text-4xl py-9 font-bold">المسارات</h1>
        <div className="w-5/6 m-auto max-md:w-full p-5  grid-cards">
          <RoadCard img={android} count={5} url={"android"} />
          <RoadCard img={ios} count={3} url={"ios"} />
          <RoadCard img={both} count={3} url={"crossplateform"} more={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
