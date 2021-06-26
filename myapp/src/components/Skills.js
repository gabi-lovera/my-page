import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
import ProgressBar from './ProgressBar'

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
                      <a
                        href="https:www.linkedin.com/in/gabriellovera"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                  <h1>My Skills</h1>
                  <p>
                    All the programming languages
                    <br />
                    that I was learning
                  </p>
                  <div className="skills">
                    <ProgressBar title={"HTML5"} width={"30%"} text={"30%"} />
                    <ProgressBar title={"HTML5"} width={"50%"} text={"50%"} />
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
        <a name="Contact"></a>
      </header>
    );
    
}

export default Skills;