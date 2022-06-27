import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/test-header.png';
// Images for the header change per page
import header1 from '../../assets/images/aad&w-bg-1.jpg';
import header2 from '../../assets/images/aad&w-bg-2.jpg';
import header3 from '../../assets/images/aad&w-bg-3.jpg';
import header4 from '../../assets/images/aad&w-bg-4.jpg';
import header5 from '../../assets/images/aad&w-bg-5.jpg';
import header6 from '../../assets/images/aad&w-bg-6.jpg';
import header7 from '../../assets/images/aad&w-bg-7.jpg';

function Header() {
  // Menu Function
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

  // Y-axis Header Scroll Animation
  // state is `navbar`
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  // For the header change per page
  const { pathname } = useLocation();

  const homeHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const aboutHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const productsHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const vendorsHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const contactHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header5})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const otherHeader = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header6})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const other1Header = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${header7})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <header>
      {/* Banner */}
      <div
        className="banner-area"
        style={
          pathname === '/'
            ? homeHeader
            : aboutHeader | (pathname === '/about')
            ? aboutHeader
            : productsHeader | (pathname === '/products')
            ? productsHeader
            : vendorsHeader | (pathname === '/vendors')
            ? vendorsHeader
            : contactHeader | (pathname === '/contact')
            ? contactHeader
            : otherHeader | (pathname === '/credit')
            ? other1Header
            : homeHeader
        }
      >
        <div className="banner-content">
          <h1 className="header-top-txt">LOCAL. TRUSTED.</h1>
          <h1>& ALL AMERICAN.</h1>
        </div>
        <a href="/products" className="header-home-btn">
          Check it out
        </a>
      </div>

      {/* Navigation */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <a href="/" className="logo-link">
          <img
            src={logo}
            className="logo"
            alt="All American Doors & Window logo"
          ></img>
        </a>

        <ul className={active}>
          <li className="nav-item top-nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/vendors" className="nav-link">
              Vendors
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
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
    </header>
  );
}

export default Header;
