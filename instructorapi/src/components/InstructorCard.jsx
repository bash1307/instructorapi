import { Link } from "react-router-dom";

function InstructorCard({ instructor }) {
  return (
    <div className="card">
      <h2>{instructor.name}</h2>
      <p>Specialization: {instructor.specialization}</p>
      <p>Experience: {instructor.yearsOfExperience} years</p>

      <Link to={`/instructors/${instructor.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default InstructorCard;