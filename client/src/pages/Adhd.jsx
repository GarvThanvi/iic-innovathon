import React, { useState } from "react";
import styles from "./Adhd.module.css"; 

const questions = [
  "How often do you struggle to stay focused on tasks or activities?",
  "How often do you have difficulty organizing tasks or activities?",
  "How often do you lose things necessary for tasks (e.g., keys, phone, books)?",
  "How often do you feel restless or have trouble sitting still?",
  "How often do you interrupt others or blurt out answers before a question is completed?",
  "How often do you avoid or feel reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork, reports)?",
  "How often do you find yourself daydreaming or zoning out?",
  "How often do you have trouble following through on instructions or completing tasks?",
];

const options = [
  { label: "Rarely", points: 0 },
  { label: "Sometimes", points: 1 },
  { label: "Often", points: 2 },
  { label: "Very often", points: 3 },
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [score, setScore] = useState(null);
  console.log(score);

  const handleOptionChange = (index, points) => {
    const newAnswers = [...answers];
    newAnswers[index] = points;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    setScore(totalScore);
  };
  
  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.title}>ADHD Symptoms Quiz</h1>
      <form onSubmit={(e) => { e.preventDefault(); calculateScore(); }}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionContainer}>
            <h3 className={styles.question}>{question}</h3>
            <div className={styles.buttonGroup}>
              {options.map((option, optionIndex) => {
                const isSelected = answers[index] === option.points; // Check if this option is selected
                return (
                  <button
                    type="button"
                    key={optionIndex}
                    className={`${styles.optionButton} ${isSelected ? styles.selectedButton : ''}`}
                    onClick={() => handleOptionChange(index, option.points)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {score !== null && (
        <div className={styles.scoreContainer}>
          <h2 className={styles.scoreTitle}>Your Score: {score} / 24</h2>
          <p className={styles.scoreDescription}>
          {score <= 8 ? (
  <p className={styles.scoreDescription}>
    You seem to be managing well. It's great to see that you have a good grasp on your focus and attention. Keep maintaining a balanced routine, including regular breaks during tasks, physical activity, and engaging in hobbies that stimulate your mind. If you ever feel overwhelmed, remember to reach out to friends or family for support.
  </p>
) : score <= 16 ? (
  <p className={styles.scoreDescription}>
    You might be experiencing some attention difficulties. Consider implementing strategies to improve your focus, such as breaking tasks into smaller, manageable steps, setting specific goals, and minimizing distractions in your environment. It might also help to engage in mindfulness practices or consider speaking with a counselor or therapist who specializes in attention-related challenges.
  </p>
) : (
  <p className={styles.scoreDescription}>
    Your score suggests that you may be facing significant challenges with attention and focus. It is important to take these feelings seriously. We recommend reaching out to a mental health professional who can help you explore these concerns further. They can provide strategies tailored to your needs and help you identify whether additional support, such as therapy or counseling, may be beneficial. In the meantime, try to implement structure in your daily activities and engage in relaxation techniques to help manage any feelings of restlessness.
  </p>
)}

          </p>
        </div>
      )}
    </div>
  );
}

