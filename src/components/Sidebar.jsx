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
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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

      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Admin Panel</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth }
        }}
      >
        {drawerContent}
      </Drawer>

     
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {active === "Students" && <Students data={studentsData} />}
        {active === "Course Performance" && (
          <Performance data={studentsData} />
        )}
      </Box>
    </Box>
  );
}