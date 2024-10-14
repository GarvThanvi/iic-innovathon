import React from "react";
import styles from './Footer.module.css'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftPart}>
          Healthify is a mental health app designed specifically for students,
          offering personalized wellness support and exercises. It helps users
          manage stress, anxiety, and other mental health challenges with tools
          tailored for their academic journey. Healthify promotes emotional
          well-being through quizzes, resources, and actionable insights to
          improve overall mental health.
        </div>
        <div className={styles.rightPart}>
          <h2 className={styles.qcklink}>Quick Links</h2>
          <div className={styles.navLinks}>
            <Link to={"/community"} className={styles.link}>
              Community
            </Link>
            <Link to={"/appointment"} className={styles.link}>
              Appointment
            </Link>
            <Link to={"/activities"} className={styles.link}>
              Activities
            </Link>
            <Link to={"/login"} className={styles.loginButton}>
              Log in/Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
