import PropTypes from 'prop-types';

const ExerciseList = ({ exercises }) => {
    return (
        <ul className="bg-gray-800 p-4 rounded-lg shadow-md space-y-2">
            {exercises.map((exercise) => (
                <li key={exercise.id} className="border border-gray-600 bg-gray-700 p-3 rounded hover:bg-gray-600 transition cursor-pointer">
                    {exercise.name}
                </li>
            ))}
        </ul>
    );
};

// Add prop types for validation
ExerciseList.propTypes = {
    exercises: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ExerciseList;
