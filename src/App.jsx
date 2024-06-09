import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact, Home, Layout, Resume, Services, Work } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
