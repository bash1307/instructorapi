import { useState } from "react";
import "./App.css";
import InstructorList from "./components/InstructorList";

function App() {

  const [instructors, setInstructors] = useState([
    {
      id: "1",
      name: "Alice Tan",
      specialization: "Java",
      status: "ACTIVE",
      yearsOfExperience: 5,
    },
    {
      id: "2",
      name: "Ali",
      specialization: "Backend",
      status: "ACTIVE",
      yearsOfExperience: 4,
    },
    {
      id: "3",
      name: "Abu",
      specialization: "Frontend",
      status: "ACTIVE",
      yearsOfExperience: 2,
    },
  ]);

  return (
    <div className="app">
      <h1>Instructor Frontend</h1>

      <h2>Total instructors: {instructors.length}</h2>

      <InstructorList instructors={instructors} />
    </div>
  );
}

export default App;