import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} EduDirectory. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
