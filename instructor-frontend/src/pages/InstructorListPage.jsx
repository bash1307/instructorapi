import React, { useState } from "react";
import { mockInstructors } from "../data/instructors";
import InstructorList from "../components/InstructorList";

function InstructorListPage() {
  const [instructors] = useState(mockInstructors);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInstructors = [...filteredInstructors].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sortOption === "experience-asc") {
      return a.yearsOfExperience - b.yearsOfExperience;
    }

    if (sortOption === "experience-desc") {
      return b.yearsOfExperience - a.yearsOfExperience;
    }

    return 0;
  });

  return (
    <div className="page instructor-list-page">
      <h1>Meet Our Elite Instructors</h1>
      <p className="description">
        Browse and filter our database of domain experts. Select an instructor to view their complete profile, stats, and background.
      </p>

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
          <option value="name-asc">Name A–Z</option>
          <option value="name-desc">Name Z–A</option>
          <option value="experience-asc">Experience Low to High</option>
          <option value="experience-desc">Experience High to Low</option>
        </select>

        <button onClick={() => setSearchTerm("")}>Clear</button>
      </div>

      <p className="summary">
        Showing {sortedInstructors.length} of {instructors.length} instructors
      </p>

      <InstructorList
        instructors={sortedInstructors}
        onSelectInstructor={setSelectedInstructor}
      />
    </div>
  );
}

export default InstructorListPage;
