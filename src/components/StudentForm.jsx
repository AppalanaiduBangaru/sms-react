import { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";

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
    <Paper
      elevation={12}
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 4,
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        animation: "slideIn 0.8s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        },
        "@keyframes slideIn": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: "white",
          fontWeight: "bold",
          letterSpacing: 1,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)" }
        }}
      >
        🎓 Add New Student
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap"
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={inputStyle}
        />

        <TextField
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          sx={inputStyle}
        />

        <TextField
          label="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
          sx={inputStyle}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            px: 4,
            borderRadius: 3,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ff6a00, #ee0979)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              background: "linear-gradient(45deg, #ee0979, #ff6a00)"
            }
          }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
}

const inputStyle = {
  minWidth: 180,
  background: "rgba(255,255,255,0.15)",
  borderRadius: 2,
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "#ffb3ff" },
    "&.Mui-focused fieldset": {
      borderColor: "#ff6a00",
      transition: "0.3s"
    }
  },
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)"
  }
};
