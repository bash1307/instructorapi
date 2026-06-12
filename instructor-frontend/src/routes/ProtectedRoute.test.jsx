import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

describe("ProtectedRoute", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("redirects to login when there is no token", () => {
    render(
      <MemoryRouter initialEntries={["/secret"]}>
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <h1>Secret Page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  it("redirects normal user from admin-only route to dashboard", () => {
    localStorage.setItem("token", "fake-token");
    localStorage.setItem("role", "USER");

    render(
      <MemoryRouter initialEntries={["/secret"]}>
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute adminOnly>
                <h1>Secret Page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/dashboard page/i)).toBeInTheDocument();
  });

  it("allows admin user to access admin-only route", () => {
    localStorage.setItem("token", "fake-token");
    localStorage.setItem("role", "ADMIN");

    render(
      <MemoryRouter initialEntries={["/secret"]}>
        <Routes>
          <Route
            path="/secret"
            element={
              <ProtectedRoute adminOnly>
                <h1>Secret Page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/secret page/i)).toBeInTheDocument();
  });
});