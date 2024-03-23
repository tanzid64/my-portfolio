import { FaHome } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const menus = [
  { name: "Home", link: "/home", icon: FaHome },
  { name: "Expertise", link: "/services", icon: GiSkills },
  { name: "messages", link: "/", icon: FiMessageSquare },
  { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];
