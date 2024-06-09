import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, NavLink } from "react-router-dom";

const MobileNav = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link to="/">
            <h1 className="text-4xl font-semibold">
              TH<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="capitalize text-xl  hover:text-accent transition-all"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
