import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Box, Paper, Typography } from "@mui/material";

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

  const chartData = {
    labels,
    datasets: [
      {
        label: "Average Marks",
        data,
        backgroundColor: [
          "rgba(102, 126, 234, 0.8)",
          "rgba(118, 75, 162, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)"
        ],
        borderRadius: 12,
        hoverBackgroundColor: [
          "#667eea",
          "#764ba2",
          "#ff6384",
          "#36a2eb"
        ],
        hoverBorderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeOutBounce"
    },
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold"
          }
        }
      },
      tooltip: {
        backgroundColor: "#1e3c72",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 8,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#555"
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#555"
        },
        grid: {
          color: "rgba(0,0,0,0.05)"
        }
      }
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        p: 4,
        borderRadius: 4,
        background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-10px) scale(1.02)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        }
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#1e3c72",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)"
          }
        }}
      >
        📊 Course Performance Overview
      </Typography>

      <Box
        sx={{
          transition: "all 0.4s ease",
          "&:hover canvas": {
            transform: "scale(1.03)"
          }
        }}
      >
        <Bar data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
