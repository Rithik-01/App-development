import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Workouts from './components/Workouts';
import Nutrition from './components/Nutrition';
import AiCoach from './components/AiCoach';
import ChallengeDetails from './components/ChallengeDetails';
import JoinChallenge from './components/JoinChallenge';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Footer from './components/Footer';
import Strava from './components/StravaSubscription';
import ChallengeDashboard from './components/ChallengeDashboard';
import Clubs from './components/clubs';
import JoinClub from './components/JoinClub';
import ClubDetails from './components/ClubDetails';
import AIImage from './components/AIImage';

import running from './components/runningImage.png';
import yoga from './components/yogaImage.png';
import Strength from './components/weightliftingImage.png';
import Cycling from './components/cyclingImage.jpg';
import Swimming from './components/swimmingImage.jpg';

const initialChallengeData = {
  'weekly-running-challenge': {
    title: 'Weekly Running Challenge',
    description: 'Increase your running distance by 10% each week.',
    startDate: '2024-07-01',
    endDate: '2024-07-07',
    image: running,
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
};

const initialClubsData = [
  { name: 'Running Club', description: 'Join our running club for weekly group runs and events!' },
  { name: 'Yoga Enthusiasts', description: 'Practice yoga with us and achieve your wellness goals.' },
  { name: 'Weightlifting Warriors', description: 'Get strong with our weightlifting training sessions.' },
  { name: 'Cycling Crew', description: 'Cycle together and improve your endurance with us.' },
  { name: 'Swimming Squad', description: 'Swim with us and enhance your stamina.' },
];

function App() {
  const [challenges, setChallenges] = useState(initialChallengeData);
  const [clubs, setClubs] = useState(initialClubsData);

  const handleJoinChallenge = (challengeId, participant) => {
    setChallenges(prevChallenges => {
      const updatedParticipants = [...prevChallenges[challengeId].participants, participant];
      return {
        ...prevChallenges,
        [challengeId]: {
          ...prevChallenges[challengeId],
          participants: updatedParticipants
        }
      };
    });
  };

  const handleJoinClub = (clubName, participant) => {
    console.log(`User joined ${clubName}:`, participant);
    // Implement logic to update the club or show a success message
  };

  return (
    <div className="App">
      <Header>
        <h1>Fitness Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/ai-coach">AI Coach</Link></li>
            <li><Link to="/chatbot">Chat</Link></li>
            <li><Link to="/strava">Subscribe</Link></li>
            <li><Link to="/ChallengeDashboard">Challenges</Link></li>
            <li><Link to="/clubs">Clubs</Link></li>
            <li><Link to="/AIImage">AIImage</Link></li>
          </ul>
        </nav>
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ChallengeDashboard" element={<ChallengeDashboard challenges={challenges} />} />

          <Route path="/workouts" element={<ProtectedRoute />}>
            <Route path="" element={<Workouts />} />
          </Route>

          <Route path="/AIImage" element={<ProtectedRoute />}>
            <Route path="" element={<AIImage />} />
          </Route>
          
          <Route path="/strava" element={<ProtectedRoute />}>
            <Route path="" element={<Strava />} />
          </Route>
          <Route path="/chatbot" element={<ProtectedRoute />}>
            <Route path="" element={<Chatbot />} />
          </Route>
          <Route path="/challenge/:challengeId" element={<ProtectedRoute />}>
            <Route path="" element={<ChallengeDetails challenges={challenges} />} />
          </Route>
          <Route path="/join/:challengeId" element={<ProtectedRoute />}>
            <Route path="" element={<JoinChallenge challenges={challenges} onJoin={handleJoinChallenge} />} />
          </Route>
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/club/:clubName" element={<ClubDetails />} />
          <Route path="/club/:clubName" element={<ClubDetails clubs={clubs} />} />
          <Route path="/join-club" element={<JoinClub clubs={clubs} onJoin={handleJoinClub} />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
