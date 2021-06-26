import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

export const SocialMedia = () => {
    return (
      <ul className="header__ul">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <a href="https:www.google.com" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https:www.github.com/Gabsl09" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https:www.linkedin.com/in/gabriellovera" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    );
}

export default SocialMedia;