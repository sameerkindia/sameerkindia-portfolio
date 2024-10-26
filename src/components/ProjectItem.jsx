import styles from "./ProjectItem.module.css";

/* eslint-disable */

function ProjectItem({ title, id, tecnology, url, imgSrc }) {
  return (
    <li className={styles.project}>
      <img src={imgSrc} alt={title} />
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
