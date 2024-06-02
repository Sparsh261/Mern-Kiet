import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homepage.js";
import History from "./src/pages/history.js";
import HistoryInfoPage from "./src/pages/historyInfoPage.js";
import ImageGenerator from "./src/pages/imageGenerator.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PointsContext from "./src/context/pointsContext.js";


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);



const App = () => {

  const [userPoints, setUserPoints] = useState(20);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/generator",
      element: <ImageGenerator />
    },
    {
      path: "/history",
      element: <History />
    },
    {
      path: "/history/:id",
      element: <HistoryInfoPage />
    },
  ]);

  return (        
    <PointsContext.Provider value={{ userPoints: userPoints, setUserPoints: setUserPoints,  }}>
        <RouterProvider router={router} />
    </PointsContext.Provider>
);

}

root.render(<App />);