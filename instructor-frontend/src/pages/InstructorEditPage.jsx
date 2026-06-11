import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InstructorForm from "../components/InstructorForm";
import {
  getInstructorById,
  updateInstructor,
} from "../services/instructorApi";

function InstructorEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function loadInstructor() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getInstructorById(id);

        console.log("Instructor by ID:", data);

        if (data && data.id) {
          setInstructor(data);
        } else {
          setErrorMessage("Instructor not found");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Instructor not found");
      } finally {
        setLoading(false);
      }
    }

    loadInstructor();
  }, [id]);

  async function handleUpdateInstructor(formData) {
    try {
      setSaving(true);
      setErrorMessage("");
      setSuccessMessage("");

      await updateInstructor(id, formData);

      setSuccessMessage("Instructor updated successfully");

      setTimeout(() => {
        navigate("/instructors");
      }, 1000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to update instructor");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="page">
        <h1>Edit Instructor Page</h1>
        <p>Loading instructor...</p>
      </div>
    );
  }

  if (!instructor) {
    return (
      <div className="page">
        <h1>Edit Instructor Page</h1>
        <p className="error-message">
          {errorMessage || "Instructor not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Edit Instructor Page</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <InstructorForm
        initialData={instructor}
        onSubmit={handleUpdateInstructor}
        buttonText="Update Instructor"
        loading={saving}
      />
    </div>
  );
}

export default InstructorEditPage;