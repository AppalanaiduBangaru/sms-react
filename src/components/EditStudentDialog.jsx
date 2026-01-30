import {
    Dialog, DialogTitle, DialogContent,
    DialogActions, Button, TextField
  } from "@mui/material";
  import { useState, useEffect } from "react";
  
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
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Student</DialogTitle>
  
        <DialogContent>
          <TextField
            fullWidth margin="dense" label="Name"
            name="name" value={form.name} onChange={handleChange}
          />
          <TextField
            fullWidth margin="dense" label="Course"
            name="course" value={form.course} onChange={handleChange}
          />
          <TextField
            fullWidth margin="dense" label="Marks"
            name="marks" value={form.marks} onChange={handleChange}
          />
        </DialogContent>
  
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    );
  }
  