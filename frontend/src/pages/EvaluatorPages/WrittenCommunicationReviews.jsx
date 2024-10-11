// src/pages/EvaluatorPages/WrittenCommunicationReview.jsx
import { useState } from 'react';
import './WrittenCommunicationReviews.css';
import Avatar from '@mui/material/Avatar';
import samplePdf from '../../assets/sample.pdf';

const WrittenCommunicationReviews = () => {
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [comments, setComments] = useState('');
  const [score, setScore] = useState('');
  const [unmarkedResponses, setUnmarkedResponses] = useState([
    { id: 1, name: 'Mark Spencer', submissionDate: '2024-10-02', status: 'Unmarked', text: 'This is a sample essay written by the student.', pdf: null },
    { id: 2, name: 'Emily Watson', submissionDate: '2024-10-04', status: 'Unmarked', text: null, pdf: samplePdf },
    { id: 3, name: 'Alice Johnson', submissionDate: '2024-10-06', status: 'Unmarked', text: 'Here is another sample of written communication.', pdf: null },
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
    <div className="written-communication-review">
      <h1 className="page-title">Written Communication Reviews</h1>

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
            {selectedResponse.text && (
              <div className="text-review">
                <h3>Text Submission</h3>
                <p className="student-text">{selectedResponse.text}</p>
                <textarea
                  placeholder="Write your feedback here..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="feedback-textarea"
                />
              </div>
            )}
            {selectedResponse.pdf && (
              <div className="pdf-review">
                <h3>PDF Submission</h3>
                <a href={selectedResponse.pdf} target="_blank" rel="noopener noreferrer" className="download-link">
                  Download PDF
                </a>
              </div>
            )}
            <div className="score-section">
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

export default WrittenCommunicationReviews;
