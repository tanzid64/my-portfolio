import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";
import NavFooter from "./NavFooter";
import { menus } from "./Data/NavMenu";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-gray-200 dark:bg-cardDark min-h-screen text-primaryDark dark:text-gray-100 ${
        open ? "w-72" : "w-16"
      } duration-500 px-4 relative`}
    >
      {/* Nav Toggle */}
      <div
        className={`py-3 flex gap-2  ${
          open ? "flex-row justify-end items-center" : "flex-col items-center"
        }`}
      >
        <DarkThemeToggle className="hover:bg-gray-200" />
        <HiMenuAlt3
          size={26}
          className={`cursor-pointer hidden md:block`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* Nav Menu */}

      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white dark:bg-gray-900 dark:text-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 bg-gray-400 dark:bg-slate-800 w-full">
        <NavFooter open={open} />
      </div>
    </div>
  );
};

export default Nav;
