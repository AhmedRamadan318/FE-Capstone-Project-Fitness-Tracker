// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'; // Create a separate CSS file for home page styles

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Your Fitness Tracker</h1>
                <p>Track your workouts, monitor progress, and stay motivated!</p>
            </header>
            <section className="features">
                <div className="feature-item">
                    <h2>Log Workouts</h2>
                    <p>Easily record your workouts and progress.</p>
                </div>
                <div className="feature-item">
                    <h2>Track Progress</h2>
                    <p>Monitor your fitness journey over time.</p>
                </div>
                <div className="feature-item">
                    <h2>Get Motivated</h2>
                    <p>Stay motivated with personalized goals.</p>
                </div>
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
