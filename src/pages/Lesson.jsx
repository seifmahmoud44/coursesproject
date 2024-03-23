import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Lesson = () => {
  const location = useLocation();

  const { state } = location;
  const { current, lessons } = state;
  const [id, setId] = useState(current);

  return (
    <div className="w-5/6 m-auto max-md:w-full mt-10">
      <div
        dangerouslySetInnerHTML={{ __html: lessons[id].video }}
        className="vid"
      />
      <div className="w-2/3 max-md:w-full shadow-custom p-10 border border-gray-200 rounded-md m-auto mt-10">
        <h1 className="px-6 py-3 bg-blue-500 text-white  m-auto w-fit mb-5">
          قائمة الدروس
        </h1>
        <ol className="list-decimal px-3">
          {lessons &&
            lessons.map((item, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <li
                  onClick={() => setId(index)}
                  className={`my-7 cursor-pointer hover:text-blue-500 transition-all ${
                    index === id ? "text-blue-500" : ""
                  }`}
                  key={index}
                >
                  {item.title}
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Lesson;
