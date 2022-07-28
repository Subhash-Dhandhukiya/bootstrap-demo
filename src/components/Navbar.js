import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;
  // const resolvedPath = useResolvedPath(href);
  // const isActive = useMatch({path:resolvedPath.pathname , end:true})
  return (
    <li class="nav-item px-2">
      <a
        {...props}
        class={path === href ? "nav-link active-color" : "nav-link"}
        href={href}
      >
        {children}
      </a>
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
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/order">Order</CustomLink>
            <CustomLink href="/company">Company</CustomLink>
            <CustomLink href="/faq">FAQ</CustomLink>
            <CustomLink href="contact">Contact</CustomLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
