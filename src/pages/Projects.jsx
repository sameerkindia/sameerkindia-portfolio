import Navigation from "../components/Navigation";
import ProjectItem from "../components/ProjectItem";
import Sidebar from "../components/Sidebar";
import myProjects from "../projectData";
import styles from "./Projects.module.css";

function Projects() {
  const data = myProjects;
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
            <ul className={styles.projectList}>
              {data.map((item) => (
                <ProjectItem
                  title={item.name}
                  tecnology={item.tecnology}
                  url={item.url}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Projects;
