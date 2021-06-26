import React from 'react'

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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Skill</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Nav;