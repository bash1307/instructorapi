import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page home-page">
      <div className="hero-section">
        <h1>Elevate Your Learning with Elite Instructors</h1>
        <p className="description">
          Welcome to the premier Instructor Directory. Connect with industry experts specializing in Java, React, MongoDB, and more. Take your skills to the next level today.
        </p>
        <div className="hero-cta">
          <Link to="/instructors" className="cta-button">
            Browse Instructors
          </Link>
          <Link to="/login" className="cta-button secondary">
            Instructor Portal
          </Link>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Verified Expertise</h3>
          <p>Every instructor is vetted for industry credentials and professional teaching experience.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Modern Stacks</h3>
          <p>Learn relevant skills including frontend frameworks, cloud databases, and enterprise Java backend.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Direct Mentorship</h3>
          <p>Get personalized guidance, feedback on your projects, and speed up your career growth.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
