import React from 'react';
import { Link } from 'react-router-dom';
import './Clubs.css';

import running from './runningImage.png';
import yoga from './yogaImage.png';
import Cycling from './cyclingImage.jpg';
import Swimming from './swimmingImage.jpg';

const clubsData = [
  {
    name: 'Mountain Runners Club',
    description: 'A club for enthusiasts of mountain running. We organize weekly runs and monthly hikes.',
    image: running,
    members: 150
  },
  {
    name: 'Cycling Pros',
    description: 'Join us for weekly cycling sessions and events. All levels welcome, from casual to competitive cyclists.',
    image: Cycling,
    members: 200
  },
  {
    name: 'Yoga Masters',
    description: 'Practice and master various yoga poses with us. Our classes cater to all levels, from beginners to advanced.',
    image: yoga,
    members: 120
  },
  {
    name: 'Swimming Squad',
    description: 'For swimming enthusiasts who want to train together and improve their technique. Regular practice sessions and competitions.',
    image: Swimming,
    members: 80
  }
];

const Clubs = () => {
  return (
    <div className="clubs-container">
      <h1>Explore Our Clubs</h1>
      <div className="clubs-list">
        {clubsData.map((club, index) => (
          <div key={index} className="club-card">
            <div className="club-image-container">
              <img src={club.image} alt={club.name} className="club-image" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{club.name}</h3>
                  <p>{club.description}</p>
                  <Link to={`/club/${club.name.replace(/\s+/g, '-').toLowerCase()}`} className="button">View Details</Link>
                </div>
              </div>
            </div>
            <div className="club-info">
              <h2>{club.name}</h2>
              <p>{club.description}</p>
              <span className="club-members">Members: {club.members}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
