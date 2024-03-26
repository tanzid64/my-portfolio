import { FaHome } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { GrServices } from "react-icons/gr";


export const menus = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "Expertise", link: "/", icon: GiSkills },
  { name: "Services", link: "/services", icon: GrServices },
  { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];
