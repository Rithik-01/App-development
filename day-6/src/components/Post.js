import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import map1 from './map1.png';
import guru from './guru.jpg';
import loc from './loc.jpg';
import pranav from './pranavpic.jpg';

const Home = () => {
  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div className="profile-card">
          <div className="profile-img-container">
            <img src={pranav} alt="Profile" className="profile-img" />
          </div>
          <h2>Pranav Ram</h2>
          <p>Following: 7</p>
          <p>Followers: 3</p>
          <p>Activities: 10</p>
        </div>
        <div className="additional-info">
          <p>Latest Activity: Hill climb • Jul 28, 2024</p>
          <a href="#">Your Training Log</a>
        </div>
      </div>
      <div className="main-content">
        <div className="activity-card">
          <h3>Evening Walk</h3>
          <p>Been wanting to do a 10K walk in 90min. Thanks to GURU for pacing beautiful. Bucket list ✔️</p>
          <p>Distance: 10.57 km | Pace: 8:31/km | Time: 1h 30m</p>
          <div className="activity-map">
            <img src={map1} alt="Activity Map" />
          </div>
          <div className="activity-images">
            <img src={loc} alt="Activity" />
            <img src={guru} alt="Activity" />
          </div>
        </div>
        {/* Repeat the activity-card component as needed */}
      </div>
      <div className="right-panel">
        <div className="challenges-section">
          <h3>Challenges</h3>
          <br/>
          <p>Join a run or cycling challenge to stay on top of your game, earn new achievements and see how you stack up.</p>
          <br/>
          <Link to="/challenge-dashboard" className="button">View All Challenges</Link> {/* Updated Link */}
        </div>
        <div className="clubs-section">
          <h3>Your Clubs</h3>
          <br/>
          <Link to="/clubs" className="button">View All Clubs</Link> {/* Added Link */}
        </div>
        </div>
      </div>
  );
};

export default Home;
