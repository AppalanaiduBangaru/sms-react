import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar
  } from "@mui/material";
  import PeopleIcon from "@mui/icons-material/People";
  import BarChartIcon from "@mui/icons-material/BarChart";
  
  const drawerWidth = 220;
  
  export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
    const drawer = (
      <div>
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
  
          <ListItem button>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Performance" />
          </ListItem>
        </List>
      </div>
    );
  
    return (
      <>
        {/* Mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
  
        {/* Desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </>
    );
  }
  