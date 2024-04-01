import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";

import flutter from "../images/flutter.png";
import englishflutter from "../englishflutter.json";
import arabicflutter from "../arabicflutter.json";
import java from "../java.json";
import kotlin from "../Kotlin.json";
import reactNative from "../Reactnativ.json";

import javaImg from "../images/java.png";
import kotlinImg from "../images/kotlin.png";
import reactNativeImg from "../images/reactnative.png";
import gsap from "gsap";
const Android = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const tl = gsap.timeline();
    tl.to(".box", { scale: 1, stagger: 0.2, ease: "sine.out" });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold">الاندرويد</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5  grid-cards">
        <div className="box scale-0">
          <CourseCard
            text={"تعلم Kotlin باللغة العربية"}
            count={kotlin.length}
            lang={"العربية"}
            img={kotlinImg}
            data={kotlin}
            authur={"Abdulrahman Magdy"}
          />
        </div>
        <div className="box scale-0">
          <CourseCard
            text={"تعلم JAVA باللغة العربية"}
            count={java.length}
            lang={"العربية"}
            img={javaImg}
            data={java}
            authur={"mohamed eldsouky"}
          />
        </div>
      </div>
    </div>
  );
};

export default Android;
