import { useState } from 'react';
import PropTypes from 'prop-types';
import { searchExercises } from '../api/wegerapi'; // Updated import path

const ExerciseSearch = ({ onSelectExercise }) => {
  const [query, setQuery] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async (event) => {
    setQuery(event.target.value);
    
    if (event.target.value.trim() !== '') {
      try {
        const results = await searchExercises(event.target.value);
        setExercises(results);
      } catch (error) {
        console.error("Failed to search exercises: ", error);
      }
    } else {
      setExercises([]);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search exercises..."
        value={query}
        onChange={handleSearch}
        className="border border-gray-400 bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-500"
      />
      <ul className="space-y-2 mt-2">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <li key={exercise.id} className="border border-gray-600 bg-gray-700 p-2 rounded hover:bg-gray-600 transition cursor-pointer" onClick={() => onSelectExercise(exercise.id)}>
              {exercise.name}
            </li>
          ))
        ) : (
          <li className="text-gray-300">No exercises found</li>
        )}
      </ul>
    </div>
  );
};

ExerciseSearch.propTypes = {
  onSelectExercise: PropTypes.func.isRequired,
};

export default ExerciseSearch;
