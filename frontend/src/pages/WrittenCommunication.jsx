// src/pages/WrittenCommunication.jsx
import { useState } from 'react';
import { Typography, Button, Input, CircularProgress } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles here
import CloudUpload from '@mui/icons-material/CloudUpload';
import './WrittenCommunication.css';
import heroImage from '../assets/placeholder3.jpg';
import logo from '../assets/CTTLine.png';

const WrittenCommunication = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [text, setText] = useState('');

  const handleDocumentUpload = () => {
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
    handleDocumentUpload(); // Simulate the upload on drop
  };

  const handleTextChange = (value) => {
    setText(value);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="written-communication">
      {/* Hero Section */}
      <div className="whero-section">
        <div className="whero-content">
          <h1 className="whero-title">Written Communication Practice</h1>
          <p className="whero-subtitle">
            Improve your writing skills with focused exercises and practice
          </p>
        </div>
        <div className="whero-image-wrapper">
          <img src={heroImage} alt="Written Communication Hero" className="whero-image" />
        </div>
      </div>

      {/* Tips Section */}
      <div className="wtips-section">
        <div className="wtips-box">
          <Typography variant="h4" fontFamily={'Poppins'} fontWeight={'bold'} color="#e8b028" gutterBottom>
            Writing Tips
          </Typography>
          <ul className="wtips-list">
            <li>Organize your thoughts before you start writing.</li>
            <li>Focus on clarity and avoid complex sentences.</li>
            <li>Review grammar and spelling before submitting.</li>
            <li>Practice writing concisely and to the point.</li>
            <li>Read examples of well-written texts to learn structure.</li>
            <li>Use active voice wherever possible for stronger impact.</li>
            <li>Keep your writing relevant to the topic at hand.</li>
          </ul>
        </div>
      </div>

      {/* Writing Area */}
      <div className="writing-area">
        <Typography variant="h5" fontFamily={'Poppins'} fontWeight={'bold'} color="#e8b028" gutterBottom>
          Write Your Essay
        </Typography>
        <div className="word-count">Word Count: {wordCount}</div>
        <ReactQuill
          value={text}
          onChange={handleTextChange}
          className="text-editor"
          placeholder="Start typing your essay here..."
        />
      </div>

      {/* Document Upload Section */}
      <div className="document-upload">
        <div className="back-placeholder">
          <h3 className="upload-title">Upload Your Writing Practice</h3>
          <div
            className={`upload-area ${dragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p>Drag & Drop your document here or</p>
            <label htmlFor="upload-document">
              <Input
                accept=".doc,.docx,.pdf"
                id="upload-document"
                type="file"
                onChange={handleDocumentUpload}
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
              Document uploaded successfully!
            </Typography>
          )}
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

export default WrittenCommunication;
