import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/instructors">Instructors</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;