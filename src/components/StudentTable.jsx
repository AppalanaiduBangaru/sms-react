import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button,
  TextField, Select, MenuItem, Box,
  TablePagination, Fade
} from "@mui/material";
import { useState } from "react";

export default function StudentTable({ students, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase());
    const matchesCourse =
      course === "all" || s.course === course;
    return matchesSearch && matchesCourse;
  });

  const paginatedStudents = filteredStudents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const courses = ["all", ...new Set(students.map(s => s.course))];

  return (
    <Fade in timeout={800}>
      <Paper
        sx={{
          mt: 4,
          borderRadius: 4,
          overflow: "hidden",
          background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
          }
        }}
      >
        {/* 🔍 Search & Filter */}
        <Box
          display="flex"
          gap={2}
          p={3}
          sx={{
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            flexWrap: "wrap"
          }}
        >
          <TextField
            label="Search by name"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            sx={inputStyle}
          />

          <Select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            sx={{ ...inputStyle, width: 200 }}
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
              <TableRow
                sx={{
                  background: "linear-gradient(90deg, #4e73df, #1cc88a)"
                }}
              >
                {["Name", "Course", "Marks", "Actions"].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      letterSpacing: 1
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedStudents.map((s, index) => (
                <TableRow
                  key={s.id}
                  sx={{
                    transition: "all 0.3s ease",
                    animation: `fadeRow 0.4s ease forwards`,
                    animationDelay: `${index * 0.05}s`,
                    "&:hover": {
                      backgroundColor: "rgba(102,126,234,0.1)",
                      transform: "scale(1.01)"
                    }
                  }}
                >
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.course}</TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "#4e73df" }}
                  >
                    {s.marks}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      sx={editBtnStyle}
                      onClick={() => onEdit(s)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="small"
                      sx={deleteBtnStyle}
                      onClick={() => onDelete(s.id)}
                    >
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
          sx={{
            background: "linear-gradient(90deg, #f5f7fa, #e4ecf7)"
          }}
        />

        <style>
          {`
            @keyframes fadeRow {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </Paper>
    </Fade>
  );
}

/* 🎨 Input Styling */
const inputStyle = {
  background: "rgba(255,255,255,0.2)",
  borderRadius: 2,
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "#c3bef0" },
    "&.Mui-focused fieldset": { borderColor: "#ffffff" }
  },
  transition: "all 0.3s ease",
  "&:hover": { transform: "translateY(-2px)" }
};

/* ✏️ Edit Button */
const editBtnStyle = {
  mr: 1,
  background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
  }
};

/* 🗑 Delete Button */
const deleteBtnStyle = {
  background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
  color: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
  }
};
