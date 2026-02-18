import StudentItem from "./StudentItem";

export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        📭 No students added yet.
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="modern-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>

      <style>
        {`
          .table-container {
            margin-top: 20px;
            padding: 20px;
            border-radius: 16px;
            background: linear-gradient(135deg, #f5f7fa, #e4ecf7);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            transition: all 0.4s ease;
          }

          .table-container:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          }

          .modern-table {
            width: 100%;
            border-collapse: collapse;
            overflow: hidden;
            border-radius: 12px;
          }

          .modern-table thead {
            background: linear-gradient(90deg, #667eea, #764ba2);
            color: white;
          }

          .modern-table th {
            padding: 14px;
            text-align: left;
            letter-spacing: 1px;
          }

          .modern-table td {
            padding: 12px;
            transition: all 0.3s ease;
          }

          .modern-table tbody tr {
            transition: all 0.3s ease;
          }

          .modern-table tbody tr:hover {
            background-color: rgba(102, 126, 234, 0.1);
            transform: scale(1.01);
          }

          .empty-state {
            text-align: center;
            margin-top: 40px;
            font-size: 18px;
            color: #667eea;
            animation: pulse 1.5s infinite;
          }

          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}
