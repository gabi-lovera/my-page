import React from 'react'
import {FaFacebookF,FaPinterest,FaTwitch,FaLinkedin,FaTwitter,FaInstagram} from "react-icons/fa"
export const Banner = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaPinterest />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </header>
    );

}

export default Banner;