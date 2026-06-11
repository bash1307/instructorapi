import { Link } from "react-router-dom";

function InstructorCard({ instructor }) {
  const experience =
    instructor.yearsExperience ?? instructor.yearsOfExperience ?? 0;

  return (
    <div className="card">
      <h3>{instructor.name}</h3>

      <p>Specialization: {instructor.specialization}</p>
      <p>Status: {instructor.status}</p>
      <p>Experience: {experience} years</p>

      <div className="card-actions">
        <Link
          to={`/instructors/${instructor.id}`}
          style={{ display: "block" }}
        >
          View
        </Link>

        <Link
          to={`/instructors/${instructor.id}/edit`}
          style={{ display: "block" }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default InstructorCard;