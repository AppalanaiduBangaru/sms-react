import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function StudentChart({ students }) {
  const courseMap = {};

  students.forEach((s) => {
    if (!courseMap[s.course]) {
      courseMap[s.course] = { total: 0, count: 0 };
    }
    courseMap[s.course].total += Number(s.marks);
    courseMap[s.course].count += 1;
  });

  const labels = Object.keys(courseMap);
  const data = labels.map(
    (c) => courseMap[c].total / courseMap[c].count
  );

  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Average Marks",
            data,
            backgroundColor: "#1976d2",
          },
        ],
      }}
    />
  );
}
