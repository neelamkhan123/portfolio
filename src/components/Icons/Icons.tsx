import { Link } from "react-router-dom";

import styles from "./Icons.module.css";

interface IconsProps {
  icons?: string;
  icon?: string;
}

const Icons = ({ icons = "", icon = "" }: IconsProps): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={`${styles.icons} ${styles[icons]}`}>
        <Link
          target="_blank"
          to="https://github.com/neelamkhan123"
          className={`${styles.icon} ${styles["icon-anim-one"]} ${styles[icon]}`}
        >
          <i className="fa-brands fa-github"></i>
        </Link>

        <Link
          target="_blank"
          to="https://www.linkedin.com/in/neelam-khan-6008901a5/"
          className={`${styles.icon} ${styles["icon-anim-two"]} ${styles[icon]}`}
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>

        <a
          href="Neelam Khan - Resume.pdf"
          target="_blank"
          download="Neelam Khan - Resume"
          className={`${styles.icon} ${styles["icon-anim-three"]} ${styles[icon]}`}
        >
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  );
};

export default Icons;
