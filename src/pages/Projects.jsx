import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <main className="section-center">
      <Navigation />

      <div className="page">
        <Sidebar />

        <div className={styles.projectContainer}>
          <div className="page-heading">
            <h2>Projects</h2>
          </div>

          <section className={styles.project}>
            <p>All Projects</p>
            <ul className={styles.projectList}>
              <li>
                <a href="#" target="_blank">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Project 1
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Projects;
