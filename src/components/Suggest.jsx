import React from "react";

const Suggest = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("yes");
  };
  return (
    <form
      onSubmit={handelSubmit}
      className=" flex flex-col justify-start items-center  w-5/6 m-auto max-md:w-full gap-6 p-10"
    >
      <h1 className="text-4xl">اتصل بنا</h1>
      <div className="input-container ">
        <input id="name" type="text" required />
        <label htmlFor="name" className="">
          ادخل اسمك بالكامل
        </label>
      </div>
      <div className="input-container ">
        <input id="email" type="email" required />
        <label htmlFor="email" className="">
          البريد الاليكتروني
        </label>
      </div>
      <div className="input-container ">
        <input id="phone" type="number" required />
        <label htmlFor="phone" className="">
          رقم الهاتف
        </label>
      </div>
      <div className="input-container ">
        <input id="topic" type="text" required />
        <label htmlFor="topic" className="">
          الموضوع
        </label>
      </div>
      <div className="input-container ">
        <textarea rows={10} cols={40} id="long" type="text" required />
        <label htmlFor="topic" className="">
          رسالتك
        </label>
      </div>
      <button
        className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all"
        type="submit"
      >
        ارسل
      </button>
    </form>
  );
};

export default Suggest;
