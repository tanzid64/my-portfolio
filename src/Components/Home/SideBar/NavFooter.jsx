import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const NavFooter = ({open}) => {
  return (
    <div className={`dark:text-gray-100 flex gap-5 items-center p-5 text-xl justify-center ${!open && "flex-col"}`}>
      <FaGithub />
      <FaLinkedinIn/>
      <FaInstagram />
      <FaFacebook />
    </div>
  );
};

export default NavFooter;
