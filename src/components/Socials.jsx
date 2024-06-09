import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
const Socials = ({ containerStyle, iconStyle }) => {
  const socials = [
    {
      icon: <FaGithub />,
      path: "https://github.com/tanzid64",
    },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/tanzid64/",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/tanzid64",
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
