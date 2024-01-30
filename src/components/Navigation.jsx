import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import { FaHome } from "react-icons/fa";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={`${styles.navIcon} ${styles.icon}`}
        to="/"
        activeClassName={styles.active}
      >
        <FaHome />
      </NavLink>
    </nav>
  );
}

export default Navigation;
