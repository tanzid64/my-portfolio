import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
const Socials = ({ containerStyle, iconStyle }) => {
  const socials = [
    {
      icon: <FaGithub />,
      path: "",
    },
    {
      icon: <FaLinkedinIn />,
      path: "",
    },
    {
      icon: <FaFacebook />,
      path: "",
    },
  ];
  return (
    <div className={containerStyle}>
      {socials.map((social) => (
        <a
          key={social.path}
          href={social.path}
          target="_blank"
          rel="noreferrer"
          className={iconStyle}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
export default Socials;
