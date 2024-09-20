// src/pages/InterviewPractice.jsx
import { useState } from "react";
import { Typography, Button, Input, CircularProgress } from "@mui/material";
import CloudUpload from "@mui/icons-material/CloudUpload";
import "./InterviewPractice.css";
import heroImage from "../assets/placeholder2.jpg"; // Add your interview hero image here

import logo from "../assets/CTTLine.png";

const InterviewPractice = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleVideoUpload = () => {
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
    handleVideoUpload();
  };

  return (
    <div className="interview-practice">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Interview Practice</h1>
          <p className="hero-subtitle">
            Prepare for your interviews with real-world practice scenarios
          </p>{" "}
          {/* Subtitle added */}
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Interview Hero" className="hero-image" />
        </div>
      </div>

      {/* Tips Section */}
      <div className="i-tips-section">
        <div className="i-tips-box">
          <Typography
            variant="h4"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            color="#e8b028"
            gutterBottom
          >
            Interview Tips
          </Typography>
          <ul className="i-tips-list">
            <li>Practice answering common interview questions.</li>
            <li>Maintain good posture and eye contact.</li>
            <li>Be prepared to talk about your achievements.</li>
            <li>Research the company and the role beforehand.</li>
            <li>Keep your answers concise and to the point.</li>
            <li>Practice confident and clear communication.</li>
            <li>Prepare questions to ask the interviewer.</li>
          </ul>
        </div>
      </div>

      {/* Video Upload Section */}
      <div className="video-upload">
        <div className="back-placeholder">
          <h3 className="upload-title">Upload Your Interview Practice Video</h3>
          <div
            className={`upload-area ${dragging ? "dragging" : ""}`}
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
                style={{ display: "none" }}
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
            <Typography
              variant="body2"
              color="success.main"
              fontFamily={"Poppins"}
              sx={{ marginTop: 2 }}
            >
              Video uploaded successfully!
            </Typography>
          )}
        </div>
      </div>

      {/* YouTube Video Player Section */}
      <div className="video-player">
        <Typography
          variant="h4"
          fontFamily={"Poppins"}
          color="#e8b028"
          fontWeight={"bold"}
          gutterBottom
        >
          Interview Practice Videos
        </Typography>
        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HG68Ymazo18?si=tIRtBJ3YAmeD5xi7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="CurtinTalentTrack Logo" />
        </div>
        <ul className="footer-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/public-speaking">Speaking</a>
          </li>
          <li>
            <a href="/interviews">Interviews</a>
          </li>
          <li>
            <a href="/writing">Writing</a>
          </li>
          <li>
            <a href="/thinking">Thinking</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default InterviewPractice;
