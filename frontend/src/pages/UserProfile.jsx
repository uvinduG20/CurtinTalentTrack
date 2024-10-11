import { useState } from 'react';
import './UserProfile.css';
import UserScoreChart from '../components/Charts/UserScoreChart';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UserProfile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Passionate about self-improvement and learning.');
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', { name, email, bio });
  };

  return (
    <div className="user-profile">
      <h1 className="profile-title">User Profile</h1>
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <input
            accept="image/*"
            type="file"
            id="upload-image"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="upload-image">
            <IconButton color="primary" component="span" className="upload-button">
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <div className="profile-details">
          {isEditing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="Enter your name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="input-field"
                placeholder="Tell us about yourself"
              ></textarea>
              <div className="action-buttons">
                <button onClick={handleSave} className="save-btn">
                  Save Changes
                </button>
                <button onClick={handleEditToggle} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>{name}</h2>
              <p className="email-text">{email}</p>
              <p className="bio-text">{bio}</p>
              <button onClick={handleEditToggle} className="edit-btn">
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      <div className="score-summary">
        <h2 className="summary-title">Performance Summary</h2>
        <UserScoreChart />
      </div>
    </div>
  );
};

export default UserProfile;
