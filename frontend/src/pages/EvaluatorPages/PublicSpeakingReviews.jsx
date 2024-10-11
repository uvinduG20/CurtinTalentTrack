// src/pages/EvaluatorPages/PublicSpeakingReview.jsx
import { useState } from 'react';
import './PublicSpeakingReviews.css';
import Avatar from '@mui/material/Avatar';

const PublicSpeakingReviews = () => {
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [comments, setComments] = useState('');
  const [score, setScore] = useState('');
  const [unmarkedResponses, setUnmarkedResponses] = useState([
    { id: 1, name: 'John Doe', submissionDate: '2024-10-01', status: 'Unmarked', video: 'https://www.youtube.com/embed/3sK3wJAxGfs' },
    { id: 2, name: 'Jane Smith', submissionDate: '2024-10-03', status: 'Unmarked', video: 'https://www.youtube.com/embed/XfYpJt2rdHc' },
    { id: 3, name: 'Alice Johnson', submissionDate: '2024-10-05', status: 'Unmarked', video: 'https://www.youtube.com/embed/1sElYG7LmUU' },
    { id: 4, name: 'Bob Brown', submissionDate: '2024-10-07', status: 'Unmarked', video: 'https://www.youtube.com/embed/NUC2EQvdzmY' },
  ]);
  const [markedResponses, setMarkedResponses] = useState([]);

  const handleSelectResponse = (response) => {
    setSelectedResponse(response);
  };

  const handleSubmitReview = () => {
    if (comments && score) {
      const updatedResponse = { ...selectedResponse, comments, score, status: 'Marked' };
      setMarkedResponses((prev) => [...prev, updatedResponse]);
      setUnmarkedResponses((prev) => prev.filter((resp) => resp.id !== selectedResponse.id));
      setSelectedResponse(null);
      setComments('');
      setScore('');
    }
  };

  return (
    <div className="public-speaking-review">
      <h1 className="page-title">Public Speaking Reviews</h1>

      <div className="responses-section">
        <div className="unmarked-responses">
          <h2>Unmarked Responses</h2>
          <ul className="response-list">
            {unmarkedResponses.map((response) => (
              <li
                key={response.id}
                className="response-item"
                onClick={() => handleSelectResponse(response)}
              >
                <Avatar sx={{ bgcolor: '#e8b028' }}>
                  {response.name.charAt(0)}
                </Avatar>
                <div className="response-details">
                  <p className="student-name">{response.name}</p>
                  <p className="submission-date">{response.submissionDate}</p>
                  <p className="status">{response.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {selectedResponse && (
          <div className="review-section">
            <h2>Reviewing: {selectedResponse.name}</h2>
            <div className="video-player">
              <iframe
                width="560"
                height="315"
                src={selectedResponse.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="feedback-form">
              <textarea
                placeholder="Write your feedback here..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="feedback-textarea"
              />
              <input
                type="number"
                placeholder="Score out of 10"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="score-input"
                max={10}
                min={0}
              />
              <button className="submit-btn" onClick={handleSubmitReview}>
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="marked-responses">
        <h2>Reviewed Responses</h2>
        <ul className="response-list">
          {markedResponses.map((response) => (
            <li key={response.id} className="response-item marked">
              <Avatar sx={{ bgcolor: '#e8b028' }}>
                {response.name.charAt(0)}
              </Avatar>
              <div className="response-details">
                <p className="student-name">{response.name}</p>
                <p className="submission-date">{response.submissionDate}</p>
                <p className="status">{response.status}</p>
                <p className="score">Score: {response.score}/10</p>
                <p className="comments">Comments: {response.comments}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PublicSpeakingReviews;
