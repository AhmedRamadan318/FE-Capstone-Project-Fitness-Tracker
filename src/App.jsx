import { useEffect, useState } from "react";
import { fetchExercises } from "./api/wegerapi"; // Updated import path
import ExerciseList from "./components/ExerciseList";
import WorkoutLog from "./components/WorkoutLog"; // Updated import path
import WorkoutHistory from "./components/WorkoutHistory"; // Updated import path
import ProgressChart from "./components/ProgressChart"; // Updated import path
import ExerciseSearch from "./components/ExerciseSearch"; // Updated import path


const App = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const getExercises = async () => {
            try {
                const data = await fetchExercises();
                setExercises(data);
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setError("Failed to load exercises");
            } finally {
                setLoading(false);
            }
        };

        getExercises();
    }, []);

    const logWorkout = (workoutData) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, workoutData]);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Fitness Tracker</h1>
            <ExerciseSearch onSelectExercise={(exerciseId) => console.log(`Selected exercise ID: ${exerciseId}`)} />
            <ExerciseList exercises={exercises} />
            <WorkoutLog onLogWorkout={logWorkout} exercises={exercises} />
            <WorkoutHistory workouts={workouts} />
            <ProgressChart workouts={workouts} />
        </div>
    );
};

export default App;
