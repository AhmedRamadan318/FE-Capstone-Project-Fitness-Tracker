import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = ({ workouts }) => {
  const data = {
    labels: workouts.map((workout) => new Date(workout.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Weight Lifted (kg)',
        data: workouts.map((workout) => workout.weight),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  useEffect(() => {
    
  }, [workouts]); 

  return (
    <div>
      <h2 className="text-xl font-bold">Progress Chart</h2>
      <Bar data={data} />
    </div>
  );
};

ProgressChart.propTypes = {
  workouts: PropTypes.array.isRequired,
};

export default ProgressChart;
