import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockInstructors } from "../data/instructors";

function InstructorDetailPage() {
  const { id } = useParams();
  const instructor = mockInstructors.find((inst) => inst.id === id);

  if (!instructor) {
    return (
      <div className="page detail-page error-page">
        <h2>Instructor Not Found</h2>
        <p className="description">The instructor profile you are trying to view does not exist.</p>
        <Link to="/instructors" className="cta-button">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="page detail-page">
      <div className="back-nav">
        <Link to="/instructors" className="back-link">
          ← Back to Instructors
        </Link>
      </div>

      <div className="profile-container">
        <div className="profile-header">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="profile-avatar"
          />
          <div className="profile-header-text">
            <h1>{instructor.name}</h1>
            <p className="profile-title">{instructor.specialization} Expert</p>
            <span className={`status-badge ${instructor.status.toLowerCase()}`}>
              {instructor.status}
            </span>
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-section">
            <h3>Biography</h3>
            <p>{instructor.bio}</p>
          </div>

          <div className="profile-grid">
            <div className="profile-stat-card">
              <span className="stat-label">Experience</span>
              <span className="stat-value">{instructor.yearsOfExperience} Years</span>
            </div>
            <div className="profile-stat-card">
              <span className="stat-label">Rating</span>
              <span className="stat-value">⭐ {instructor.rating} / 5.0</span>
            </div>
            <div className="profile-stat-card">
              <span className="stat-label">Active Students</span>
              <span className="stat-value">{instructor.students.toLocaleString()}</span>
            </div>
            <div className="profile-stat-card">
              <span className="stat-label">Email</span>
              <span className="stat-value email">{instructor.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorDetailPage;
