import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

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
