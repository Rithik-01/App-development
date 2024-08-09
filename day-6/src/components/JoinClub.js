import React, { useState } from 'react';
import './JoinClub.css';

const JoinClub = ({ clubs, onJoin }) => {
  const [selectedClub, setSelectedClub] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleJoin = (event) => {
    event.preventDefault();
    if (!selectedClub || !name || !email) {
      setMessage('Please fill in all fields.');
      return;
    }
    onJoin(selectedClub, { name, email });
    setMessage('Successfully joined the club!');
    setName('');
    setEmail('');
  };

  return (
    <div className="join-club-container">
      <h1>Join a Club</h1>
      <form className="join-club-form" onSubmit={handleJoin}>
        <div className="form-group">
          <label htmlFor="club">Select Club:</label>
          <select
            id="club"
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
          >
            <option value="">Select a Club</option>
            {clubs.map((club, index) => (
              <option key={index} value={club.name}>
                {club.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="button">Join Now</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default JoinClub;
