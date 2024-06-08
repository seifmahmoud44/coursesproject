import Cookies from "js-cookie";

import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  console.log(Cookies.get("email") === undefined);

  if (Cookies.get("email") === undefined) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};

export default PrivetRoutes;
