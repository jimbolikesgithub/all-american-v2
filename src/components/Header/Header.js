import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/test-header.png';

function Header() {
  // state is `active`
  const [active, setActive] = useState('nav-list');
  // state is `toggleIcon`
  const [toggleIcon, setToggleIcon] = useState('nav-toggle');

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav-active')
      : setActive('nav-list');

    // Toggle Icon

    toggleIcon === 'nav-toggle'
      ? setToggleIcon('nav-toggle toggle')
      : setToggleIcon('nav-toggle');
  };

  return (
    <header>
      {/* Navigation */}
      <nav class="navbar">
        <a href="#" className="logo-link">
          <img
            src={logo}
            className="logo"
            alt="All American Doors & Windows logo"
          ></img>
        </a>

        <ul className={active}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Vendors
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner-area">
        <div className="banner-content">
          <h1>LOCAL. TRUSTED.</h1>
          <h1>& ALL AMERICAN.</h1>
          <a href="#" className="header-home-btn">
            Click pls
          </a>
        </div>
      </div>

      {/* <div>
        <p>penis</p>
      </div>
      <div>
        <p>penis</p>
      </div>
      <div>
        <p>penis</p>
      </div>
      <div>
        <p>penis</p>
      </div>
      <div>
        <p>penis</p>
      </div>
      <div>
        <p>penis</p>
      </div> */}
    </header>
  );
}

export default Header;
