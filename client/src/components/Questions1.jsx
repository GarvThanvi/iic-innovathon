import React from "react";
import styles from "./Questions1.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Questions1() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Depression Symptoms Quiz</h2>
        <p className={styles.text}>
          Take this quiz to explore common symptoms of depression and determine
          if you're experiencing signs of this mental health disorder.
        </p>
        <Link to="/depression">
          <FaRegArrowAltCircleRight size={40} />
        </Link>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>ADHD Symptoms Quiz</h2>
        <p className={styles.text}>
          Take this quiz to assess potential symptoms of ADHD and find out if
          your focus and attention issues might be related to this condition.
        </p>
        <Link to="/adhd">
          <FaRegArrowAltCircleRight size={40} />
        </Link>
      </div>
    </div>
  );
}
