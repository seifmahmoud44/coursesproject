import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import reactNativeImg from "../images/reactnative.png";
import reactNative from "../Reactnativ.json";
import englishflutter from "../englishflutter.json";
import arabicflutter from "../arabicflutter.json";
import swiftArabic from "../swiftarabic.json";
import swiftEnglish from "../swiftenglish.json";
import flutter from "../images/flutter.png";
import swiftImg from "../images/swift.png";
import gsap from "gsap";

const Ios = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const tl = gsap.timeline();
    tl.to(".box", { scale: 1, stagger: 0.2, ease: "sine.out" });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold">IOS</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5  grid-cards">
        <div className="box scale-0">
          <CourseCard
            text={"learn Swift with English"}
            count={swiftEnglish.length}
            lang={"English"}
            img={swiftImg}
            data={swiftEnglish}
            authur={"Abdulrahman Magdy"}
          />
        </div>
        <div className="box scale-0">
          <CourseCard
            text={"تعلم Swift باللغة العربية"}
            count={swiftArabic.length}
            lang={"العربية"}
            img={swiftImg}
            data={swiftArabic}
            authur={"Abdulrahman Magdy"}
          />
        </div>
      </div>
    </div>
  );
};

export default Ios;
