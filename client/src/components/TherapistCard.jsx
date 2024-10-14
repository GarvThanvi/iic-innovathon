import React from 'react';
import styles from './TherapistCard.module.css';
import therapy from '../assets/therapy.jpg'
import therapist from '../assets/therapist.jpg'

const TherapistCard = ({ name, location, experience, specialties, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.Container}><div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div></div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}><strong>Location:</strong> {location}</p>
        <p className={styles.experience}><strong>Experience:</strong> {experience}</p>
        <p className={styles.specialties}><strong>Specialties:</strong> {specialties.join(', ')}</p>
        <button className={styles.contactButton}>Contact Now</button>
      </div>
    </div>
  );
};

const TherapistList = () => {
  const therapists = [
    { name: 'Ashok Rawat', location: 'Sion', experience: '10 years', specialties: ['Anxiety', 'Depression', 'Stress Management'], image: therapy },
    { name: 'Rohan Sawant', location: 'Mulund', experience: '8 years', specialties: ['Relationships', 'Trauma', 'Self-esteem'], image: therapist },
    { name: 'Ajit Sharma', location: 'Bandra', experience: '12 years', specialties: ['Addiction', 'Grief', 'PTSD'], image: 'https://example.com/image3.jpg' },
    { name: 'Therapist Rohan Shetty', location: 'Churchgate', experience: '6 years', specialties: ['Anger Management', 'Family Therapy', 'CBT'], image: 'https://example.com/image4.jpg' },
    { name: 'Therapist Rahila Rajput', location: 'Wadala', experience: '15 years', specialties: ['Mindfulness', 'Body Image', 'Stress'], image: 'https://example.com/image5.jpg' }
  ];

  return (
    <div className={styles.cardContainer}>
      {therapists.map((therapist, index) => (
        <TherapistCard key={index} {...therapist} />
      ))}
    </div>
  );
};

export default TherapistList;
