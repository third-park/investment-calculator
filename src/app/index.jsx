import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Calculator from "../pages/Calculator/Calculator.jsx";
import Minigame from "../pages/Minigame/Minigame.jsx";
import ErrorPage from "../pages/Error/ErrorPage.jsx";
import MgmProjects from "../pages/MgmProjects/MgmProjects.jsx";

import "./styles/index.css";

// Data API 방식 라우터구성
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "Minigame",
        element: <Minigame />,
      },
      {
        path: "mgmProjects",
        element: <MgmProjects />
      }
    ],
  },
]);

//루트
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
