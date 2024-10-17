import PropTypes from 'prop-types';

const WorkoutHistory = ({ workouts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white">Workout History</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-300">No workouts logged yet.</p>
      ) : (
        <ul className="space-y-2">
          {workouts.map((workout, index) => (
            <li key={index} className="border border-gray-600 bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-white"><strong>Exercise:</strong> {workout.exercise}</p>
              <p className="text-gray-300"><strong>Sets:</strong> {workout.sets}</p>
              <p className="text-gray-300"><strong>Reps:</strong> {workout.reps}</p>
              <p className="text-gray-300"><strong>Weight:</strong> {workout.weight} kg</p>
              <p className="text-gray-300"><strong>Date:</strong> {new Date(workout.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

WorkoutHistory.propTypes = {
  workouts: PropTypes.array.isRequired, 
};

export default WorkoutHistory;
