import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";

function LoginPage() {
  const [email, setEmail] = useState("Ali@gmail.com");
  const [password, setPassword] = useState("130706");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    }
  }

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-card">
        <h1>Instructor Portal Login</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. instructor@academy.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;