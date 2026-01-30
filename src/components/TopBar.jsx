import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  
  export default function TopBar({ handleDrawerToggle }) {
    return (
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
  
          <Typography variant="h6">
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  