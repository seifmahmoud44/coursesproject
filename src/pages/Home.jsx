import React from "react";
import englishflutter from "../englishflutter.json";
import CourseCard from "../components/CourseCard";
import englishCourseImg from "../images/fluterenglish.webp";
import flutter from "../images/flutter.png";
import dart from "../images/dart.png";

const Home = () => {
  return (
    <div className="relative   ">
      <div className="flex flex-col justify-center items-center  gap-9 h-full bg-home px-4">
        <h1 className="bg-black bg-opacity-40 px-2 text-white text-4xl text-center py-3 max-md:text-3xl">
          العديد من الكورسات التي تلبي جميع الاختصاصات
        </h1>
        <button className="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-105 ">
          تصفح الكورسات
        </button>
      </div>
      {/* course section */}
      <div className="w-5/6 m-auto max-md:w-full p-5 grid-cards">
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          lang={"English"}
          count={englishflutter.length}
          img={flutter}
        />
        <CourseCard
          text={"تعلم flutter باللغة العربية"}
          count={englishflutter.length}
          img={flutter}
        />
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          count={englishflutter.length}
          img={dart}
        />
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          count={englishflutter.length}
          img={englishCourseImg}
        />
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          count={englishflutter.length}
          img={englishCourseImg}
        />
      </div>
    </div>
  );
};

export default Home;
