import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import OneCourse from "./pages/OneCourse";
import Lesson from "./pages/Lesson";
import Suggest from "./components/Suggest";
import RoadMaps from "./pages/RoadMaps";
import Android from "./pages/Android";
import Ios from "./pages/Ios";
import CrossPlateform from "./pages/CrossPlateform";
import PrivetRoutes from "./components/PrivetRoutes";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "roadmaps",
        element: <RoadMaps />,
      },
      {
        path: "onecourse/:name/:lecturer/:lang",
        element: (
          <PrivetRoutes>
            <OneCourse />
          </PrivetRoutes>
        ),
      },
      {
        path: "Lesson",
        element: (
          <PrivetRoutes>
            <Lesson />
          </PrivetRoutes>
        ),
      },
      {
        path: "suggest",
        element: <Suggest />,
      },
      {
        path: "android",
        element: (
          <PrivetRoutes>
            <Android />
          </PrivetRoutes>
        ),
      },
      {
        path: "ios",
        element: (
          <PrivetRoutes>
            <Ios />
          </PrivetRoutes>
        ),
      },
      {
        path: "crossplateform",
        element: (
          <PrivetRoutes>
            <CrossPlateform />
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
