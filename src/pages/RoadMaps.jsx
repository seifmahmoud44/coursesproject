import React, { useEffect } from "react";

import ios from "../images/ios.png";
import android from "../images/android.png";
import RoadCard from "../components/RoadCard";

const RoadMaps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="courses">
      <h1 className="text-center text-4xl py-9 font-bold">المسارات</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5 flex justify-around items-center">
        <RoadCard img={android} count={5} url={"android"} />
        <RoadCard img={ios} count={3} url={"ios"} />
      </div>
    </div>
  );
};

export default RoadMaps;
