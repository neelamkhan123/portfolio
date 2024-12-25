import { MutableRefObject } from "react";

import styles from "./About.module.css";

type AboutProps = {
  scrollToAbout: MutableRefObject<null | HTMLElement>;
};

const About = ({ scrollToAbout }: AboutProps): JSX.Element => {
  return (
    <article className={styles.container} ref={scrollToAbout}>
      <h1 className="heading">About me</h1>
      <p className={styles.text}>
        Hey there, I'm Neelam 👋 I am a dedicated and self-taught front-end
        developer with a passion for crafting immersive and visually stunning
        digital experiences. Currently, as a Junior Front End Developer at Euro
        Communications, I focus on maintaining and enhancing website
        functionality, collaborating closely with team members.
      </p>
      <p className={styles.text}>
        My expertise lies web design, mastering tools like HTML & CSS, with a
        proficiency in advanced styling frameworks such as TailwindCSS and SASS
        to create sleek and responsive user interfaces. I have also honed my
        skills in JavaScript and TypeScript, enabling me to bring interactivity
        and dynamic functionality to web applications. My proficiency extends to
        popular front-end libraries and frameworks, including React and Vue,
        where I specialize in building modular and scalable components.
      </p>
      <p className={styles.text}>
        With a keen eye for design and a commitment to staying at the forefront
        of industry trends, I excel in translating creative concepts into
        polished, user-friendly interfaces. My journey as a self-taught
        developer reflects a dedication to continuous learning and adapting to
        emerging technologies.
      </p>
    </article>
  );
};

export default About;
