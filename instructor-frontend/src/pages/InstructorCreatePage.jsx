import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InstructorForm from "../components/InstructorForm";
import { createInstructor } from "../services/instructorApi";

function InstructorCreatePage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleCreateInstructor(instructorData) {
    setSuccessMessage("");
    setErrorMessage("");

    try {
      setLoading(true);

      await createInstructor(instructorData);

      setSuccessMessage("Instructor created successfully");

      setTimeout(() => {
        navigate("/instructors");
      }, 1000);
    } catch (error) {
      setErrorMessage("Failed to create instructor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <h1>Create Instructor</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <InstructorForm
        initialData={null}
        onSubmit={handleCreateInstructor}
        buttonText="Create Instructor"
        loading={loading}
      />
    </div>
  );
}

export default InstructorCreatePage;