import React from "react";
import englishflutter from "../englishflutter.json";
import CourseCard from "../components/CourseCard";

import flutter from "../images/flutter.png";
import swift from "../images/swift.png";
import arabicflutter from "../arabicflutter.json";
import swiftenglish from "../swiftenglish.json";
import swiftarabic from "../swiftarabic.json";

import { useNavigate } from "react-router-dom";
// import dart from "../images/dart.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative   ">
      <div className="flex flex-col justify-center items-center  gap-9 h-full bg-home px-4">
        <h1 className="bg-black bg-opacity-40 px-2 text-white text-4xl text-center py-3 max-md:text-3xl">
          العديد من الكورسات التي تلبي جميع الاختصاصات
        </h1>
        <button
          onClick={() => navigate("/courses")}
          className="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-105 "
        >
          تصفح الكورسات
        </button>
      </div>
      {/* course section */}
      <div id="courses">
        <h1 className="text-center text-4xl py-9 font-bold">الكورسات</h1>
        <div className="w-5/6 m-auto max-md:w-full p-5 grid-cards">
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
            count={swiftenglish.length}
            lang={"English"}
            img={swift}
            data={swiftenglish}
            authur={"Swiftful Thinking"}
          />
          <CourseCard
            text={"تعلم Swift باللغة العربية"}
            count={swiftarabic.length}
            lang={"العربية"}
            img={swift}
            data={swiftarabic}
            authur={"Muhammed Essa"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
