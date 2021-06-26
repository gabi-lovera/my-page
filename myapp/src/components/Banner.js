import React from 'react'
import SocialMedia from "./SocialMedia";
export const Banner = () => {
    
  return (
    
      <header className="header">
        <a name="Home"></a>
        <div className="container">
          <div className="row">
          <div className="col-6">
        <div className="header__content">
          <div className="header__section">
            <SocialMedia />
            <h1>I am Gabriel Lovera</h1>
            <p>im Gabriel, student at UTN San Francisco and tech entusiactic</p>
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