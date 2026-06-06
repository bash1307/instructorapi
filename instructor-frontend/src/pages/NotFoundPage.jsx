import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">🔍</div>
        <h1>404: Page Not Found</h1>
        <p className="description">
          Sorry, the page you are looking for doesn't exist, or has been moved to a new URL.
        </p>
        <Link to="/" className="cta-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
