import { FaDownload } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <main className="section-center">
      <Navigation />
      <div className="page">
        <Sidebar />
        <div className={styles.aboutContainer}>
          <div className="page-heading">
            <h2>About me</h2>
          </div>

          <div className={styles.about}>
            <h3>
              I&apos;m <span>Sameer Khan</span>, Web Developer
            </h3>
            <p>
              I am a versatile and skilled Full Stack Developer proficient in a
              myriad of technologies essential for modern web development. My
              expertise spans across the entire web development stack, from the
              client-side to the server-side. On the frontend, I excel in
              JavaScript, React.js, HTML, and CSS, utilizing these tools to
              create engaging and responsive user interfaces. Leveraging Hooks
              and DOM manipulation, I ensure seamless interactivity and a
              delightful user experience.
            </p>
            <p>
              Passionate about web development, I continually explore emerging
              technologies to stay at the forefront of the industry. Whether
              it&apos;s crafting visually appealing frontend interfaces or
              architecting robust backend systems, I bring a holistic approach
              to every project. My goal is to contribute my expertise to
              innovative endeavors, shaping the digital landscape with my Full
              Stack proficiency.
            </p>

            <span className={styles.download}>
              <FaDownload />
              <a href="/assets/resume.pdf" download="sameer's resume">
                Resume
              </a>
            </span>

            <div className={styles.skills}>
              <h3>Skills</h3>
              <p className={styles.skill}>
                <span>JavaScript</span> <span>ReactJS</span>{" "}
                <span>Next Js</span>
              </p>
              <p className={styles.skill}>
                <span>HTML</span> <span>CSS</span> <span>Scss</span>{" "}
                <span>Tailwind</span> <span>Redux</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
