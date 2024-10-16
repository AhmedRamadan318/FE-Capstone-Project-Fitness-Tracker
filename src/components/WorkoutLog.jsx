import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const WorkoutLog = ({ onLogWorkout }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Your form fields go here */}
    </form>
  );
};

// Add prop types for validation
WorkoutLog.propTypes = {
  onLogWorkout: PropTypes.func.isRequired, // Validate onLogWorkout as a required function
};

export default WorkoutLog;
