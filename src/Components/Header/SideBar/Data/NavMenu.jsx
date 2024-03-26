import { FaHome } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";


export const menus = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "Expertise", link: "/", icon: GiSkills },
  { name: "Services", link: "/services", icon: GrServices },
  { name: "Contact Me", link: "/contact", icon: GrContact, margin: true },
  { name: "Projects", link: "/projects", icon: GoProjectSymlink },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];
