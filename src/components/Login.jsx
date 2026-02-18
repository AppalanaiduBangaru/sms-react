import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Fade
} from "@mui/material";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) return alert("Invalid credentials");

    login(user);
    navigate(user.role === "admin" ? "/admin" : "/student");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(-45deg, #667eea, #764ba2, #6B73FF, #000DFF)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }}
    >
      <Fade in timeout={800}>
        <Paper
          elevation={10}
          sx={{
            p: 5,
            width: 350,
            borderRadius: 4,
            backdropFilter: "blur(15px)",
            background: "rgba(255, 255, 255, 0.15)",
            color: "white",
            transition: "all 0.4s ease",
            transform: "translateY(0px)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }
          }}
        >
          <Typography
            variant="h5"
            align="center"
            mb={3}
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)" }
            }}
          >
            🔐 Welcome Back
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#90caf9" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" }
                },
                transition: "0.3s"
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#90caf9" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" }
                }
              }}
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: 3,
                background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "linear-gradient(45deg, #0072ff, #00c6ff)"
                }
              }}
            >
              Login
            </Button>

            <Button
              fullWidth
              variant="text"
              sx={{
                mt: 2,
                color: "#e3f2fd",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateX(5px)",
                  color: "white"
                }
              }}
              onClick={() => navigate("/signup")}
            >
              New user? Signup
            </Button>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
}
