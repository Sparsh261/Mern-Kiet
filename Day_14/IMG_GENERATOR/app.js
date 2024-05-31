import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homepage.js";
import ImageGenerator from "./src/pages/imageGenerator.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
        path: "/generator",
        element: <ImageGenerator/>
      },
  ]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <RouterProvider router={router} />;
}

root.render(<App />);