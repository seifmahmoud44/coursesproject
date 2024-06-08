import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
const Suggest = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_2n00clp", "template_4v2uoho", form.current, {
        publicKey: "ypNhOepQ-b0fZR2HA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success("تم الارسال");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("حدث خطأ");
          setLoading(false);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={handelSubmit}
      className=" flex flex-col justify-start items-center  w-5/6 m-auto max-md:w-full gap-6 p-10"
    >
      <Toaster richColors position="bottom-right" />
      <h1 className="text-4xl">اتصل بنا</h1>
      <div className="input-container ">
        <input id="name" type="text" name="from_name" required />
        <label htmlFor="name" className="">
          ادخل اسمك بالكامل
        </label>
      </div>
      <div className="input-container ">
        <input id="email" type="text" name="user_email" required />
        <label htmlFor="email" className="">
          البريد الاليكتروني
        </label>
      </div>
      <div className="input-container ">
        <input id="phone" type="number" name="user_phone" required />
        <label htmlFor="phone" className="">
          رقم الهاتف
        </label>
      </div>
      <div className="input-container ">
        <input id="topic" type="text" name="user_subject" required />
        <label htmlFor="topic" className="">
          الموضوع
        </label>
      </div>
      <div className="input-container ">
        <textarea
          rows={10}
          cols={40}
          id="long"
          name="message"
          type="text"
          required
        />
        <label htmlFor="topic" className="">
          رسالتك
        </label>
      </div>
      <button
        className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all"
        type="submit"
        disabled={loading}
      >
        {loading ? "انتظر ....." : "ارسال"}
      </button>
    </form>
  );
};

export default Suggest;
