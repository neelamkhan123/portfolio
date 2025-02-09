import { MutableRefObject, useState } from "react";
import styles from "./Card.module.css";
import Icons from "../Icons/Icons";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  aboutRef: MutableRefObject<null | HTMLElement>;
  projectsRef: MutableRefObject<null | HTMLElement>;
  contactsRef: MutableRefObject<null | HTMLElement>;
};

const Card = ({
  className,
  children,
  aboutRef,
  projectsRef,
  contactsRef,
}: CardProps): JSX.Element => {
  const [showNav, setShowNav] = useState(false);

  const openSidebar = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <main className={`${styles.card} ${className ? className : ""}`}>
      {/* Header Container */}
      <header className={styles.header}>
        <section className={styles.identification}>
          <h1 className={styles.name}>Neelam Khan</h1>
          <h6 className={styles.title}>frontend developer</h6>
        </section>
        <section className={styles["tech-stack"]}>
          <ul className={styles.languages}>
            <li className={`language html`}>HTML</li>
            <li className={`language css`}>CSS</li>
            <li className={`language tailwind`}>TailwindCSS</li>
            <li className={`language sass`}>SASS/SCSS</li>
            <li className={`language javascript`}>JavaScript</li>
            <li className={`language typescript`}>TypeScript</li>
            <li className={`language react`}>React</li>
            <li className={`language vue`}>Vue</li>
            <li className={`language mysql`}>mySQL</li>
            <li className={`language php`}>PHP</li>
            <li className={`language laravel`}>Laravel</li>
          </ul>
        </section>
      </header>

      {/* Navigation Container */}
      <nav className={styles.nav} style={{ width: showNav ? "200px" : "50px" }}>
        <button className={styles.hamburger} onClick={openSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className={styles["nav-open"]}
          style={{
            visibility: showNav ? "visible" : "hidden",
            animation: showNav ? "" : "slide-in",
          }}
        >
          <ul className={styles["nav-links"]}>
            <li
              onClick={() =>
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={styles["nav-link"]}
            >
              About
            </li>
            <li
              onClick={() =>
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={styles["nav-link"]}
            >
              Projects
            </li>
            <li
              onClick={() =>
                contactsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={styles["nav-link"]}
            >
              Contact
            </li>
          </ul>

          <div className={styles.show}>
            <Icons icons={'custom_icons_nav'} icon={'custom_icon_nav'} />
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <section className={styles.content}>{children}</section>
    </main>
  );
};

export default Card;
