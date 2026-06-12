import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInstructorById } from "../services/instructorApi";

function InstructorDetailPage() {
  const { id } = useParams();

  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadInstructor() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getInstructorById(id);
        setInstructor(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Instructor not found");
      } finally {
        setLoading(false);
      }
    }

    loadInstructor();
  }, [id]);

  if (loading) {
    return (
      <div className="page">
        <p>Loading instructor details...</p>
      </div>
    );
  }

  if (!instructor) {
    return (
      <div className="page">
        <p className="error-message">{errorMessage}</p>
        <Link to="/instructors">Back to Instructors</Link>
      </div>
    );
  }

  const experience =
    instructor.yearsExperience ?? instructor.yearsOfExperience ?? 0;

  return (
    <div className="page">
      <h1>{instructor.name}</h1>

      <div className="card">
        <p>Email: {instructor.email}</p>
        <p>Specialization: {instructor.specialization}</p>
        <p>Status: {instructor.status}</p>
        <p>Experience: {experience} years</p>
      </div>

      <br />

      <Link to="/instructors">Back to Instructors</Link>
      {" | "}
      <Link to={`/instructors/${instructor.id}/edit`}>Edit</Link>
    </div>
  );
}

export default InstructorDetailPage;