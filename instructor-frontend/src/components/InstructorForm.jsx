import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InstructorForm({
  initialData = null,
  onSubmit,
  buttonText = "Submit",
  loading = false,
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    yearsExperience: "",
    active: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        specialization: initialData.specialization || "",
        yearsExperience: initialData.yearsExperience || "",
        active: initialData.status === "ACTIVE",
      });
    }
  }, [initialData]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleCancel() {
    navigate("/instructors");
  }

  return (
    <form onSubmit={handleSubmit} className="instructor-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Specialization</label>
        <input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Years Experience</label>
        <input
          type="number"
          name="yearsExperience"
          value={formData.yearsExperience}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleChange}
          />
          Active
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : buttonText}
      </button>

      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default InstructorForm;