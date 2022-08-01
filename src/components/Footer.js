import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid background-color ">
      <div className="container mt-5 p-4 ">
        <div className="row">
          <div className="mt-5 col-md-5">
            <img src={Logo} alt="logo" className="img-fluid logo" />

            <p className="mt-3 light-gray">Takeaway & Delivery template</p>
            <p className="light-gray">for small - medium businesses. </p>
          </div>

          <div className="mt-5 col-md-7 row">
            <div className="d-flex">
              <div className="mx-5">
                <p className="text-dark">COMPANY</p>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/order">
                      Order
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <p className="text-dark">TEMPLATE</p>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      Style Guide
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      Changelog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      Licence
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      Webflow University
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <p className="text-dark">FLOWBASE </p>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link light-gray" to="/">
                      More Cloneables
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />

        <div className="d-flex align-items-center justify-content-between mt-5">
          <p className="light-gray">Built by Flowbase · Powered by Webflow</p>
          <div className="d-flex">
            <a className="nav-link light-gray ps-5" href="">
              Facebook
            </a>
            <a className="nav-link light-gray ps-5" href="">
              Instagram
            </a>
            <a className="nav-link light-gray ps-5" href="">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
