import React, { useState } from 'react';
import styles from './JournalPage.module.css';
import { AiOutlineMessage } from 'react-icons/ai'; // For the AI chatbot icon
import { FaRegEdit } from 'react-icons/fa'; // For the journal icon

const JournalPage = () => {
  const [showJournalModal, setShowJournalModal] = useState(false);
  const [leftEntry, setLeftEntry] = useState(''); // State for left page
  const [rightEntry, setRightEntry] = useState(''); // State for right page
  const [showChat, setShowChat] = useState(false); // State for chat window

  const handleJournalClick = () => {
    setShowJournalModal(true);
  };

  const handleSaveJournal = () => {
    if (leftEntry.trim() || rightEntry.trim()) {
      console.log('Left Entry Saved:', leftEntry);
      console.log('Right Entry Saved:', rightEntry);
      setLeftEntry('');
      setRightEntry('');
      setShowJournalModal(false);
      alert('Journal entries saved!');
    }
  };

  const handleCancelJournal = () => {
    setLeftEntry('');
    setRightEntry('');
    setShowJournalModal(false);
  };

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat); // Toggle chat window
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <div className={styles.icon} onClick={toggleChat}>
          <AiOutlineMessage size={40} />
        </div>
        <div className={styles.icon} onClick={handleJournalClick}>
          <FaRegEdit size={40} />
        </div>
      </div>

      {/* Chat Window */}
      {showChat && (
        <div className={`${styles.chatWindow} ${showChat ? styles.show : ''}`}>
          <div className={styles.chatHeader}>AI Chatbot</div>
          <div className={styles.chatMessages}>
            <div className={styles.message}>Hello! How can I assist you today?</div>
            <div className={styles.message}>Remember, it’s okay to talk about your feelings.</div>
            <div className={styles.message}>How are you feeling right now?</div>
          </div>
          <div className={styles.chatInputContainer}>
            <input type="text" className={styles.chatInput} placeholder="Type a message..." />
            <button className={styles.sendButton}>Send</button>
          </div>
        </div>
      )}

      {/* Modal for the Journal Entry */}
      {showJournalModal && (
        <div className={styles.modalOverlay} onClick={handleCancelJournal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.bookContainer}>
              <div className={styles.page}>
                <textarea
                  className={styles.textarea}
                  value={leftEntry}
                  onChange={(e) => setLeftEntry(e.target.value)}
                  placeholder="Write your journal entry here..."
                />
              </div>
              <div className={styles.page}>
                <textarea
                  className={styles.textarea}
                  value={rightEntry}
                  onChange={(e) => setRightEntry(e.target.value)}
                  placeholder="Continue writing..."
                />
              </div>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.saveButton} onClick={handleSaveJournal}>Save</button>
              <button className={styles.cancelButton} onClick={handleCancelJournal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalPage;
