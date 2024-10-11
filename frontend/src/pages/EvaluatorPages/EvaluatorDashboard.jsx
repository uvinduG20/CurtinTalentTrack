// src/pages/EvaluatorPages/EvaluatorDashboard.jsx
import './EvaluatorDashboard.css';

import SubmissionReviewChart from '../../components/Charts/SubmissionReviewChart';
import FeedbackTurnaroundChart from '../../components/Charts/FeedbackTurnaroundChart';
import AverageScoresChart from '../../components/Charts/AverageScoresChart';

const EvaluatorDashboard = () => {
  return (
    <div className="evaluator-dashboard">
      
      <div className="dashboard-content">
        <h1 className="dashboard-title">Evaluator Overview</h1>
        <div className="overview-cards">
          <div className="card">
            <h2>Total Reviews</h2>
            <p>342</p>
          </div>
          <div className="card">
            <h2>Pending Feedback</h2>
            <p>24</p>
          </div>
          <div className="card">
            <h2>Average Score Given</h2>
            <p>4.2</p>
          </div>
          <div className="card">
            <h2>Critical Reviews</h2>
            <p>58</p>
          </div>
        </div>
        <div className="charts-section">
          <div className="chart-card">
            <h3>Monthly Submission Reviews</h3>
            <SubmissionReviewChart />
          </div>
          <div className="chart-card">
            <h3>Feedback Turnaround Time</h3>
            <FeedbackTurnaroundChart />
          </div>
          <div className="chart-card">
            <h3>Average Scores by Practice Area</h3>
            <AverageScoresChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluatorDashboard;
