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
    <div>
      <input
        type="text"
        placeholder="Search exercises..."
        value={query}
        onChange={handleSearch}
        className="border p-2 rounded"
      />
      <ul className="space-y-2 mt-2">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <li key={exercise.id} className="border p-2 rounded" onClick={() => onSelectExercise(exercise.id)}>
              {exercise.name}
            </li>
          ))
        ) : (
          <li>No exercises found</li>
        )}
      </ul>
    </div>
  );
};

ExerciseSearch.propTypes = {
  onSelectExercise: PropTypes.func.isRequired,
};

export default ExerciseSearch;
