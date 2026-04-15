import React, { useState } from "react";

function StudentList({ learners, onDelete }){
   const [showAdults, setShowAdults] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

   const filteredLearners = learners
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) => (showAdults ? student.age > 18 : true));

   return (
    <div className="list-container">
      <h2>📋 Student Records</h2>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🎯 FILTER BUTTON */}
      <button onClick={() => setShowAdults(!showAdults)}>
        {showAdults ? "Show All" : "Only Age > 18"}
      </button>

      <ul>
        {filteredLearners.map((student, index) => (
          <li key={index} className="card">
            <span>
              <strong>{student.name}</strong> | {student.age} |{" "}
              {student.course}
            </span>

            {/* 🗑️ DELETE BUTTON */}
            <button
              className="delete-btn"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;