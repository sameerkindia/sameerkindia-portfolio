import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside>
      <ul className={styles.liLinks}>
        <li className={styles.link}>
          <NavLink to="/">home</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/about">about me</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
