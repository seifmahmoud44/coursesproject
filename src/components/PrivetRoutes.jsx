import Cookies from "js-cookie";

import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  console.log(Cookies.get("token") === undefined);

  if (Cookies.get("token") === undefined) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};

export default PrivetRoutes;
