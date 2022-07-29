import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log("");
  return (
    <li class="nav-item px-2">
      <Link
        {...props}
        class={match ? "nav-link active-color" : "nav-link"}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className="color-primary p-2 text-white text-center">
        <p className="mt-2">
          We're open and available for takeaway & delivery. Order Now
        </p>
      </div>

      <nav className="navbar navbar-expand-sm bg-white container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="logo" className="img-fluid logo" />
          </Link>
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
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/order">Order</CustomLink>
            <CustomLink to="/company">Company</CustomLink>
            <CustomLink to="/faq">FAQ</CustomLink>
            <CustomLink to="contact">Contact</CustomLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
