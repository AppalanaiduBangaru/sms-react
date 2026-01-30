import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button,
    TextField, Select, MenuItem, Box, TablePagination
  } from "@mui/material";
  import { useState } from "react";
  
  export default function StudentTable({ students, onEdit, onDelete }) {
    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("all");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    // 🔍 Search + 🎯 Filter logic
    const filteredStudents = students.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase());
  
      const matchesCourse =
        course === "all" || s.course === course;
  
      return matchesSearch && matchesCourse;
    });
  
    // 📄 Pagination logic
    const paginatedStudents = filteredStudents.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  
    const courses = ["all", ...new Set(students.map(s => s.course))];
  
    return (
      <Paper sx={{ mt: 3 }}>
        {/* 🔍 Search & Filter */}
        <Box display="flex" gap={2} p={2}>
          <TextField
            label="Search by name"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
          />
  
          <Select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            sx={{ width: 200 }}
          >
            {courses.map((c) => (
              <MenuItem key={c} value={c}>
                {c === "all" ? "All Courses" : c}
              </MenuItem>
            ))}
          </Select>
        </Box>
  
        {/* 📋 Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Marks</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {paginatedStudents.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.course}</TableCell>
                  <TableCell>{s.marks}</TableCell>
                  <TableCell>
                    <Button size="small" onClick={() => onEdit(s)}>Edit</Button>
                    <Button size="small" color="error" onClick={() => onDelete(s.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        {/* 📄 Pagination */}
        <TablePagination
          component="div"
          count={filteredStudents.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10]}
        />
      </Paper>
    );
  }
  