export default function StudentItem({ student, onEdit, onDelete }) {
    return (
      <tr>
        <td>{student.name}</td>
        <td>{student.course}</td>
        <td>{student.marks}</td>
        <td>
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </td>
      </tr>
    );
  }
  