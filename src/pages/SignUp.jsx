import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp, signin } from "../useApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BeatLoader } from "react-spinners";

const SignUp = () => {
  const navigate = useNavigate();
  const [messageErr, setMessageErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    const { confirmPassword, ...rest } = data;
    setLoading(true);
    signUp(rest).then((e) => {
      if (e.message === "User registered successfully") {
        signin(rest).then((e) => {
          Cookies.set("token", `${e.user?.password}`);
          Cookies.set("name", `${e.user?.name}`);
          Cookies.set("email", `${e.user?.email}`);
          navigate("/");
          setLoading(false);
        });
      } else {
        setLoading(false);
        setMessageErr(true);
      }
    });
  };

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/4 m-auto max-md:w-full h-screen flex flex-col justify-center items-center px-10 gap-10"
      >
        <h1 className="text-4xl">تسجيل حساب جديد</h1>
        {messageErr && (
          <p role="alert" className="text-red-600">
            الايميل موجود مسبقا
          </p>
        )}
        <div className="input-container ">
          <input
            {...register("name", {
              required: "الاسم مطلوب",
            })}
            id="name"
            type="text"
          />
          <label htmlFor="name" className="">
            ادخل اسمك بالكامل
          </label>
          {errors.firstName?.type === "required" && (
            <p role="alert" className="text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="input-container ">
          <input
            {...register("email", {
              required: "الايميل مطلوب",
              pattern: { value: emailPattern, message: "الايميل غير صحيح" },
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
            {...register("phone", {
              required: "الهاتف مطلوب",
              // minLength: { value: 11, message: "الهاتف اقل من 11 رقم" },
              // maxLength: { value: 11, message: "الهاتف اكثر من 11 رقم" },
            })}
            id="phone"
            type="number"
          />
          <label htmlFor="phone" className="">
            الهاتف
          </label>
          {errors.phone && (
            <p role="alert" className="text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="input-container ">
          <input
            {...register("password", {
              required: "كلمة السر مطلوبة",
              minLength: { value: 8, message: "كلمة السر قصيرة جدا" },
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
        <div className="input-container ">
          <input
            id="confirm"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                return value === watch("password") || "كلمة السر غير متطابقة";
              },
            })}
          />
          <label htmlFor="confirm" className="">
            تاكيد كلمة السر
          </label>
          {errors.confirmPassword && (
            <p role="alert" className="text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all"
          type="submit"
        >
          {loading ? <BeatLoader color="#ffff" /> : "ارسل"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
