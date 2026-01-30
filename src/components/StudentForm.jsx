import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      course,
      marks,
    };

    onAdd(newStudent);
    setName("");
    setCourse("");
    setMarks("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} mb={3}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Course" value={course} onChange={(e) => setCourse(e.target.value)} required />
      <TextField label="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} required />
      <Button variant="contained" type="submit">Add</Button>
    </Box>
  );
}
