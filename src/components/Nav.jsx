import { NavLink } from "react-router-dom";

const Nav = () => {
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
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} className='capitalize font-medium hover:text-accent transition-all'>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};
export default Nav;
