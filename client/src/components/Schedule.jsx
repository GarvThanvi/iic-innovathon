import React from "react";
import styles from "./Schedule.module.css";
export default function Schedule() {
  return (
    <>
      <div className={styles.teamPage}>
        <div className={styles.teamSection}>
          <div className={styles.teamGrid}></div>
          <div className={styles.teamInfo}>
            <h2>Our Expert Team</h2>
            <p>
              Healthify is a platform focused on supporting students' mental
              health and well-being. We offer accessible resources and services
              that help students manage the pressures of academic life,
              fostering self-awareness and emotional resilience. Through our
              supportive communities, students can connect, learn, and grow in a
              safe, nurturing space. Our team includes mental health
              professionals, tech innovators, and student advocates, all working
              together to empower students to thrive both academically and
              personally.
            </p>
            <p>
              Our people-first culture is reflected in our team of top-notch
              business executives, accomplished tech entrepreneurs, and highly
              regarded healthcare professionals.
            </p>
            <button className={styles.appointmentButton}>
              Schedule an Appointment
            </button>
          </div>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </>
  );
}
