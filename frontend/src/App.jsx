import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Importing the Navbar component
import PublicSpeaking from './pages/PublicSpeaking';
import InterviewPractice from './pages/InterviewPractice';

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/public-speaking" element={<PublicSpeaking />} />
        <Route path="/interview-practice" element={<InterviewPractice />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

// Helper component to conditionally render the Navbar
function ConditionalNavbar() {
  const location = useLocation();
  // Show Navbar on all pages except Login and Signup
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  return <Navbar />;
}

export default App;