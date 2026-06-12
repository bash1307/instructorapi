const BASE_URL = "http://localhost:8080/api/v1/instructors";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

function prepareInstructorData(instructorData) {
  return {
    name: instructorData.name,
    email: instructorData.email,
    specialization: instructorData.specialization,
    yearsExperience: Number(instructorData.yearsExperience),
    status: instructorData.active ? "ACTIVE" : "INACTIVE",
  };
}

export async function getAllInstructors() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch instructors");
  }

  return response.json();
}

export async function getInstructorById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch instructor");
  }

  return response.json();
}

export async function createInstructor(instructorData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(prepareInstructorData(instructorData)),
  });

  if (!response.ok) {
    throw new Error("Failed to create instructor");
  }

  return response.json();
}

export async function updateInstructor(id, instructorData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(prepareInstructorData(instructorData)),
  });

  if (!response.ok) {
    throw new Error("Failed to update instructor");
  }

  return response.json();
}

export async function deleteInstructor(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete instructor");
  }

  return response.text();
} 