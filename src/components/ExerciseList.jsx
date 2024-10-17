import PropTypes from 'prop-types';

const ExerciseList = ({ exercises }) => {
    return (
        <ul>
            {exercises.map((exercise) => (
                <li key={exercise.id}>
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
