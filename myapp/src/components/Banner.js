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
                    im Gabriel, student at UTN San Francisco and tech
                    entusiactic
                  </p>
                  <div className="header__buttons">
                    <a href="" className="btn btn-outline">
                      My portfolio
                    </a>
                    &nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
            <div className="banner__img">
              <img src="images/develop.png" alt="dev" />
            </div>
            </div>
          </div>
        </div>
      </header>
    );

}

export default Banner;