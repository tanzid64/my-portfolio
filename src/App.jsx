import SiteHeader from "./Components/Header/SiteHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SiteHeader />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-gray-200 dark:bg-primaryDark">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
