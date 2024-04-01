import React, { useEffect } from "react";

import ios from "../images/ios.png";
import both from "../images/both.png";
import android from "../images/android.png";
import RoadCard from "../components/RoadCard";
import gsap from "gsap";

const RoadMaps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const tl = gsap.timeline();
    tl.to(".box", { scale: 1, stagger: 0.3, ease: "sine.out" });
  }, []);
  return (
    <div id="courses">
      <h1 className="text-center text-4xl py-9 font-bold">المسارات</h1>
      <div className="flex-wrap gap-5 w-5/6 m-auto max-md:w-full p-5 flex justify-around items-center">
        <div className="scale-0 box">
          <RoadCard img={android} count={5} url={"android"} />
        </div>
        <div className="scale-0 box">
          <RoadCard img={ios} count={3} url={"ios"} />
        </div>
        <div className="scale-0 box">
          <RoadCard img={both} count={3} url={"crossplateform"} more={true} />
        </div>
      </div>
    </div>
  );
};

export default RoadMaps;
