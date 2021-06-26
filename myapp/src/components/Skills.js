import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

export const Skills = () => {
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
                  <h1>My Skills</h1>
                  <p>
                  All the programming languages<br /> 
                  that I was learning
                  </p>
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
    )
}

export default Skills;