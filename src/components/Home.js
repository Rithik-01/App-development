import React from 'react';
import { useAuth } from './AuthContext'; // Adjusted the path
import './Home.css';
import Testimonials from './Testimonials';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <section className="hero">
        <video autoPlay muted loop className="video-background">
          <source src="/video/fitness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h2>Welcome to Fitness Website</h2>
          <p>Your journey to a healthier life starts here!</p>
          <a href="/workouts" className="btn-primary" style={{ fontSize: '1.5rem' }}>Get Started</a>
        </div>
      </section>

      <section className="plans">
        <div className="plan basic">
          <h3>Basic Plan</h3>
          <div className="plan-details">
            <p className="price">$19.99/month</p>
            <p>Ideal for beginners who want to get started with fitness.</p>
            <ul>
              <li><strong>Access to basic workouts</strong></li>
              <li>Nutrition tips</li>
              <li>Email support</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        <div className="plan premium">
          <h3>Premium Plan</h3>
          <div className="plan-details">
            <p className="price">$39.99/month</p>
            <p>Perfect for those looking to take their fitness to the next level.</p>
            <ul>
              <li>All Basic Plan features</li>
              <li><strong>Advanced workouts</strong></li>
              <li><strong>Personalized meal plans</strong></li>
              <li>24/7 support</li>
            </ul>
            <button className="btn-primary">Join Now</button>
          </div>
        </div>

        <div className="plan pro">
          <h3>Pro Plan</h3>
          <div className="plan-details">
            <p className="price">$59.99/month</p>
            <p>For the fitness enthusiasts who want everything we offer.</p>
            <ul>
              <li>All Premium Plan features</li>
              <li><strong>One-on-one coaching</strong></li>
              <li><strong>Exclusive workout videos</strong></li>
              <li>Priority support</li>
            </ul>
            <button className="btn-primary">Become a Pro</button>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="call-to-action">
        <h2>Ready to Take the Next Step?</h2>
        <p>Sign up for our newsletter and stay updated with the latest fitness tips and workouts.</p>
      </section>
      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial">
          <p>"This website has transformed my life! The workouts are amazing and the community is very supportive."</p>
          <p><strong>- Jane Doe</strong></p>
        </div>
        <div className="testimonial">
          <p>"I've tried many fitness programs before, but this one is by far the best. The trainers are knowledgeable and helpful."</p>
          <p><strong>- John Smith</strong></p>
        </div>
      </section>

      <section className="featured-workouts">
        <h2>Featured Workouts</h2>
        <div className="workout">
          <h3>HIIT Workout</h3>
          <p>A high-intensity interval training workout to get your heart pumping.</p>
          <a href="/workouts/hiit" className="btn-primary">Try Now</a>
        </div>
        <div className="workout">
          <h3>Yoga Flow</h3>
          <p>A calming yoga session to improve flexibility and reduce stress.</p>
          <a href="/workouts/yoga" className="btn-primary">Start Now</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
