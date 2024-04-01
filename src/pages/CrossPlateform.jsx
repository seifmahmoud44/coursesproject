import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import reactNativeImg from "../images/reactnative.png";
import reactNative from "../Reactnativ.json";
import englishflutter from "../englishflutter.json";
import arabicflutter from "../arabicflutter.json";
import flutter from "../images/flutter.png";
import gsap from "gsap";

const CrossPlateform = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const tl = gsap.timeline();
    tl.to(".box", { scale: 1, stagger: 0.3, ease: "sine.out" });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold">Cross Platefrom</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5  grid-cards">
        <div className="box scale-0">
          <CourseCard
            text={"Flutter Tutorial for Beginners"}
            lang={"English"}
            count={englishflutter.length}
            img={flutter}
            data={englishflutter}
            authur={"Net Ninja"}
          />
        </div>
        <div className="box scale-0">
          <CourseCard
            text={"تعلم flutter باللغة العربية"}
            count={arabicflutter.length}
            lang={"العربية"}
            img={flutter}
            data={arabicflutter}
            authur={"Weal Abo Hamza"}
          />
        </div>

        <div className="scale-0 box">
          <CourseCard
            text={"تعلم React Native باللغة العربية"}
            count={reactNative.length}
            lang={"العربية"}
            img={reactNativeImg}
            data={reactNative}
            authur={"mohamed eldsouky"}
          />
        </div>
      </div>
    </div>
  );
};

export default CrossPlateform;
