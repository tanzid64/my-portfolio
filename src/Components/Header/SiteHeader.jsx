import { Outlet } from "react-router-dom";
import Intro from "./Intro/Intro";
import Nav from "./SideBar/Nav";

const SiteHeader = () => {
  return (
    <section className="flex ">
      <Nav />
      <div className="p-3 text-xl text-gray-900 font-semibold w-full ">
        <Intro className="" />


          <Outlet />

      </div>
    </section>
  );
};

export default SiteHeader;
