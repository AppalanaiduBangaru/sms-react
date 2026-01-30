// import { useAuth } from "../auth/AuthContext";

import { Typography, Button, Box } from "@mui/material";
import { useAuth } from "../auth/AuthContext";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  return (
    <Box p={3}>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>

      <Typography variant="h4" mt={2}>
        Welcome {user.username}
      </Typography>

      <Typography>You have read-only access</Typography>
    </Box>
  );
}
