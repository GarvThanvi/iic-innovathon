import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Communities.module.css';

const communities = [
  { name: 'Anxiety Support', description: 'A space to share and learn coping mechanisms for anxiety.', path: '/anxiety' },
  { name: 'Depression Help', description: 'A safe place to talk about feelings of sadness and hopelessness.', path: '/depression' },
  { name: 'Stress Management', description: 'Tips and strategies to help manage everyday stress and pressure.', path: '/stress-management' },
  { name: 'Loneliness & Isolation', description: 'Connect with others dealing with loneliness and isolation.', path: '/loneliness' },
  { name: 'Self-Esteem Boosters', description: 'Improve your confidence and self-worth with community support.', path: '/self-esteem' },
  { name: 'Academic Pressure', description: 'Talk about the pressures of academic life and how to manage them.', path: '/academic-pressure' },
  { name: 'Body Image Support', description: 'Discuss and share about body image and acceptance.', path: '/body-image' },
  { name: 'Grief & Loss', description: 'Find support for dealing with grief and loss in a caring community.', path: '/grief-loss' },
  { name: 'Relationship Struggles', description: 'Share experiences and get support for relationship challenges.', path: '/relationship-struggles' },
];

const CommunityList = () => {
  const navigate = useNavigate();

  const handleJoinClick = (path) => {
    navigate('/anxiety');  // Navigate to the specified community path
  };

  return (
    <div className={styles.communitySection}>
      <h1 className={styles.heading}>A Community That Understands</h1>
      <p className={styles.subheading}>Connect with others who share similar experiences. Select the community that speaks to you.</p>
      <div className={styles.grid}>
        {communities.map((community, index) => (
          <div key={index} className={styles.communityBox}>
            <h2>{community.name}</h2>
            <p>{community.description}</p>
            <button
              className={styles.joinButton}
              onClick={() => handleJoinClick(community.path)}  // Handle navigation on click
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityList;
