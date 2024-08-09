import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const Header=({Children})=> {
  return (
    <header>
      {Children}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/Chatbot">Chat</Link></li>
          <li><Link to="/Strava">Subscribe</Link></li>
          <li><Link to="/AIImage">nutrition</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
