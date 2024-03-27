import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const OneCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const { name, lecturer, lang } = useParams();
  return (
    <div id="main" className="w-5/6 m-auto max-md:w-full px-5 bg-[#FFFFFF] ">
      <h1 className="text-center text-3xl font-bold my-10">{name}</h1>
      <div className="flex justify-between items-start max-md:flex-col gap-10">
        <div className="w-2/3 max-md:w-full shadow-custom p-10 border border-gray-200 rounded-md">
          <h1 className="px-6 py-3 bg-blue-500 text-white  m-auto w-fit mb-5">
            قائمة الدروس
          </h1>
          <ol className="list-decimal px-3">
            {state &&
              state.map((item, index) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <li
                    onClick={() =>
                      navigate("/lesson", {
                        state: { current: index, lessons: state },
                      })
                    }
                    className="my-7 cursor-pointer hover:text-blue-500 transition-all"
                    key={index}
                  >
                    {item.title}
                  </li>
                );
              })}
          </ol>
        </div>
        <div className="w-1/3 max-md:w-full shadow-custom p-10 border border-gray-200 rounded-md">
          <h1 className="px-6 py-3 bg-blue-500 text-white  m-auto w-fit mb-5">
            معلومات الكورس
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p>المحاضر</p>
              <p>{lecturer}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>عدد الدروس</p>
              <p>{state.length}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>اللغة</p>
              <p>{lang}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCourse;
