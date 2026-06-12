import { Link } from "react-router-dom";

function InstructorCard({ instructor, isAdmin, onDelete }) {
  const experience =
    instructor.yearsExperience ?? instructor.yearsOfExperience ?? 0;

  const statusText =
    instructor.status === "ACTIVE" ? "Active" : "Inactive";

  function handleDelete() {
    onDelete(instructor);
  }

  return (
    <div className="card">
      <h3>{instructor.name}</h3>

      <p>Email: {instructor.email}</p>
      <p>Specialization: {instructor.specialization}</p>
      <p>Years Experience: {experience}</p>
      <p>Status: {statusText}</p>

      <div className="card-actions">
        <Link to={`/instructors/${instructor.id}`}>
          View Details
        </Link>

        {isAdmin && (
          <>
            <Link to={`/instructors/${instructor.id}/edit`}>
              Edit
            </Link>

            <button
              type="button"
              onClick={handleDelete}
              className="delete-button"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default InstructorCard;