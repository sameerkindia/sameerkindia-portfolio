import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside>
      <ul className={styles.liLinks}>
        <li>
          <NavLink to="/">
            <span className={styles.link}>home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/about">
            about me
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/project">
            Project
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
