import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { Box, Typography, CircularProgress, Fade } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecking(false);
    }, 600); // smooth delay for animation

    return () => clearTimeout(timer);
  }, []);

  // Loading Animation
  if (checking) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white"
        }}
      >
        <CircularProgress sx={{ color: "white", mb: 2 }} />
        <Typography variant="h6" sx={{ animation: "pulse 1.5s infinite" }}>
          Checking Authentication...
        </Typography>

        <style>
          {`
            @keyframes pulse {
              0% { opacity: 0.6; }
              50% { opacity: 1; }
              100% { opacity: 0.6; }
            }
          `}
        </style>
      </Box>
    );
  }

  // Not logged in
  if (!user) return <Navigate to="/" />;

  // Role mismatch
  if (role && user.role !== role) {
    return (
      <Fade in timeout={600}>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
            color: "white",
            textAlign: "center",
            p: 3
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              animation: "shake 0.5s"
            }}
          >
            🚫 Access Denied
          </Typography>

          <Typography variant="body1">
            You do not have permission to access this page.
          </Typography>

          <style>
            {`
              @keyframes shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(5px); }
                75% { transform: translateX(-5px); }
                100% { transform: translateX(0); }
              }
            `}
          </style>
        </Box>
      </Fade>
    );
  }

  return children;
}
