import { Link } from "react-router-dom";
import InstructorCard from "./InstructorCard";

function InstructorList({ instructors, onSelectInstructor }) {
  return (
    <div className="instructor-grid">
      {instructors.map((instructor) => (
        <Link
          key={instructor.id}
          to={`/instructors/${instructor.id}`}
          className="instructor-card-link"
          onClick={() => onSelectInstructor && onSelectInstructor(instructor)}
        >
          <InstructorCard instructor={instructor} />
        </Link>
      ))}
    </div>
  );
}

export default InstructorList;