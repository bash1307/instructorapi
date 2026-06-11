import React, { useEffect, useState } from "react";
import InstructorList from "../components/InstructorList";
import { getAllInstructors } from "../services/instructorApi";

function InstructorListPage() {
  const [instructors, setInstructors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInstructors() {
      try {
        const data = await getAllInstructors();
        setInstructors(data.content || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load instructors");
      }
    }

    loadInstructors();
  }, []);

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInstructors = [...filteredInstructors].sort((a, b) => {
    const expA = a.yearsExperience ?? a.yearsOfExperience ?? 0;
    const expB = b.yearsExperience ?? b.yearsOfExperience ?? 0;

    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    if (sortOption === "experience-asc") return expA - expB;
    if (sortOption === "experience-desc") return expB - expA;

    return 0;
  });

  return (
    <div className="page instructor-list-page">
      <h1>Meet Our Elite Instructors</h1>

      <p className="description">
        Browse and filter our database of domain experts. Select an instructor
        to view their complete profile, stats, and background.
      </p>

      {error && <p className="error-message">{error}</p>}

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search instructor by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="experience-asc">Experience Low to High</option>
          <option value="experience-desc">Experience High to Low</option>
        </select>

        <button onClick={() => setSearchTerm("")}>Clear</button>
      </div>

      <p className="summary">
        Showing {sortedInstructors.length} of {instructors.length} instructors
      </p>

      <InstructorList instructors={sortedInstructors} />
    </div>
  );
}

export default InstructorListPage;