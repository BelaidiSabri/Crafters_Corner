import React from "react";
import { useSelector } from "react-redux";
import './profile.css'


const Profile = () => {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>

      <div className="profile-section">
        <h3>Personal Information</h3>
        <div className="profile-field">
          <label className="profile-label">Username:</label>
          <span className="profile-value">{profile.artisan.username}</span>
        </div>
        <div className="profile-field">
          <label className="profile-label">Name:</label>
          <span className="profile-value">{profile.artisan.name}</span>
        </div>
        <div className="profile-field">
          <label className="profile-label">Last Name:</label>
          <span className="profile-value">{profile.artisan.lastname}</span>
        </div>
      </div>

      <div className="profile-section">
        <h3>Artisan Details</h3>
        <div className="profile-field">
          <label className="profile-label">Specialities:</label>
          <span className="profile-value">{profile.artisan.specialities.join(", ")}</span>
        </div>
        <div className="profile-field">
          <label className="profile-label">Self Description:</label>
          <span className="profile-value">{profile.artisan.selfDescription}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
