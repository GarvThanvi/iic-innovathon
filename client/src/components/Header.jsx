import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"} className={styles.brandName}>
          Healthify
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to={"/community"} className={styles.link}>
          Community
        </Link>
        <Link to={"/appointment"} className={styles.link}>
          Appointment
        </Link>
        <Link to={"/questionnaire"} className={styles.link}>
          Questionnaire
        </Link>
        <Link to={"/login"} className={styles.loginButton}>
          Log in/Sign Up
        </Link>
      </div>
    </nav>
  );
}
