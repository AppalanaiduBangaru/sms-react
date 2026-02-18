import { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Divider,
  Typography,
  Fade,
  Slide,
  Paper
} from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6a11cb 100%)",
      }}
    >
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
          p: 4,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Animated Title */}
        <Slide direction="down" in timeout={600}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#fff",
              letterSpacing: 1,
              textShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            🚀 Admin Dashboard
          </Typography>
        </Slide>

        {/* Student Form Card */}
        <Fade in timeout={800}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 4,
              backdropFilter: "blur(15px)",
              background: "rgba(255,255,255,0.1)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              },
            }}
          >
            <StudentForm
              onAdd={(s) => setStudents([...students, s])}
            />
          </Paper>
        </Fade>

        {/* Student Table Card */}
        <Fade in timeout={1000}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 4,
              backdropFilter: "blur(15px)",
              background: "rgba(255,255,255,0.12)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              },
            }}
          >
            <StudentTable
              students={students}
              onEdit={setEditStudent}
              onDelete={(id) =>
                setStudents(students.filter((s) => s.id !== id))
              }
            />
          </Paper>
        </Fade>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        />

        {/* Chart Section */}
        <Slide direction="up" in timeout={1200}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "#fff",
                fontWeight: 600,
                textShadow: "0 3px 10px rgba(0,0,0,0.3)",
              }}
            >
              📊 Student Performance
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                backdropFilter: "blur(15px)",
                background: "rgba(255,255,255,0.15)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <StudentChart students={students} />
            </Paper>
          </Box>
        </Slide>

        {/* Edit Dialog */}
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
