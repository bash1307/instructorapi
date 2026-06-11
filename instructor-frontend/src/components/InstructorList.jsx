import InstructorCard from "./InstructorCard";

function InstructorList({ instructors, isAdmin, onDelete }) {
  return (
    <div className="instructor-grid">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          instructor={instructor}
          isAdmin={isAdmin}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default InstructorList;