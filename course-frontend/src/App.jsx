import "./App.css";

function App() {
  const courses = [
    {
      title: "Java Basics",
      category: "Programming",
      duration: 3,
      status: "Published",
    },
    {
      title: "Spring Boot Basics",
      category: "Backend",
      duration: 5,
      status: "Published",
    },
    {
      title: "React Fundamentals",
      category: "Frontend",
      duration: 4,
      status: "Published",
    },
  ];

  return (
    <div className="app">
      <h1>Course Frontend</h1>
      <p>This is our first React screen.</p>

      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <h2>{course.title}</h2>
          <p>Category: {course.category}</p>
          <p>Duration: {course.duration} hours</p>
          <p>Status: {course.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;