// src/pages/AdminPages/AdminDashboard.jsx
import './AdminDashboard.css';
import StudentGrowthChart from '../../components/Charts/StudentGrowthChart';
import EvaluatorActivityChart from '../../components/Charts/EvaluatorActivityChart';

const AdminDashboard = () => {
  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Admin Overview</h1>
      <div className="overview-cards">
        <div className="card">
          <h2>Total Students</h2>
          <p>1,256</p>
        </div>
        <div className="card">
          <h2>Total Evaluators</h2>
          <p>45</p>
        </div>
        <div className="card">
          <h2>Student Responses</h2>
          <p>342</p>
        </div>
        <div className="card">
          <h2>Unopened Feedback</h2>
          <p>87</p>
        </div>
      </div>
      <div className="charts-section">
        <div className="chart-card">
          <h3>Student Registration Growth</h3>
          <StudentGrowthChart />
        </div>
        <div className="chart-card">
          <h3>Evaluator Activity</h3>
          <EvaluatorActivityChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
