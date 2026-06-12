import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import InstructorListPage from "./pages/InstructorListPage";
import InstructorDetailPage from "./pages/InstructorDetailPage";
import InstructorCreatePage from "./pages/InstructorCreatePage";
import InstructorEditPage from "./pages/InstructorEditPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <div className="header-logo">
            <span className="logo-icon">🏫</span>
            <span className="logo-text">EduDirectory</span>
          </div>

          <nav className="app-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>

            <NavLink to="/instructors" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Instructors
            </NavLink>

            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Dashboard
            </NavLink>

            {!isLoggedIn && (
              <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Login
              </NavLink>
            )}

            {isLoggedIn && (
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            )}
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/instructors" element={<InstructorListPage />} />

            <Route
              path="/instructors/create"
              element={
                <ProtectedRoute adminOnly={true}>
                  <InstructorCreatePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/instructors/:id/edit"
              element={
                <ProtectedRoute adminOnly={true}>
                  <InstructorEditPage />
                </ProtectedRoute>
              }
            />

            <Route path="/instructors/:id" element={<InstructorDetailPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} EduDirectory. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;