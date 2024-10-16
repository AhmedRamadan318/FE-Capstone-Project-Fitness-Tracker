import React, { useEffect, useState } from 'react';
import { fetchExercises } from './api'; // Import the API service
import ExerciseList from './ExerciseList'; // Assume you have a component for listing exercises

const App = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getExercises = async () => {
            try {
                const data = await fetchExercises();
                setExercises(data);
            } catch (err) {
                setError("Failed to load exercises");
            } finally {
                setLoading(false);
            }
        };

        getExercises();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Fitness Tracker</h1>
            <ExerciseList exercises={exercises} />
        </div>
    );
};

export default App;
