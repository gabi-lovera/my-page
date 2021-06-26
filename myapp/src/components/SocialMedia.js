import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <ul className="header__ul">
      <li>
        <FaFacebookF />
      </li>
      <a href="https:www.google.com" target="_blank">
        <li>
          <FaTwitter />
        </li>
      </a>
      <a href="https:www.github.com/Gabsl09" target="_blank">
        <li>
          <FaGithub />
        </li>
      </a>

      <a href="https:www.linkedin.com/in/gabriellovera" target="_blank">
        <li>
          <FaLinkedin />
        </li>
      </a>
    </ul>
  );
};

export default SocialMedia;
