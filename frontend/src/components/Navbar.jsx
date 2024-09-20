// src/components/Navbar.jsx
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CurtinTalentTrack</div>
      <ul className="navbar-links">
        <li><Link to="home">Home</Link></li>
        <li><Link to="/public-speaking">Speaking</Link></li>
        <li><Link to="/interview-practice">Interviews</Link></li>
        <li><Link to="/written-communication">Writing</Link></li>
        <li><Link to="/critical-thinking">Thinking</Link></li>
        <li><Link to="/event-calendar">Events</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><button className="get-started-btn">Get Started</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
