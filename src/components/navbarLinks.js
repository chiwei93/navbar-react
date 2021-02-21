import React from "react";
import { FaFacebook, FaBehance, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "./link";
import "./navbarLinks.css";

const NavbarLinks = ({ showLinks }) => {
  const active = showLinks ? "active" : "";

  return (
    <div className={`navbar-link-container ${active}`}>
      <ul className="content-link-list">
        <li className="content-item">
          <Link className="content-link" href="/">
            Home
          </Link>
        </li>
        <li className="content-item">
          <Link className="content-link" href="/about">
            About
          </Link>
        </li>
        <li className="content-item">
          <Link className="content-link" href="/projects">
            Projects
          </Link>
        </li>
        <li className="content-item">
          <Link className="content-link" href="/contact">
            Contact
          </Link>
        </li>
        <li className="content-item">
          <Link className="content-link" href="/profile">
            Profile
          </Link>
        </li>
      </ul>

      <ul className="social-link-list">
        <li className="social-item">
          <a className="social-link" href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li className="social-item">
          <a className="social-link" href="https://twitter.com/">
            <FaTwitter />
          </a>
        </li>
        <li className="social-item">
          <a className="social-link" href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
        </li>
        <li className="social-item">
          <a className="social-link" href="https://www.behance.net/">
            <FaBehance />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
