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

  const [errors, setErrors] = useState({});

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

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";
    if (!formData.yearsExperience.toString().trim()) newErrors.yearsExperience = "Years experience is required";

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);
  }

  function handleCancel() {
    navigate("/instructors");
  }

  return (
    <form onSubmit={handleSubmit} className="instructor-form" noValidate>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Specialization</label>
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
        {errors.specialization && <p>{errors.specialization}</p>}
      </div>

      <div className="form-group">
        <label>Years Experience</label>
        <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} />
        {errors.yearsExperience && <p>{errors.yearsExperience}</p>}
      </div>

      <div className="form-group">
        <label>
          <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} />
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