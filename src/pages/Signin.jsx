import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from "../useApi";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import Cookies from "js-cookie";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);

    signin(data).then((e) => {
      if (e.message === "Login successful") {
        setLoading(false);
        Cookies.set("token", `${e.user.password}`);
        Cookies.set("name", `${e.user.name}`);
        Cookies.set("email", `${e.user.email}`);
        navigate("/");
      } else {
        setMessageErr(true);
        setLoading(false);
      }
    });
  };
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/4 m-auto max-md:w-full h-screen flex flex-col justify-center items-center px-10 gap-10"
      >
        <h1 className="text-4xl">تسجيل الدخول </h1>
        {messageErr && (
          <p role="alert" className="text-red-600">
            الايميل غير موجود
          </p>
        )}

        <div className="input-container ">
          <input
            {...register("email", {
              required: "الايميل مطلوب",
            })}
            id="email"
            type="text"
          />
          <label htmlFor="email" className="">
            الايميل
          </label>
          {errors.email && (
            <p role="alert" className="text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="input-container ">
          <input
            {...register("password", {
              required: "كلمة السر مطلوبة",
            })}
            id="password"
            type="password"
          />
          <label htmlFor="password" className="">
            كلمة السر
          </label>
          {errors.password && (
            <p role="alert" className="text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all"
          type="submit"
        >
          {loading ? <BeatLoader color="#ffff" /> : "ارسل"}
        </button>
        <h1
          onClick={() => navigate("/signup")}
          className="underline text-xl cursor-pointer"
        >
          سجل حساب جديد
        </h1>
      </form>
    </div>
  );
};

export default Signin;
