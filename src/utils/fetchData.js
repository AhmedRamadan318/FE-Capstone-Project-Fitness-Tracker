// src/utils/fetchData.js
const fetchData = async (age, weight, height, sex ) => {
    const url = 'https://bmi.p.rapidapi.com/v1/bmi';
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'bmi.p.rapidapi.com',
            'x-rapidapi-key': '615f4a343amsh32fb7a49880c02bp146e0ajsn96f7f3002c25', // Your actual API key
        },
        body: JSON.stringify({
            weight: { value: weight.toString(), unit: 'kg' },
            height: { value: height.toString(), unit: 'cm' },
            sex: sex,
            age: age.toString(),
        
        }),
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            // Check for specific error codes
            if (response.status === 403) {
                throw new Error('Forbidden: Access to the API is denied.');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Return the response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error for further handling
    }
};

export default fetchData; // Use default export
