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

const router = createBrowserRouter([
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
        element: <OneCourse />,
      },
      {
        path: "Lesson",
        element: <Lesson />,
      },
      {
        path: "suggest",
        element: <Suggest />,
      },
      {
        path: "android",
        element: <Android />,
      },
      {
        path: "ios",
        element: <Ios />,
      },
      {
        path: "crossplateform",
        element: <CrossPlateform />,
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
