import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const stats = [
    { label: "Hours Taught", value: "320 hrs", change: "+12% this month" },
    { label: "Average Class Rating", value: "4.9 / 5.0", change: "Top 5% schoolwide" },
    { label: "Active Student Enrollment", value: "154 students", change: "+8 new enrollments" },
    { label: "Pending Evaluations", value: "3", change: "Due in 2 days" }
  ];

  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Instructor Workspace</h1>
          <p className="description">
            Access your teaching insights, upcoming lecture schedules, and student feedback statistics.
          </p>
        </div>

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="dashboard-stat-card">
            <h3>{stat.label}</h3>
            <div className="stat-value">{stat.value}</div>
            <span className="stat-change">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="dashboard-layout">
        <div className="dashboard-card main-widget">
          <h3>Upcoming Classes</h3>
          <div className="table-responsive">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Advanced Spring Boot Microservices</td>
                  <td>June 12th, 10:00 AM</td>
                  <td>Live Lecture</td>
                  <td><span className="badge badge-success">Scheduled</span></td>
                </tr>
                <tr>
                  <td>Vite + React Core Architecture</td>
                  <td>June 15th, 2:00 PM</td>
                  <td>Workshop</td>
                  <td><span className="badge badge-success">Scheduled</span></td>
                </tr>
                <tr>
                  <td>NoSQL Design & Scaling with MongoDB</td>
                  <td>June 18th, 1:00 PM</td>
                  <td>Q&A Session</td>
                  <td><span className="badge badge-warning">Draft</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-card side-widget">
          <h3>Recent Student Feedback</h3>
          <div className="feedback-item">
            <div className="feedback-stars">⭐⭐⭐⭐⭐</div>
            <p className="feedback-text">"Awesome breakdown of complex concepts. The Spring Boot demo was fantastic!"</p>
            <span className="feedback-author">- Java Course Student</span>
          </div>
          <hr />
          <div className="feedback-item">
            <div className="feedback-stars">⭐⭐⭐⭐⭐</div>
            <p className="feedback-text">"Really appreciated the walkthroughs of React Hooks. Excellent teaching pace."</p>
            <span className="feedback-author">- React Course Student</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;