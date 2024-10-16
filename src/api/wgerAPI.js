import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/';

export const fetchExercises = async () => {
    try {
        const response = await axios.get(`${API_URL}exercise/`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching exercises: ", error);
        throw error;
    }
};
