import { MutableRefObject } from "react";

import styles from "./Contact.module.css";

type ContactsProps = {
  scrollToContacts: MutableRefObject<null | HTMLElement>;
};

const Contact = ({ scrollToContacts }: ContactsProps): JSX.Element => {
  return (
    <article className={styles.container} ref={scrollToContacts}>
      <h1 className="heading">Contact</h1>
      <form
        className={styles.form}
        method="POST"
        action="https://formsubmit.co/neelamkhanwork@gmail.com"
      >
        {/* Name */}
        <section className={styles.section}>
          <label htmlFor="name" className={styles.label}>
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type your first and last name"
            className={styles.input}
          />
        </section>

        {/* Email */}
        <section className={styles.section}>
          <label htmlFor="email" className={styles.label}>
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue="@gmail.com"
            className={styles.input}
          />
        </section>

        {/* Subject */}
        <section className={styles.section}>
          <label htmlFor="subject" className={styles.label}>
            subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="What is this in reference to?"
            className={styles.input}
          />
        </section>

        {/* Message */}
        <section className={styles.section}>
          <label htmlFor="message" className={styles.label}>
            message
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Type your message"
            className={styles.input}
          ></textarea>
        </section>

        {/* Submit Button */}
        <div className={styles.button}>
          <button type="submit" className={styles.submit}>
            send
          </button>
        </div>
      </form>
    </article>
  );
};

export default Contact;
