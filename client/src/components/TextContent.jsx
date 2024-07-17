import React from "react";
import styles from "../styles/about.module.css";

const TextContent = ({ title, content }) => {
  return (
    <>
      <section className={styles.vm}>
        <h1 className={styles.vm__h1}>{title}</h1>
        <div className={styles.vm__line} />
        <p className={styles.vm__p}>{content}</p>
      </section>
    </>
  );
};

export default TextContent;
