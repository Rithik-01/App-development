import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ClubDetails.css';
import running from './runningImage.png';
import cycling from './cyclingImage.jpg';
import yoga from './yogaImage.png';
import swimming from './swimmingImage.jpg';
import sticker1 from './runstricker.png';
import sticker2 from './cyclestricker.png';
import sticker3 from './yogastricker.png';
import sticker4 from './swimmstricker.png';

const clubsData = [
  {
    name: 'Mountain Runners Club',
    description: 'A club for enthusiasts of mountain running. We organize weekly runs and monthly hikes.',
    image: running,
    members: 150,
    endDate: '2024-08-01',
    overview: 'Join us as we conquer the mountain trails and build endurance together.',
    leaderboard: [
      { name: 'Alice', position: 1 },
      { name: 'Bob', position: 2 },
      { name: 'Charlie', position: 3 }
    ],
    recentActivities: [
      'Trail run at Rocky Mountains',
      'Hill sprints session',
      'Sunrise hike at Blue Ridge Mountains'
    ],
    testimonials: [
      { name: 'Alice', feedback: 'This club has transformed my running experience!' },
      { name: 'Bob', feedback: 'Great community and fantastic events!' }
    ]
  },
  {
    name: 'Cycling Pros',
    description: 'Join us for weekly cycling sessions and events. All levels welcome, from casual to competitive cyclists.',
    image: cycling,
    members: 200,
    endDate: '2024-08-15',
    overview: 'Cycle through scenic routes and challenge yourself to improve your speed and endurance.',
    leaderboard: [
      { name: 'David', position: 1 },
      { name: 'Eve', position: 2 },
      { name: 'Frank', position: 3 }
    ],
    recentActivities: [
      '50km countryside ride',
      'Speed training at the velodrome',
      'Weekend city tour'
    ],
    testimonials: [
      { name: 'David', feedback: 'Incredible rides and awesome people!' },
      { name: 'Eve', feedback: 'I love the variety of cycling events offered.' }
    ]
  },
  {
    name: 'Yoga Masters',
    description: 'Practice and master various yoga poses with us. Our classes cater to all levels, from beginners to advanced.',
    image: yoga,
    members: 120,
    endDate: '2024-08-10',
    overview: 'Achieve inner peace and flexibility through our guided yoga sessions.',
    leaderboard: [
      { name: 'Grace', position: 1 },
      { name: 'Hannah', position: 2 },
      { name: 'Isaac', position: 3 }
    ],
    recentActivities: [
      'Sunset yoga at the beach',
      'Advanced asana workshop',
      'Morning meditation session'
    ],
    testimonials: [
      { name: 'Grace', feedback: 'Yoga Masters helped me find balance and peace.' },
      { name: 'Hannah', feedback: 'Fantastic instructors and a supportive community.' }
    ]
  },
  {
    name: 'Swimming Squad',
    description: 'For swimming enthusiasts who want to train together and improve their technique. Regular practice sessions and competitions.',
    image: swimming,
    members: 80,
    endDate: '2024-08-20',
    overview: 'Enhance your swimming skills and compete in friendly challenges.',
    leaderboard: [
      { name: 'Jack', position: 1 },
      { name: 'Katherine', position: 2 },
      { name: 'Leo', position: 3 }
    ],
    recentActivities: [
      'Open water swim practice',
      'Sprint training session',
      'Relay race competition'
    ],
    testimonials: [
      { name: 'Jack', feedback: 'My swimming has improved drastically!' },
      { name: 'Katherine', feedback: 'I love the camaraderie in this club.' }
    ]
  }
];


const ClubDetails = () => {
    const { clubName } = useParams();
    const club = clubsData.find(c => c.name.replace(/\s+/g, '-').toLowerCase() === clubName);
  
    if (!club) {
      return <div className="club-details">Club not found!</div>;
    }
  
    return (
      <div className="club-details">
        <div className="club-header">
          <div className="club-image-container">
            <img src={club.image} alt={club.name} className="club-image" />
            <div className="image-overlay"></div>
          </div>
          <h1 className="club-title">{club.name}</h1>
          <p className="club-description">{club.description}</p>
          <p className="club-end-date">Ends on: {club.endDate}</p>
          <p className="club-overview">{club.overview}</p>
          <p className="club-members">Members: {club.members}</p>
        </div>
        <div className="club-leaderboard">
          <h2>Leaderboard</h2>
          <ul>
            {club.leaderboard.map((leader, index) => (
              <li key={index}>
                {leader.position}. {leader.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="club-activities">
          <h2>Recent Activities</h2>
          <ul>
            {club.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        <div className="club-testimonials">
          <h2>Testimonials</h2>
          <ul>
            {club.testimonials.map((testimonial, index) => (
              <li key={index}>
                <strong>{testimonial.name}:</strong> {testimonial.feedback}
              </li>
            ))}
          </ul>
        </div>
        <div className="club-actions">
          <Link to={`/join/${club.name.replace(/\s+/g, '-').toLowerCase()}`} className="button">
            Join This Club
          </Link>
          <Link to="/contact" className="button">
            Contact Support
          </Link>
          <Link to="/invite-friends" className="button">
            Invite Friends
          </Link>
        </div>
      </div>
    );
  };
  
  
  export default ClubDetails;