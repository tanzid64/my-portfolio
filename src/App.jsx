import SiteHeader from "./Components/Header/SiteHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact/Contact";
import Works from "./Components/Portfolio/Works";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SiteHeader />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Skills />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/projects",
          element: <Works />,
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
