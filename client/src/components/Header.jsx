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
        <Link to={"/library"} className={styles.link}>
          Library
        </Link>
        <Link to={"/help-support"} className={styles.link}>
          Help & Support
        </Link>
        <Link to={"/login"} className={styles.loginButton}>
          Log in
        </Link>
      </div>
    </nav>
  );
}
