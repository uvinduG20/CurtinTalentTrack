// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import googleIcon from '../assets/google-icon.png'; // Importing Google icon

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Handle signup logic here
    navigate('/home'); // Navigate to the home page after signup
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <button className="back-button" onClick={() => navigate('/login')}>
          ← Back to Login
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="su-input-field" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" className="su-input-field" required />
          </div>
          <div className="input-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter your mobile number" className="su-input-field" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="su-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Re-enter Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="su-input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="continue-with">Or Sign up with</p>
        <div className="social-login">
          <button className="social-btn google-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
