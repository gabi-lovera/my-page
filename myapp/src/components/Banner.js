import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
export const Banner = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaGithub />
                    </li>
                    <li>
                      <FaLinkedin />
                    </li>
                  </ul>
                  <h1>I am Gabriel Lovera</h1>
                  <p>
                      im Gabriel, student at UTN San Francisco and tech entusiactic
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </header>
    );

}

export default Banner;