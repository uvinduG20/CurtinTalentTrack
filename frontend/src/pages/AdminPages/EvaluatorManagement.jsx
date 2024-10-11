// src/pages/AdminPages/EvaluatorManagement.jsx
import { useState } from 'react';
import './EvaluatorManagement.css';

const EvaluatorManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvaluator, setSelectedEvaluator] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const evaluators = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', tasks: ['Public Speaking'], status: 'Active' },
    { id: 2, name: 'Alice Johnson', email: 'alice@example.com', tasks: ['Interview Practice'], status: 'Active' },
    { id: 3, name: 'Tom Brown', email: 'tom@example.com', tasks: ['Written Communication'], status: 'Pending' },
    { id: 4, name: 'Emily White', email: 'emily@example.com', tasks: ['Critical Thinking'], status: 'Disabled' },
  ];

  const filteredEvaluators = evaluators.filter(
    (evaluator) =>
      evaluator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evaluator.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditEvaluator = (evaluator) => {
    setSelectedEvaluator(evaluator);
    setSelectedTasks(evaluator.tasks);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedEvaluator(null);
    setSelectedTasks([]);
    setShowModal(false);
  };

  const handleTaskChange = (event) => {
    const options = event.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedTasks(selected);
  };

  const handleSaveChanges = () => {
    // Here, you would update the evaluator's tasks in the backend or state
    alert(`Tasks assigned: ${selectedTasks.join(', ')}`);
    handleCloseModal();
  };

  return (
    <div className="evaluator-management">
      <h1 className="page-title">Evaluator Management</h1>

      <div className="overview-cards">
        <div className="card">
          <h3>Total Evaluators</h3>
          <p>50</p>
        </div>
        <div className="card">
          <h3>Active Evaluators</h3>
          <p>40</p>
        </div>
        <div className="card">
          <h3>Pending Approvals</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Tasks Assigned</h3>
          <p>100</p>
        </div>
      </div>

      <div className="evaluator-list">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="evaluator-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Tasks</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvaluators.map((evaluator) => (
              <tr key={evaluator.id}>
                <td>{evaluator.id}</td>
                <td>{evaluator.name}</td>
                <td>{evaluator.email}</td>
                <td>{evaluator.tasks.join(', ')}</td>
                <td>{evaluator.status}</td>
                <td className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEditEvaluator(evaluator)}>
                    Edit
                  </button>
                  <button className="assign-btn" onClick={() => handleEditEvaluator(evaluator)}>
                    Assign Tasks
                  </button>
                  {evaluator.status === 'Pending' ? (
                    <button className="approve-btn">Approve</button>
                  ) : (
                    <button className="deactivate-btn">Deactivate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Evaluator</h3>
            <form>
              <label>Name</label>
              <input type="text" defaultValue={selectedEvaluator.name} className="modal-input" />
              <label>Email</label>
              <input type="email" defaultValue={selectedEvaluator.email} className="modal-input" />
              <label>Tasks</label>
              <select
                multiple
                value={selectedTasks}
                onChange={handleTaskChange}
                className="modal-input"
              >
                <option value="Public Speaking">Public Speaking</option>
                <option value="Interview Practice">Interview Practice</option>
                <option value="Written Communication">Written Communication</option>
                <option value="Critical Thinking">Critical Thinking</option>
              </select>
              <div className="modal-actions">
                <button type="button" className="save-btn" onClick={handleSaveChanges}>
                  Save
                </button>
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluatorManagement;
