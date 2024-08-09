import React, { useState, useEffect } from 'react';
import './AiCoach.css'; // Import the CSS file

function AiCoach() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    try{

      fetch("http://127.0.0.1:8080/get").then(
        res => res.json()
      ).then(
        data => {
          setData(data);
          console.log(data);
        }
      )
    }
    catch(e)
    {
      console.log(e);
    }
  }, []);

  return (
    <div className="ai-coach-container">
      {(typeof data.members === 'undefined') ? (
        <p className="loading-text">Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i} className="member-text">{member}</p>
        ))
      )}
    </div>
  );
}

export default AiCoach;
