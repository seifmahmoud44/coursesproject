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

const Ios = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl py-9 font-bold">IOS</h1>
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
          text={"learn Swift with English"}
          count={swiftEnglish.length}
          lang={"English"}
          img={swiftImg}
          data={swiftEnglish}
          authur={"Abdulrahman Magdy"}
        />
        <CourseCard
          text={"تعلم Swift باللغة العربية"}
          count={swiftArabic.length}
          lang={"العربية"}
          img={swiftImg}
          data={swiftArabic}
          authur={"Abdulrahman Magdy"}
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

export default Ios;
