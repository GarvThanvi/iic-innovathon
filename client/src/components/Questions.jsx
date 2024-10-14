import React from "react";
import styles from "./Questions.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
export default function Questions() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <button
            onClick={() => navigate("/questionnaire")}
            className={styles.bigButton}
          >
            Take the Mental Health Quiz
          </button>

          <p className={styles.heroText}>
            If you're experiencing symptoms you believe are related to mental
            health, you're not alone. Take our confidential quiz to explore
            common symptoms of mental health disorders. <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; You will be guided through
            two different quizzes to assess your well-being and provide
            personalized feedback.
          </p>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </>
  );
}
