import { TableCell, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StudentItem({ student, onEdit, onDelete }) {
  return (
    <>
      <TableCell
        sx={{
          fontWeight: 500,
          transition: "0.3s",
        }}
      >
        {student.name}
      </TableCell>

      <TableCell>{student.course}</TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          color: "#764ba2",
        }}
      >
        {student.marks}
      </TableCell>

      <TableCell>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={() => onEdit(student)}
            sx={{
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.15) rotate(5deg)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
              }
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => onDelete(student.id)}
            sx={{
              background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.15) rotate(-5deg)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
              }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </TableCell>
    </>
  );
}
