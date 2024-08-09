// src/ChallengeDetails.js
import React from 'react';
import { useParams,Link } from 'react-router-dom'; // Import useNavigate for navigation
import './ChallengeDetails.css';

import running from './runningImage.png';
import yoga from './yogaImage.png';
import Strength from './weightliftingImage.png';
import Cycling from './cyclingImage.jpg';
import Swimming from './swimmingImage.jpg';

// Dummy data for demonstration
const challengeData = {
  'weekly-running-challenge': {
    title: 'Weekly Running Challenge',
    description: 'Increase your running distance by 10% each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-07',
    image: running, // Add an image for the challenge
    participants: [
      { name: 'Alice', status: 'Completed 5/10 runs', progress: 50 },
      { name: 'Bob', status: 'In Progress', progress: 30 },
      { name: 'Charlie', status: 'Completed 3/10 runs', progress: 30 },
      { name: 'David', status: 'Not Started', progress: 0 },
      { name: 'Eve', status: 'Completed 8/10 runs', progress: 80 },
      { name: 'Frank', status: 'In Progress', progress: 20 },
    ],
  },
  'monthly-yoga-challenge': {
    title: 'Monthly Yoga Challenge',
    description: 'Master a new yoga pose every week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: yoga,
    participants: [
      { name: 'Ella', status: 'Completed 3/4 poses', progress: 75 },
      { name: 'Frank', status: 'In Progress', progress: 50 },
      { name: 'Grace', status: 'Completed 2/4 poses', progress: 50 },
      { name: 'Hannah', status: 'Not Started', progress: 0 },
      { name: 'Isla', status: 'Completed 4/4 poses', progress: 100 },
      { name: 'Jack', status: 'In Progress', progress: 25 },
    ],
  },
  'strength-challenge': {
    title: 'Strength Challenge',
    description: 'Increase your weightlifting load by 5% each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Strength,
    participants: [
      { name: 'Isaac', status: 'Completed 4/5 weeks', progress: 80 },
      { name: 'Jasmine', status: 'In Progress', progress: 60 },
      { name: 'Kieran', status: 'Completed 2/5 weeks', progress: 40 },
      { name: 'Liam', status: 'Not Started', progress: 0 },
      { name: 'Mia', status: 'Completed 5/5 weeks', progress: 100 },
      { name: 'Noah', status: 'In Progress', progress: 50 },
    ],
  },
  'cycling-endurance-challenge': {
    title: 'Cycling Endurance Challenge',
    description: 'Add 10 extra minutes to your cycling sessions each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Cycling,
    participants: [
      { name: 'Mia', status: 'Completed 3/4 weeks', progress: 75 },
      { name: 'Nathan', status: 'In Progress', progress: 50 },
      { name: 'Olivia', status: 'Completed 1/4 weeks', progress: 25 },
      { name: 'Paul', status: 'Not Started', progress: 0 },
      { name: 'Quincy', status: 'Completed 4/4 weeks', progress: 100 },
      { name: 'Rachel', status: 'In Progress', progress: 40 },
    ],
  },
  'swimming-stamina-challenge': {
    title: 'Swimming Stamina Challenge',
    description: 'Increase the number of laps by 2 each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Swimming,
    participants: [
      { name: 'Quinn', status: 'Completed 5/8 weeks', progress: 62.5 },
      { name: 'Rachel', status: 'In Progress', progress: 50 },
      { name: 'Sophie', status: 'Completed 2/8 weeks', progress: 25 },
      { name: 'Tom', status: 'Not Started', progress: 0 },
      { name: 'Uma', status: 'Completed 7/8 weeks', progress: 87.5 },
      { name: 'Victor', status: 'In Progress', progress: 30 },
    ],
  },
  // Add more challenge data here
};

const ChallengeDetails = ({ challenges }) => {
    const { challengeId } = useParams();
    const challenge = challenges[challengeId];
  
    if (!challenge) return <p className="not-found">Challenge not found</p>;
  
    // Find the participant with the highest progress
    const bestParticipant = challenge.participants.reduce((best, participant) => {
      return participant.progress > best.progress ? participant : best;
    }, challenge.participants[0]);
  
    return (
        <div className="challenge-details-page">
          <div className="challenge-header">
            <img src={challenge.image} alt={challenge.title} className="challenge-image" />
            <div className="challenge-info">
              <h1 className="challenge-title">{challenge.title}</h1>
              <p className="challenge-description">{challenge.description}</p>
              <div className="challenge-dates">
                <p><strong>Start Date:</strong> {challenge.startDate}</p>
                <p><strong>End Date:</strong> {challenge.endDate}</p>
              </div>
              <Link to={`/join/${challengeId}`} className="join-challenge-button">
                Join Challenge
              </Link>
            </div>
          </div>
          <h2>Participants</h2>
          <ul className="participants-list">
            {challenge.participants.map((participant, index) => (
              <li key={index} className="participant">
                <p><strong>{participant.name}</strong></p>
                <p>{participant.status}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${participant.progress}%` }}
                  ></div>
                </div>
                {participant === bestParticipant && (
                  <p className="premium-badge">Premium Plan Awarded</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
};

export default ChallengeDetails;
