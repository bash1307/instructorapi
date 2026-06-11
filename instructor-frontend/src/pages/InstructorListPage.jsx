import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import InstructorCard from "../components/InstructorCard";
import SearchBox from "../components/SearchBox";
import Pagination from "../components/Pagination";

import {
  getAllInstructors,
  deleteInstructor,
} from "../services/instructorApi";

function InstructorListPage() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const isAdmin = localStorage.getItem("role") === "ADMIN";

  useEffect(() => {
    async function loadInstructors() {
      try {
        setLoading(true);
        setError("");

        const data = await getAllInstructors();
        setInstructors(data.content || []);
      } catch (err) {
        console.error(err);
        setError("Could not load instructors.");
      } finally {
        setLoading(false);
      }
    }

    loadInstructors();
  }, []);

  function handleSearchChange(value) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handlePageSizeChange(value) {
    setPageSize(value);
    setCurrentPage(1);
  }

  async function handleDeleteInstructor(instructor) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${instructor.name}?`
    );

    if (!confirmDelete) return;

    try {
      setError("");
      setSuccessMessage("");

      await deleteInstructor(instructor.id);

      const updatedInstructors = instructors.filter(
        (item) => item.id !== instructor.id
      );

      setInstructors(updatedInstructors);
      setSuccessMessage("Instructor deleted successfully.");
    } catch (err) {
      console.error(err);
      setError("Failed to delete instructor.");
    }
  }

  const normalizedSearchTerm = searchTerm.toLowerCase();

  const filteredInstructors = instructors.filter((instructor) => {
    const name = instructor.name?.toLowerCase() || "";
    const email = instructor.email?.toLowerCase() || "";
    const specialization = instructor.specialization?.toLowerCase() || "";
    const status = instructor.status === "ACTIVE" ? "active" : "inactive";

    return (
      name.includes(normalizedSearchTerm) ||
      email.includes(normalizedSearchTerm) ||
      specialization.includes(normalizedSearchTerm) ||
      status.includes(normalizedSearchTerm)
    );
  });

  const totalPages = Math.ceil(filteredInstructors.length / pageSize) || 1;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedInstructors = filteredInstructors.slice(
    startIndex,
    endIndex
  );

  if (loading) {
    return (
      <div className="page instructor-list-page">
        <h1>Meet Our Elite Instructors</h1>
        <p>Loading instructors...</p>
      </div>
    );
  }

  return (
    <div className="page instructor-list-page">
      <h1>Meet Our Elite Instructors</h1>

      <p className="description">
        Browse and filter our database of domain experts. Select an instructor
        to view their complete profile, stats, and background.
      </p>

      {isAdmin && (
        <Link to="/instructors/create" className="create-instructor-button">
          + Add Instructor
        </Link>
      )}

      {error && <p className="error-message">{error}</p>}

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      <SearchBox
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        resultCount={filteredInstructors.length}
        totalCount={instructors.length}
      />

      {instructors.length === 0 && !error && (
        <p>No instructors found.</p>
      )}

      {instructors.length > 0 && filteredInstructors.length === 0 && (
        <p>No instructors match your search.</p>
      )}

      <div className="instructor-grid">
        {paginatedInstructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
            isAdmin={isAdmin}
            onDelete={handleDeleteInstructor}
          />
        ))}
      </div>

      {filteredInstructors.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}

export default InstructorListPage;