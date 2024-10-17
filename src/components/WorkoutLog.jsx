import { useState } from 'react';
import PropTypes from 'prop-types';

const WorkoutLog = ({ onLogWorkout, exercises }) => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedExercise && sets && reps && weight) {
      const workoutData = {
        exercise: selectedExercise,
        sets: parseInt(sets),
        reps: parseInt(reps),
        weight: parseFloat(weight),
        timestamp: new Date().toISOString(),
      };
      onLogWorkout(workoutData); 
      clearFields(); 
    }
  };

  const clearFields = () => {
    setSelectedExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label htmlFor="exercise" className="block text-white mb-2">Exercise:</label>
        <select
          id="exercise"
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full"
        >
          <option value="">Select an exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sets" className="block text-white mb-2">Sets:</label>
        <input
          type="number"
          id="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="reps" className="block text-white mb-2">Reps:</label>
        <input
          type="number"
          id="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="weight" className="block text-white mb-2">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition">
        Log Workout
      </button>
    </form>
  );
};

WorkoutLog.propTypes = {
  onLogWorkout: PropTypes.func.isRequired,
  exercises: PropTypes.array.isRequired, 
};

export default WorkoutLog;
