import React, { useState } from 'react';
import './header.css'
import logo from '../../assets/images/test-header.png'

function Header() {
  // Menu Function
  // state is `active`
  const [active, setActive] = useState('nav-list');
  // state is `toggleIcon`
  const [toggleIcon, setToggleIcon] = useState("nav-toggle");

  const navToggle = () => {
    active === 'nav-list'
    ? setActive('nav-list nav-active') 
    : setActive('nav-list');

    // Toggle Icon

    toggleIcon === 'nav-toggle' 
    ? setToggleIcon('nav-toggle toggle')
    : setToggleIcon('nav-toggle');
  }

  // Y-axis Header Scroll Animation
  // state is `navbar`
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <header>

      {/* Navigation */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>

          <a href="#" className="logo-link">
            <img src={logo} className="logo" alt="All American Doors & Windows logo"></img>
          </a>

        <ul className={active}>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Vendors</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
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
          <h1 className="header-top-txt">LOCAL. TRUSTED.</h1>
          <h1>& ALL AMERICAN.</h1>
        </div>
        <a href="#" className="header-home-btn">Check it out</a>
      </div>

    </header>
  );
}

export default Header;