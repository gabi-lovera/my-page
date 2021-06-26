import React from "react";
import SocialMedia from "./SocialMedia";
import ProgressBar from "./ProgressBar";

export const Skills = () => {
  return (
    <div className="headerskill">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h1-Skill">My Skills</h1>

            <div className="header__content">
              <div className="header__section">
                <p>
                  All the programming languages
                  <br />
                  that I was learning
                </p>
                <ProgressBar title={"HTML5"} width={"75%"} text={"75%"} />
                <ProgressBar title={"CSS"} width={"60%"} text={"60%"} />
                <ProgressBar title={"JAVASCRIPT"} width={"50%"} text={"50%"} />
                <ProgressBar title={"REACT JS"} width={"40%"} text={"40%"} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <div className="banner__img">
                  <img className="prog__img" src="images/programming.png" alt="dev" />
                </div>

                <ProgressBar title={"JAVA"} width={"70%"} text={"70%"} />
                <ProgressBar title={"PYTHON"} width={"40%"} text={"40%"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a name="Contact"></a>
    </div>
  );
};

export default Skills;
