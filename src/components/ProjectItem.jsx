import styles from "./ProjectItem.module.css";

/* eslint-disable */

function ProjectItem({ title, id, tecnology, url }) {
  return (
    <li className={styles.project}>
      <p className={styles.subHeading}>{title}</p>
      <p className={styles.tecnology}>{tecnology.join(",")}</p>
      <a className={styles.link} href={url} target="_blank">
        Live Site
      </a>
    </li>
  );
}

/* eslint-enable */

export default ProjectItem;
