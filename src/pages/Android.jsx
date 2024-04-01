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
const Android = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold">الاندرويد</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5  grid-cards">
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          lang={"English"}
          count={englishflutter.length}
          img={flutter}
          data={englishflutter}
          authur={"Net Ninja"}
        />
        <CourseCard
          text={"تعلم flutter باللغة العربية"}
          count={arabicflutter.length}
          lang={"العربية"}
          img={flutter}
          data={arabicflutter}
          authur={"Weal Abo Hamza"}
        />
        <CourseCard
          text={"تعلم Kotlin باللغة العربية"}
          count={kotlin.length}
          lang={"العربية"}
          img={kotlinImg}
          data={kotlin}
          authur={"Abdulrahman Magdy"}
        />
        <CourseCard
          text={"تعلم JAVA باللغة العربية"}
          count={java.length}
          lang={"العربية"}
          img={javaImg}
          data={java}
          authur={"mohamed eldsouky"}
        />
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
  );
};

export default Android;
