import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const UserScoreChart = () => {
  const data = {
    labels: ['Public Speaking', 'Interview Practice', 'Written Communication', 'Critical Thinking'],
    datasets: [
      {
        label: 'Scores',
        data: [85, 90, 78, 88],
        backgroundColor: '#e8b028',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Performance in Different Modules',
        color: '#333',
        font: {
          size: 18,
          family: 'Poppins',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
          font: {
            family: 'Poppins',
          },
        },
      },
      y: {
        ticks: {
          color: '#333',
          font: {
            family: 'Poppins',
          },
        },
      },
    },
    maintainAspectRatio: false, // Allows the chart to resize properly
  };

  return (
    <div style={{ height: 300 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserScoreChart;
