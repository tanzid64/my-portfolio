import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Flowbite } from "flowbite-react";


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      }
    ]
  )
  return (
    <div className="dark:bg-primaryDark">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
