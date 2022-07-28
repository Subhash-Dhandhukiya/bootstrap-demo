import React from "react";
import Logo from "../assets/Logo.svg";

//35b8be
const Navbar = () => {
  return (
    <div>
      <div className="color-primary p-3 text-white text-center">
        <p>We're open and available for takeaway & delivery. Order Now</p>
      </div>

      <nav className="navbar navbar-expand-sm bg-white container">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={Logo} alt="logo" className="img-fluid logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Company
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
