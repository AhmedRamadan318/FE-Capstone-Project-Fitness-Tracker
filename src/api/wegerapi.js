import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/';

// Create an instance of axios with default headers
const apiClient = axios.create({
    baseURL: API_URL,
});

// Function to set the authorization token
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

// Function to fetch exercises with optional pagination
export const fetchExercises = async (page = 1) => {
    try {
        const response = await apiClient.get(`exercise/?page=${page}`);
        return response.data.results; 
    } catch (error) {
        console.error("Error fetching exercises:", error.message || error);
        throw new Error("Failed to fetch exercises. Please try again later.");
    }
};

// Function to search for exercises by name
export const searchExercises = async (query) => {
    try {
        const response = await apiClient.get('exercise/');
        const filteredExercises = response.data.results.filter(exercise =>
            exercise.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredExercises.length === 0) {
            throw new Error("No exercises found matching your search criteria.");
        }
        return filteredExercises;
    } catch (error) {
        console.error("Error searching exercises:", error.message || error);
        throw new Error("Failed to search exercises. Please try again later.");
    }
};

// Function to check user permission
export const checkPermission = async (permission) => {
    try {
        const response = await apiClient.get('/api/v2/check-permission/', {
            params: { permission }, 
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        return response.data; 
    } catch (error) {
        console.error("Error checking permission:", error.message || error);
        throw new Error("Failed to check permission. Please try again later.");
    }
};
