import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import {
  FaBriefcase,
  FaHome,
  FaTelegramPlane,
  FaTv,
  FaUser,
} from "react-icons/fa";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink className={`${styles.navIcon} ${styles.icon}`} to="/">
        <FaHome />
      </NavLink>

      <NavLink className={`${styles.navIcon} ${styles.icon}`} to="/about">
        <FaUser />
      </NavLink>

      <NavLink className={`${styles.navIcon} ${styles.icon}`} to="/resume">
        <FaBriefcase />
      </NavLink>
      <NavLink className={`${styles.navIcon} ${styles.icon}`} to="/portfolio">
        <FaTv />
      </NavLink>

      <NavLink className={`${styles.navIcon} ${styles.icon}`} to="/contact">
        <FaTelegramPlane />
      </NavLink>
    </nav>
  );
}

export default Navigation;
