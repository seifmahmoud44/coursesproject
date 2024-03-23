import React from "react";
import CourseCard from "../components/CourseCard";
import flutter from "../images/flutter.png";
import englishflutter from "../englishflutter.json";

const Courses = () => {
  return (
    <div id="courses">
      <h1 className="text-center text-4xl py-9 font-bold">الكورسات</h1>
      <div className="w-5/6 m-auto max-md:w-full p-5 grid-cards">
        <CourseCard
          text={"Flutter Tutorial for Beginners"}
          lang={"English"}
          count={englishflutter.length}
          img={flutter}
          data={englishflutter}
        />
        <CourseCard
          text={"تعلم flutter باللغة العربية"}
          count={englishflutter.length}
          lang={"العربية"}
          img={flutter}
          data={englishflutter}
        />
      </div>
    </div>
  );
};

export default Courses;
