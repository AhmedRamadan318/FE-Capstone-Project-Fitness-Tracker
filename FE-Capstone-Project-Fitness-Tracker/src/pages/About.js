
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Fitness Tracker</h1>
                <p>Your ultimate companion for tracking fitness goals.</p>
            </header>
            <section className="about-content">
                <h2>Why Fitness Tracker?</h2>
                <p>
                    Fitness Tracker is designed to help you log workouts,
                    track your progress, and stay motivated on your fitness journey.
                </p>
                <h2>Features</h2>
                <ul>
                    <li>Log workouts</li>
                    <li>View workout history</li>
                    <li>Analyze your progress</li>
                    <li>Set and achieve goals</li>
                </ul>
            </section>
            <footer className="about-footer">
                <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;
