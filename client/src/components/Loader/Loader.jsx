import React from "react";
import styles from "./Loader.module.css";

const LoaderComponent = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.circles}>
        <span className={styles.one}></span>
        <span className={styles.two}></span>
        <span className={styles.three}></span>
      </div>
      <div className={styles.pacman}>
        <span className={styles.top}></span>
        <span className={styles.bottom}></span>
        <span className={styles.left}></span>
        <div className={styles.eye}></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
