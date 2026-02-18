import { Typography, Button, Box, Paper, Fade } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../auth/AuthContext";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6a11cb 100%)",
        p: 3,
      }}
    >
      <Fade in timeout={800}>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 4,
            borderRadius: 4,
            backdropFilter: "blur(15px)",
            background: "rgba(255,255,255,0.15)",
            boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
            textAlign: "center",
            transition: "all 0.4s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            },
          }}
        >
          {/* Welcome Text */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#fff",
              letterSpacing: 1,
              textShadow: "0 4px 15px rgba(0,0,0,0.3)",
              animation: "fadeSlide 1s ease",
              "@keyframes fadeSlide": {
                from: { opacity: 0, transform: "translateY(-15px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            👋 Welcome {user.username}
          </Typography>

          <Typography
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.1rem",
            }}
          >
            You have read-only access to student records.
          </Typography>

          {/* Logout Button */}
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={logout}
            sx={{
              background:
                "linear-gradient(90deg, #ff512f, #dd2476)",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: 3,
              transition: "all 0.3s ease",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              "&:hover": {
                transform: "scale(1.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                background:
                  "linear-gradient(90deg, #ff512f, #ff0844)",
              },
            }}
          >
            Logout
          </Button>
        </Paper>
      </Fade>
    </Box>
  );
}
