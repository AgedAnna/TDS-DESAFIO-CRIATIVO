import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import HomeIndex from "./routes/Home/HomeIndex.tsx";
import ClimatesIndex from "./routes/Climates/ClimatesIndex.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeIndex /> },
      { path: "/weather/:city/:country", element: <ClimatesIndex /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
