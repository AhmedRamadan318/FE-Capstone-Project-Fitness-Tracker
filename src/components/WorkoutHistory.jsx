import PropTypes from 'prop-types';

const WorkoutHistory = ({ workouts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <ul className="space-y-2">
          {workouts.map((workout, index) => (
            <li key={index} className="border p-2 rounded">
              <p><strong>Exercise:</strong> {workout.exercise}</p>
              <p><strong>Sets:</strong> {workout.sets}</p>
              <p><strong>Reps:</strong> {workout.reps}</p>
              <p><strong>Weight:</strong> {workout.weight} kg</p>
              <p><strong>Date:</strong> {new Date(workout.timestamp).toLocaleString()}</p>
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
