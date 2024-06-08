import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (data) => {
  try {
    const res = await axios.post(
      "https://login.e3lanotopia.software/api/register",
      data
    );
    console.log(data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const signin = async (data) => {
  try {
    const res = await axios.post(
      "https://login.e3lanotopia.software/api/login",
      data
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const signout = async () => {
  await Cookies.remove("email");
};
