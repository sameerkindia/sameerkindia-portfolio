import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={`section-center ${styles.homeContainer}`}>
      <div className={styles.textContainer}>
        <h2 className={styles.subHeading}>Hello!</h2>
        <h1 className={styles.homeHeading}>
          i,m <span>Sameer</span>
        </h1>
        <p className={styles.highlight}>full-stack web developer</p>
        <p className={styles.homeInfo}>
          MERN Stack Developer committed to crafting seamless user experiences
          with MongoDB, Express.js, React.js, and Node.js. Passionate about
          contributing and learning in dynamic development environments, ready
          to embark on innovative projects and make a mark in the tech world.
        </p>

        <NavLink className={styles.homeBtn}>more about me</NavLink>
      </div>
      <div className={`${styles.imageContainer}`}></div>
    </main>
  );
}

export default Home;
