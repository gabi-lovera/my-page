import React from "react";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1 class="navport">MyPortfolio</h1>
            </div>
          </ul>
          <ul className="navbar__right">
            <li>
              <a className="ref" href="#Home">
                Home
              </a>
            </li>
            <li>
              <a className="ref" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="ref" href="#Skill">
                Skill
              </a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a className="ref" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
