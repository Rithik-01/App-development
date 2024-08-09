import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './JoinChallenge.css';

import running from './runningImage.png';
import yoga from './yogaImage.png';
import Strength from './weightliftingImage.png';
import Cycling from './cyclingImage.jpg';
import Swimming from './swimmingImage.jpg';

const challengeData = {
  'weekly-running-challenge': {
    title: 'Weekly Running Challenge',
    description: 'Increase your running distance by 10% each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-07',
    image: running,
  },
  'monthly-yoga-challenge': {
    title: 'Monthly Yoga Challenge',
    description: 'Master a new yoga pose every week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: yoga,
  },
  'strength-challenge': {
    title: 'Strength Challenge',
    description: 'Increase your weightlifting load by 5% each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Strength,
  },
  'cycling-endurance-challenge': {
    title: 'Cycling Endurance Challenge',
    description: 'Add 10 extra minutes to your cycling sessions each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Cycling,
  },
  'swimming-stamina-challenge': {
    title: 'Swimming Stamina Challenge',
    description: 'Increase the number of laps by 2 each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    image: Swimming,
  },
};

const JoinChallenge = ({ challenges, onJoin }) => {
  const { challengeId } = useParams();
  const challenge = challenges[challengeId] || challengeData[challengeId];
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!challenge) return <p className="not-found">Challenge not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParticipant = { name, status: 'Not Started', progress: 0 };
    onJoin(challengeId, newParticipant);
    navigate(`/challenge/${challengeId}`);
  };

  return (
    <div className="join-challenge-page">
      <h1>{challenge.title}</h1>
      <img src={challenge.image} alt={challenge.title} className="challenge-image" />
      <p>{challenge.description}</p>
      <div className="challenge-dates">
        <p><strong>Start Date:</strong> {challenge.startDate}</p>
        <p><strong>End Date:</strong> {challenge.endDate}</p>
      </div>
      <form className="join-form" onSubmit={handleSubmit}>
        <h2>Join this Challenge</h2>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit" className="submit-button">Join Challenge</button>
      </form>
    </div>
  );
};

export default JoinChallenge;
