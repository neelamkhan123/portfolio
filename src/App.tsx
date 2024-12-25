import Card from "./components/UI/Card";
import Icons from "./components/Icons/Icons";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import { useRef } from "react";

import styles from "./App.module.css";

const App = (): JSX.Element => {
  const aboutRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);
  const contactRef = useRef<null | HTMLElement>(null);

  return (
    <main className={styles.app}>
      <Icons />
      <Card
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactRef}
      >
        <About scrollToAbout={aboutRef} />
        <Projects scrollToProjects={projectsRef} />
        <Contact scrollToContacts={contactRef} />
      </Card>
    </main>
  );
};

export default App;
