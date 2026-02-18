import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  useScrollTrigger
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopBar({ handleDrawerToggle }) {
  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          transition: "all 0.4s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "rotate(90deg) scale(1.1)",
                color: "#7c4dff",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ffffff, #c3cfe2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                textShadow: "0 4px 15px rgba(124,77,255,0.6)",
              },
              animation: "fadeSlide 0.8s ease",
              "@keyframes fadeSlide": {
                from: { opacity: 0, transform: "translateY(-10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Student Management System
          </Typography>

        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
