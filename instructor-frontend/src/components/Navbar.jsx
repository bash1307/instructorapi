import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="app-header">
      <div className="header-logo">
        <span className="logo-icon">🏫</span>
        <span className="logo-text">EduDirectory</span>
      </div>
      <nav className="app-nav">
        <Link
          to="/"
          className={`nav-link${isActive("/") ? " active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/instructors"
          className={`nav-link${isActive("/instructors") ? " active" : ""}`}
        >
          Instructors
        </Link>
        <Link
          to="/dashboard"
          className={`nav-link${isActive("/dashboard") ? " active" : ""}`}
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className={`nav-link${isActive("/login") ? " active" : ""}`}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
