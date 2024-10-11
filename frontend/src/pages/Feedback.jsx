import { useState } from 'react';
import { Mic, ChatBubble, Book, Extension } from '@mui/icons-material'; // Import MUI icons
import './Feedback.css';

const sampleFeedback = {
  publicSpeaking: [
    { id: 1, evaluator: 'John Doe', score: '85%', feedback: 'Great eye contact and confidence, but work on pacing.', date: '2024-10-05', isNew: true },
    { id: 2, evaluator: 'Jane Smith', score: '90%', feedback: 'Excellent delivery, keep up the good work!', date: '2024-09-30', isNew: false },
  ],
  interviewPractice: [
    { id: 1, evaluator: 'Anna Lee', score: '78%', feedback: 'Good preparation, but try to be more concise in your answers.', date: '2024-10-04', isNew: true },
  ],
  writtenCommunication: [
    { id: 1, evaluator: 'Tom Brown', score: '92%', feedback: 'Well-structured essays with minor grammar issues.', date: '2024-09-28', isNew: false },
  ],
  criticalThinking: [
    { id: 1, evaluator: 'Emily Davis', score: '88%', feedback: 'Good problem-solving skills. Try to elaborate more on your reasoning.', date: '2024-10-02', isNew: false },
  ],
};

const Feedback = () => {
  const [selectedCategory, setSelectedCategory] = useState('publicSpeaking');
  const [feedback, setFeedback] = useState(sampleFeedback);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const markAsRead = (feedbackType, id) => {
    setFeedback((prevFeedback) => {
      const updatedFeedback = { ...prevFeedback };
      const selectedFeedback = updatedFeedback[feedbackType].map((item) =>
        item.id === id ? { ...item, isNew: false } : item
      );
      updatedFeedback[feedbackType] = selectedFeedback;
      return updatedFeedback;
    });
  };

  const feedbackCategories = {
    publicSpeaking: <Mic />,
    interviewPractice: <ChatBubble />,
    writtenCommunication: <Book />,
    criticalThinking: <Extension />,
  };

  return (
    <div className="feedback-page">
      {/* Feedback Summary Section */}
      <div className="feedback-summary">
        <h2 className="summary-title">Your Feedback Summary</h2>
        <div className="summary-stats">
          <div className="stat-card">Total Feedbacks: 5</div>
          <div className="stat-card">Average Score: 85%</div>
          <div className="stat-card">Last Feedback: 2 days ago</div>
        </div>
      </div>

      {/* Feedback Selector */}
      <div className="feedback-selector">
        {Object.keys(feedbackCategories).map(category => (
          <button
            key={category}
            className={`feedback-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {feedbackCategories[category]} {/* Display the icons */}
            <span className="feedback-category-name">{category}</span>
            {feedback[category].some(item => item.isNew) && <span className="notification-dot" />}
          </button>
        ))}
      </div>

      {/* Feedback List */}
      <div className="feedback-list">
        {feedback[selectedCategory].length ? (
          feedback[selectedCategory].map((item) => (
            <div
              key={item.id}
              className={`feedback-card ${item.isNew ? 'new-feedback' : ''}`}
              onClick={() => markAsRead(selectedCategory, item.id)}
            >
              <h3 className="feedback-title">{item.evaluator}</h3>
              <p className="feedback-score">Score: {item.score}</p>
              <p className="feedback-text">{item.feedback}</p>
              <p className="feedback-date">Date: {item.date}</p>
              {item.isNew && <span className="new-label">New</span>}
            </div>
          ))
        ) : (
          <div className="no-feedback">
            <p>No feedback available for this category yet. Keep practicing!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
