// src/pages/Login.jsx

import { useNavigate } from 'react-router-dom';
import './Login.css';
import googleIcon from '../assets/google-icon.png'; // Importing Google icon
import logo from '../assets/CTT Logo.png'; // Importing the logo

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/home'); // Navigate to the home page after login
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="left-section">
        <img src={logo} alt="CurtinTalentTrack Logo" className="logo" />
        <p className="tagline">Empowering Your Journey to Success</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <div className="input-icon">
                <span className="icon">@</span>
                <input type="email" placeholder="Enter your email" className="input-field" required />
              </div>
            </div>
            <div className="input-group">
              <label>Password</label>
              <div className="input-icon">
                <span className="icon">🔒</span>
                <input type="password" placeholder="Enter your password" className="input-field" required />
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
          <p className="continue-with">Or Sign in with</p>
          <div className="social-login">
            <button className="social-btn google-btn">
              <img src={googleIcon} alt="Google" className="google-icon" />
              Sign in with Google
            </button>
          </div>
          <p className="create-account">
            Create an account? <span onClick={() => navigate('/signup')}>Sign Up here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
