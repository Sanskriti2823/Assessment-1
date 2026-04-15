import React, { useState } from "react";
import StudentForm from "./student_form";
import StudentList from "./student_list";
import "./App.css";

function App() {
  const [learners, setLearners] = useState([]);
  const [clickCount, setClickCount] = useState(0);

// MOCK API CALL - SIMULATES STUDENT REGISTRATION
  const registerLearner = async (studentData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(studentData), 1000);
    });
  };
 // ADD FUNCTION - VALIDATES AGE AND UPDATES STATE
  const handleAddLearner = async (student) => {
    if (student.age < 18) {
      alert("Only 18+ allowed!");
      return;
    }

    const newStudent = await registerLearner(student);

    setLearners((prev) => [...prev, newStudent]);
    setClickCount((prev) => prev + 1);
  };

  // DELETE FUNCTION - REMOVES STUDENT BY INDEX
  const handleDeleteLearner = (index) => {
    setLearners((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>🎓 Student Manager</h1>

      <StudentForm onAdd={handleAddLearner} />

      <h3>Total Adds: {clickCount}</h3>

      <StudentList
        learners={learners}
        onDelete={handleDeleteLearner}
      />
    </div>
  );
}

export default App;