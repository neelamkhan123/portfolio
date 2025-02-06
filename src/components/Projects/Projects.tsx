import ProjectTemplate from "./ProjectTemplate";

import { recipeBlog } from "../../project-data";
import { ecommerceSite } from "../../project-data";
import { weatherForecast } from "../../project-data";
import { toDoList } from "../../project-data";
import { tipCalculator } from "../../project-data";
import { gymWebDesign } from "../../project-data";
import { trivia } from "../../project-data";
import { calculator } from "../../project-data";
import { budgetPlanner } from "../../project-data";

import { MutableRefObject } from "react";
import styles from "./Projects.module.css";

type ProjectProps = {
  scrollToProjects: MutableRefObject<null | HTMLElement>;
};

const Projects = ({ scrollToProjects }: ProjectProps): JSX.Element => {
  return (
    <article ref={scrollToProjects}>
      <h1 className="heading">Projects</h1>
      <section className={styles.container}>
        <ProjectTemplate
          title={budgetPlanner.title}
          languages={budgetPlanner.languages}
          links={budgetPlanner.links}
        />
        <ProjectTemplate
          title={recipeBlog.title}
          languages={recipeBlog.languages}
          links={recipeBlog.links}
        />
        <ProjectTemplate
          title={ecommerceSite.title}
          languages={ecommerceSite.languages}
          links={ecommerceSite.links}
        />
        <ProjectTemplate
          title={weatherForecast.title}
          languages={weatherForecast.languages}
          links={weatherForecast.links}
        />
        <ProjectTemplate
          title={toDoList.title}
          languages={toDoList.languages}
          links={toDoList.links}
        />
        <ProjectTemplate
          title={tipCalculator.title}
          languages={tipCalculator.languages}
          links={tipCalculator.links}
        />
        <ProjectTemplate
          title={gymWebDesign.title}
          languages={gymWebDesign.languages}
          links={gymWebDesign.links}
        />
        <ProjectTemplate
          title={trivia.title}
          languages={trivia.languages}
          links={trivia.links}
        />
        <ProjectTemplate
          title={calculator.title}
          languages={calculator.languages}
          links={calculator.links}
        />
      </section>
    </article>
  );
};

export default Projects;
