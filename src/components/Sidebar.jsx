import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
  AppBar,
  CssBaseline,
  IconButton,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

// ✅ Students Component
function Students({ data }) {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold">
        Students Marks
      </Typography>

      {data.map((s, i) => (
        <Typography key={i} sx={{ mt: 1 }}>
          {s.name}: {s.marks}
        </Typography>
      ))}
    </Box>
  );
}

// ✅ Performance Component
function Performance({ data }) {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold">
        Course Performance
      </Typography>

      <Box height={300} mt={2}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="marks" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState("Students");
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth (if any)
    localStorage.clear();
    navigate("/"); // redirect to login page
  };

  // ✅ Data
  const studentsData = [
  ];

  const menuItems = [
    { text: "Students", icon: <PeopleIcon /> },
    { text: "Course Performance", icon: <BarChartIcon /> }
  ];

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        background: "linear-gradient(180deg,#0f2027,#203a43,#2c5364)",
        color: "white"
      }}
    >
      <Toolbar />
      <Typography variant="h6" textAlign="center" mb={2}>
        🎓 Dashboard
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => setActive(item.text)}
            sx={{
              mx: 2,
              my: 1,
              borderRadius: 2,
              background:
                active === item.text
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
              "&:hover": {
                background: "rgba(255,255,255,0.15)",
                transform: "translateX(6px)"
              }
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Admin Panel</Typography>
          </Box>

          {/* ✅ Logout Button */}
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              background: "#ff4d4f",
              "&:hover": { background: "#d9363e" },
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth }
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {active === "Students" && <Students data={studentsData} />}
        {active === "Course Performance" && (
          <Performance data={studentsData} />
        )}
      </Box>
    </Box>
  );
}
