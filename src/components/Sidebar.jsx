import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";

const drawerWidth = 240;

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const [active, setActive] = useState("Students");

  const menuItems = [
    { text: "Students", icon: <PeopleIcon /> },
    { text: "Performance", icon: <BarChartIcon /> }
  ];

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        background: "linear-gradient(180deg, #1e3c72, #2a5298)",
        color: "white"
      }}
    >
      <Toolbar />
      
      {/* Logo / Title */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 2,
          letterSpacing: 1,
          animation: "fadeIn 1s ease"
        }}
      >
        🎓 Admin Panel
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => setActive(item.text)}
            sx={{
              mx: 1.5,
              my: 1,
              borderRadius: 2,
              transition: "all 0.3s ease",
              background:
                active === item.text
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
              "&:hover": {
                background: "rgba(255,255,255,0.15)",
                transform: "translateX(8px)"
              }
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                transition: "0.3s",
                transform:
                  active === item.text ? "scale(1.2)" : "scale(1)"
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: active === item.text ? "bold" : "normal"
              }}
            />
          </ListItemButton>
        ))}
      </List>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            borderRadius: "0 16px 16px 0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "all 0.4s ease"
          }
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            borderRadius: "0 20px 20px 0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            transition: "all 0.4s ease"
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
