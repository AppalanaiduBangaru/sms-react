import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  Fade
} from "@mui/material";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful");
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(-45deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }}
    >
      <Fade in timeout={800}>
        <Paper
          elevation={12}
          sx={{
            p: 5,
            width: 360,
            borderRadius: 4,
            backdropFilter: "blur(18px)",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            transition: "all 0.4s ease",
            "&:hover": {
              transform: "translateY(-10px) scale(1.03)",
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
            👤 Create Account
          </Typography>

          <form onSubmit={handleSignup}>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              sx={inputStyle}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              sx={inputStyle}
            />

            <TextField
              select
              fullWidth
              label="Role"
              margin="normal"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={inputStyle}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: 3,
                background: "linear-gradient(45deg, #ff6a00, #ee0979)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  background: "linear-gradient(45deg, #ee0979, #ff6a00)"
                }
              }}
            >
              Create Account
            </Button>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
}

const inputStyle = {
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "#ffd6ff" },
    "&.Mui-focused fieldset": { borderColor: "#ff6a00" }
  },
  transition: "0.3s"
};
