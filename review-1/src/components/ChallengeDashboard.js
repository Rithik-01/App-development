// src/components/ChallengeDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ChallengeDetails.css';

const ChallengeDetails = ({ challenges }) => {
  const { challengeId } = useParams();
  const challenge = challenges[challengeId];

  if (!challenge) {
    return <div className="challenge-details">Challenge not found!</div>;
  }

  return (
    <div className="challenge-details">
      <div className="challenge-header">
        <img src={challenge.image} alt={challenge.title} className="challenge-image" />
        <h1 className="challenge-title">{challenge.title}</h1>
      </div>
      <p className="challenge-description">{challenge.description}</p>
      <div className="challenge-participants">
        <h2>Participants</h2>
        <ul className="participant-list">
          {challenge.participants.map((participant, index) => (
            <li key={index} className="participant-item">
              <span className="participant-name">{participant.name}</span>
              <span className="participant-status">{participant.status}</span>
              <div className="participant-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${participant.progress}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="challenge-actions">
        <Link to="/challenge-dashboard" className="button">
          Back to Challenges
        </Link>
        <Link to={`/join/${challengeId}`} className="button">
          Join This Challenge
        </Link>
        <Link to="/contact" className="button">
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default ChallengeDetails;
