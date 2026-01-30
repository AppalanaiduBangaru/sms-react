import { useState, useEffect } from "react";
import { Box, Toolbar, Divider, Typography } from "@mui/material";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import StudentChart from "../components/StudentChart";
import EditStudentDialog from "../components/EditStudentDialog";

const drawerWidth = 220;

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />

        <Typography variant="h4" mb={2}>
          Admin Dashboard
        </Typography>

        <StudentForm onAdd={(s) => setStudents([...students, s])} />

        <StudentTable
          students={students}
          onEdit={setEditStudent}
          onDelete={(id) =>
            setStudents(students.filter((s) => s.id !== id))
          }
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" mb={2}>
          📊 Student Performance
        </Typography>

        <StudentChart students={students} />

        <EditStudentDialog
          open={Boolean(editStudent)}
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onSave={(updated) =>
            setStudents(
              students.map((s) =>
                s.id === updated.id ? updated : s
              )
            )
          }
        />
      </Box>
    </Box>
  );
}
