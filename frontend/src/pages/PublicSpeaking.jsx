// src/pages/PublicSpeaking.jsx
import { useState } from 'react';
import { Typography, Button, Input, CircularProgress } from '@mui/material';
import CloudUpload from '@mui/icons-material/CloudUpload';
import './PublicSpeaking.css';
import heroImage from '../assets/placeholder1.jpg';
import logo from '../assets/CTTLine.png';

const PublicSpeaking = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleVideoUpload = () => {
    // Simulate upload process
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
    }, 2000); // Simulate a delay for the upload
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    handleVideoUpload(); // Simulate the upload on drop
  };

  return (
    <div className="public-speaking">
      {/* Hero Section */}
      <div className="phero-section">
        <div className="phero-content">
          <h1 className="phero-title">Public Speaking Practice</h1>
          <p className="phero-subtitle">Master the art of public speaking with practical exercises</p> {/* Subtitle added */}
        </div>
        <div className="phero-image-wrapper">
          <img src={heroImage} alt="Public Speaking Hero" className="phero-image" />
        </div>
      </div>

      {/* Tips Section */}
      <div className="ptips-section">
        <div className="ptips-box">
          <Typography variant="h4" fontFamily={'Poppins'} fontWeight={'bold'} color="#e8b028" gutterBottom>
            Public Speaking Tips
          </Typography>
          <ul className="ptips-list">
            <li>Maintain eye contact with your audience.</li>
            <li>Use appropriate gestures and facial expressions.</li>
            <li>Practice clear and confident speech.</li>
            <li>Record and review your practice sessions to identify areas of improvement.</li>
            <li>Organize your thoughts and structure your speech clearly.</li>
            <li>Engage with your audience by asking questions or using anecdotes.</li>
            <li>Practice controlling your pace and tone for emphasis and clarity.</li>
          </ul>
        </div>
      </div>

      {/* Video Upload Section */}
      <div className="video-upload">
        <div className="back-placeholder">
          <h3 className="upload-title">Upload Your Practice Video</h3>
          <div
            className={`upload-area ${dragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p>Drag & Drop your video file here or</p>
            <label htmlFor="upload-video">
              <Input
                accept="video/*"
                id="upload-video"
                type="file"
                onChange={handleVideoUpload}
                style={{ display: 'none' }}
              />
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUpload />}
                color="primary"
              >
                Upload File
              </Button>
            </label>
          </div>
          {uploading && <CircularProgress sx={{ marginTop: 2 }} />}
          {uploadSuccess && (
            <Typography variant="body2" color="success.main" fontFamily={'Poppins'} sx={{ marginTop: 2 }}>
              Video uploaded successfully!
            </Typography>
          )}
        </div>
      </div>

      {/* YouTube Video Player Section (unchanged) */}
      <div className="video-player">
        <Typography variant="h4" fontFamily={'Poppins'} color="#e8b028" fontWeight={'bold'} gutterBottom>
          Public Speaking Practice Videos
        </Typography>
        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xSp78RwcAS4?si=yJ1EoAQa5ck_mdmg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="CurtinTalentTrack Logo" />
        </div>
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/public-speaking">Speaking</a></li>
          <li><a href="/interviews">Interviews</a></li>
          <li><a href="/writing">Writing</a></li>
          <li><a href="/thinking">Thinking</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default PublicSpeaking;
