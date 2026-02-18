import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Slide,
  Box
} from "@mui/material";
import { useState, useEffect, forwardRef } from "react";

// Slide animation
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditStudentDialog({ open, student, onClose, onSave }) {
  const [form, setForm] = useState({ name: "", course: "", marks: "" });

  useEffect(() => {
    if (student) setForm(student);
  }, [student]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 2,
          background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "1.4rem",
          color: "#1976d2"
        }}
      >
        ✏️ Edit Student
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Course"
            name="course"
            value={form.course}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Marks"
            name="marks"
            value={form.marks}
            onChange={handleChange}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 3,
            textTransform: "none"
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            px: 3,
            "&:hover": {
              background: "linear-gradient(45deg, #1565c0, #1e88e5)"
            }
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
