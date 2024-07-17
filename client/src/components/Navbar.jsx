import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.jpeg";
function Navbar() {
  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg navbar-light background-color: #e3f2fd;`}
    >
      <a className={`${styles.navbarBrand} navbar-brand`} href="/">
        <img style={{ height: "3rem", width: "4rem" }} src={logo} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${styles.navbarCollapse}`}
        id="navbarNav"
      >
        <ul className={`navbar-nav ${styles.navbarNav}`}>
          <li className={`nav-item active ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Home
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/about">
              About
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/admission">
              Admission
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/academics">
              Academics
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/departments">
              Departments
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/facilities">
              Facilities
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/gallery">
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
