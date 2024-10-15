import React, { useState } from "react";
import styles from "./AnxietyComm.module.css";
import JournalPage from "../components/JournalPage";

const dummyPosts = [
  {
    id: 1,
    author: "Anonymous",
    content:
      "I’ve been dealing with anxiety for a while now, and it’s tough to focus on my studies. How do you all manage it?",
    fullContent:
      "I’ve been dealing with anxiety for a while now, and it’s tough to focus on my studies. How do you all manage it? Sometimes I feel overwhelmed and don’t know how to balance everything. Any tips would be appreciated.",
    timestamp: "10 minutes ago",
  },
  {
    id: 2,
    author: "Anonymous",
    content:
      "Some days are worse than others. The constant worrying keeps me up at night.",
    fullContent:
      "Some days are worse than others. The constant worrying keeps me up at night. I feel like I’m always on edge, waiting for something bad to happen. Does anyone else feel this way? What’s worked for you to calm your mind at night?",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    author: "Anonymous",
    content:
      "I just had a panic attack before a presentation. Does anyone else get triggered by public speaking?",
    fullContent:
      "I just had a panic attack before a presentation. It was terrifying, and I couldn’t calm down for a while. Does anyone else get triggered by public speaking or similar situations? How do you handle it?",
    timestamp: "2 hours ago",
  },
];

const AnxietyPage = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleCreatePost = () => {
    setShowCreateModal(true);
  };

  const handleSavePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: "Anonymous",
        content: newPostContent,
        fullContent: newPostContent,
        timestamp: "Just now",
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
      setShowCreateModal(false);
    }
  };

  const handleCancelPost = () => {
    setNewPostContent("");
    setShowCreateModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.descriptionBox}>
            <h2>Welcome to the Anxiety Support Community</h2>
            <p>
              This community is for students who are dealing with anxiety. Share
              your thoughts, get support, and learn how others cope with anxiety
              in their daily lives.
            </p>
          </div>
          <button
            className={styles.createPostButton}
            onClick={handleCreatePost}
          >
            Create Post
          </button>
        </div>

        <div className={styles.postsSection}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={styles.post}
              onClick={() => handlePostClick(post)}
            >
              <p>
                <strong>{post.author}</strong>{" "}
                <span className={styles.timestamp}>{post.timestamp}</span>
              </p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        {/* Modal for viewing full post */}
        {selectedPost && (
          <div className={styles.modalOverlay} onClick={handleCloseModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedPost.author}</h2>
              <p>{selectedPost.fullContent}</p>
              <span className={styles.modalTimestamp}>
                {selectedPost.timestamp}
              </span>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal for creating new post */}
        {showCreateModal && (
          <div className={styles.modalOverlay} onClick={handleCancelPost}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Create a New Post</h2>
              <textarea
                className={styles.textarea}
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Write about your experience with anxiety..."
              />
              <div className={styles.modalActions}>
                <button className={styles.saveButton} onClick={handleSavePost}>
                  Save Post
                </button>
                <button
                  className={styles.cancelButton}
                  onClick={handleCancelPost}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <JournalPage></JournalPage>
    </>
  );
};

export default AnxietyPage;
