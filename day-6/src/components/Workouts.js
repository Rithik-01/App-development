import React from 'react';
import { Link } from 'react-router-dom'; 
import './Workouts.css';

// Import the images
import runningImage from './runningImage.png';
import yogaImage from './yogaImage.png';
import weightliftingImage from './weightliftingImage.png';
import cyclingImage from './cyclingImage.jpg';
import swimmingImage from './swimmingImage.jpg';
import PersonalTrainer from './PersonalTrainer.jpg';
import ExperTrainer from './ExpertTrainer.jpg';
import CommunitySupport from './CommunitySupport.jpg';
import EmmaE from './Emma E.jpeg';
import John from './John.png';

const Workouts = () => {
  const workoutItems = [
    {
      image: runningImage,
      label: 'Running',
      description: 'Improve your cardiovascular health and endurance with regular running sessions.',
      link: 'https://www.runnersworld.com',
    },
    {
      image: yogaImage,
      label: 'Yoga',
      description: 'Enhance your flexibility, balance, and mental well-being through yoga.',
      link: 'https://www.yogajournal.com',
    },
    {
      image: weightliftingImage,
      label: 'Weightlifting',
      description: 'Build muscle and increase strength with progressive weightlifting routines.',
      link: 'https://www.bodybuilding.com',
    },
    {
      image: cyclingImage,
      label: 'Cycling',
      description: 'Boost your leg strength and stamina with regular cycling workouts.',
      link: 'https://www.bicycling.com',
    },
    {
      image: swimmingImage,
      label: 'Swimming',
      description: 'Enhance your overall fitness and muscle tone with swimming.',
      link: 'https://www.swimmingworldmagazine.com',
    },
  ];

  const challenges = [
    { label: 'Weekly Running Challenge', description: 'Increase your running distance by 10% each week.' },
    { label: 'Monthly Yoga Challenge', description: 'Master a new yoga pose every week.' },
    { label: 'Strength Challenge', description: 'Increase your weightlifting load by 5% each week.' },
    { label: 'Cycling Endurance Challenge', description: 'Add 10 extra minutes to your cycling sessions each week.' },
    { label: 'Swimming Stamina Challenge', description: 'Increase the number of laps by 2 each week.' },
  ];

  const quotes = [
    "The only bad workout is the one that didn’t happen.",
    "Push yourself because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "The body achieves what the mind believes."
  ];

  const tips = [
    "Stay hydrated during your workouts.",
    "Warm up properly before starting any exercise.",
    "Maintain proper form to avoid injuries.",
    "Cool down and stretch after your workouts.",
    "Listen to your body and rest when needed."
  ];

 
  const features = [
    { image: PersonalTrainer, title: 'Personalized Training', description: 'Custom workouts tailored to your goals.' },
    { image: ExperTrainer, title: 'Expert Coaches', description: 'Get guidance from certified fitness experts.' },
    { image: CommunitySupport, title: 'Community Support', description: 'Join a supportive community of fitness enthusiasts.' },
  ];

  const successStories = [
    { image: EmmaE, name: 'Emma W.', story: 'Lost 20 pounds and gained incredible strength with personalized workouts!' },
    { image: John, name: 'John D.', story: 'Transformed my life with yoga and meditation practices.' },
  ];


  return (

    <div className="workouts-page">
      
      <section className="feature-section">
        <h2>Our Features</h2>
        <div className="feature-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="workout-section">
        <h2>Workout Icons</h2>
        <div className="workout-container">
          {workoutItems.map((item, index) => (
            <div className="workout-card" key={index}>
              <div className="workout-image">
                <img src={item.image} alt={item.label} />
              </div>
              <div className="workout-label">{item.label}</div>
              <p className="workout-description">{item.description}</p>
              <a href={item.link} className="workout-link" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          ))}
        </div>
      </section>
      <section className="challenges-section">
        <h2>Challenges</h2>
        <div className="challenge-container">
          {challenges.map((challenge, index) => (
            <Link 
              to={`/challenge/${challenge.label.replace(/\s+/g, '-').toLowerCase()}`} 
              key={index} 
              className="challenge-card-link"
            >
              <div className="challenge-card">
                <h3 className="challenge-label">{challenge.label}</h3>
                <p className="challenge-description">{challenge.description}</p>
              </div>
            </Link>
          ))}
      </div>
      </section>


      <section className="quotes-section">
        <h2>Motivational Quotes</h2>
        <div className="quotes-container">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <p className="quote">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <h2>Workout Tips</h2>
        <div className="tips-container">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card">
              <p className="tip">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="success-stories-section">
        <h2>Client Success Stories</h2>
        <div className="success-stories-container">
          {successStories.map((story, index) => (
            <div className="success-story-card" key={index}>
              <img src={story.image} alt={story.name} className="success-story-image" />
              <h3 className="success-story-name">{story.name}</h3>
              <p className="success-story-story">{story.story}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </section>
    </div>
  );
};
export default Workouts;