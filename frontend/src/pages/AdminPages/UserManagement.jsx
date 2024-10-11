// src/pages/AdminPages/UserManagement.jsx
import { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Evaluator', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'Student', status: 'Disabled' },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const handleDeleteUser = (userId) => {
    // Simulate deleting user (this would be handled by the backend)
    alert(`User with ID ${userId} has been deleted.`);
  };

  return (
    <div className="user-management">
      <h1 className="page-title">User Management</h1>

      <div className="overview-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>200</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>150</p>
        </div>
        <div className="card">
          <h3>Pending Registrations</h3>
          <p>30</p>
        </div>
        <div className="card">
          <h3>Evaluators</h3>
          <p>20</p>
        </div>
      </div>

      <div className="user-list">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEditUser(user)}>
                    Edit
                  </button>
                  <button
                    className={`status-btn ${user.status === 'Pending' ? 'approve-btn' : 'disable-btn'}`}
                    onClick={() => alert(`${user.status === 'Pending' ? 'Approved' : 'Disabled'} user: ${user.name}`)}
                  >
                    {user.status === 'Pending' ? 'Approve' : user.status === 'Active' ? 'Disable' : 'Activate'}
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit User Details</h3>
            <form>
              <label>Name</label>
              <input type="text" defaultValue={selectedUser.name} className="modal-input" />
              <label>Email</label>
              <input type="email" defaultValue={selectedUser.email} className="modal-input" />
              <label>Role</label>
              <select defaultValue={selectedUser.role} className="modal-input">
                <option value="Admin">Admin</option>
                <option value="Evaluator">Evaluator</option>
                <option value="Student">Student</option>
              </select>
              <div className="modal-actions">
                <button type="button" className="save-btn" onClick={handleCloseModal}>
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

export default UserManagement;
