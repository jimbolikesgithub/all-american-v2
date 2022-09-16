import React, { useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faUserAlt,
  faToolbox,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import './footer.css';

function Function() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className="pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-header">
              All American Doors & Windows Inc
            </h5>
            <p className="text-white">
              All American Doors & Windows Inc is family owned and operated in
              Simi Valley, California.{' '}
            </p>
            <p className="footer-time">1 (805) - 526 - 2080</p>
            <p className="footer-time">
              185 E Easy St G, Simi Valley, CA 93065
            </p>
          </div>

          <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-header">
              PAGES
            </h5>
            <p>
              <a href="/" className="footer-link" aria-label="Link to go Home">
                Home
              </a>
            </p>
            <p>
              <a
                href="/about"
                className="footer-link"
                aria-label="Link to go About"
              >
                About
              </a>
            </p>
            <p>
              <a
                href="/products"
                className="footer-link"
                aria-label="Link to go Product"
              >
                Products
              </a>
            </p>
            <p>
              <a
                href="/vendors"
                className="footer-link"
                aria-label="Link to go Vendors"
              >
                Vendors
              </a>
            </p>
            <p>
              <a
                href="/contact"
                className="footer-link"
                aria-label="Link to go Contact"
              >
                Contact
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold footer-header">
              HOURS
            </h5>
            <p className="text-white">Mon - Fri</p>
            <p className="footer-time">7AM - 5PM</p>
            <p>______</p>
            <p className="text-white">Sat</p>
            <p className="footer-time">9AM - 3PM</p>
            <p>______</p>
          </div>
        </div>

        <div className="row align-items-center copyright-section">
          <div className="col-md-7 col-lg-8">
            <p className="footer-copyright">
              Copyright 2022{' '}
              <span className="footer-copyright-span">
                &copy; All American Doors & Windows Inc
              </span>
            </p>
            {/* Credits */}
            <a href="/credit" className="credit-link">
              Icons-Flaticon
            </a>
          </div>

          <div className="col-md-5 col-lg-4">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="/" className="btn-floating btn-sm">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="footer-icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/about" className="btn-floating btn-sm">
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className="footer-icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/products" className="btn-floating btn-sm">
                  <FontAwesomeIcon
                    icon={faToolbox}
                    className="footer-icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/vendors" className="btn-floating btn-sm">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="footer-icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" className="btn-floating btn-sm">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="footer-icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <p className="footer-copyright text-xs">
                Website built by the <a className='cursor-pointer' href="https://the-jl-group-portfolio.vercel.app/" target="_blank" rel="noreferrer">JL Developers</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Function;
