// src/pages/BmiCalculator.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import fetchData from '../utils/fetchData';

const BmiCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [sex, setSex] = useState('m'); // Default to male, you can add a selection

    const [result, setResult] = useState(null);

    const calculateBMI = async () => {
        try {
          const data = await fetchData(age, weight, height);
          if (data) { // Check if data is not undefined
            setResult(data); // Assuming data contains the BMI property
          } else {
            console.error('Error: No data received from API.');
            // Handle the case where no data is available (e.g., display an error message to the user)
          }
        } catch (error) {
          console.error('Error calculating BMI:', error);
        }
      };
    return (
        <div>
            <h1>BMI Calculator</h1>
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
            />
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height (cm)"
            />
            
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {result && <div>Your BMI is: {result.bmi}</div>}
        </div>
    );
};

export default BmiCalculator;
