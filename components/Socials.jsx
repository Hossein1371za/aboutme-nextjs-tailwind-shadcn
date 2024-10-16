import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, i) => (
        <Link className={iconStyles} key={i} href={social.path}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
