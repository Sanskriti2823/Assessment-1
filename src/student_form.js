import React, { useState } from "react";

function StudentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });
// CHANGE FUNCTION - UPDATES FORM STATE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
// SUBMIT FUNCTION - VALIDATES INPUT AND CALLS onAdd
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.course) {
      alert("All fields are required!");
      return;
    }

    onAdd({
      name: formData.name,
      age: Number(formData.age),
      course: formData.course,
    });

    // Reset form
    setFormData({
      name: "",
      age: "",
      course: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={formData.course}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;