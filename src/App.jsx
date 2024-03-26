import SiteHeader from "./Components/Header/SiteHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SiteHeader />
          <Footer/>
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
