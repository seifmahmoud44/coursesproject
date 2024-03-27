import React from "react";
import CourseCard from "../components/CourseCard";
import flutter from "../images/flutter.png";
import englishflutter from "../englishflutter.json";
import arabicflutter from "../arabicflutter.json";
import swiftarabic from "../swiftarabic.json";
import swiftenglish from "../swiftenglish.json";
import swift from "../images/swift.png";

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
  );
};

export default Courses;
