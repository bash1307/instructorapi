function InstructorCard({ instructor }) {
  return (
    <div className="card">
      <h3>{instructor.name}</h3>

      <p>Specialization: {instructor.specialization}</p>

      <p>Status: {instructor.status}</p>

      <p>Experience: {instructor.yearsOfExperience} years</p>
    </div>
  );
}

export default InstructorCard;