import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Ignore empty submissions

    const newConversation = [...conversation, { type: 'user', message: input }];
    setConversation(newConversation);
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/chat', { message: input });
      setConversation((prevConversation) => [
        ...prevConversation,
        { type: 'bot', message: formatResponse(res.data.response.join(' ')) },
      ]);
      setLoading(false);
      setInput(''); // Clear input after submission
    } catch (error) {
      console.error("There was an error posting the data!", error);
      setLoading(false);
    }
  };

  const formatResponse = (response) => {
    const sections = response.split('\n\n');
    return sections
      .map(section => `<p>${section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`)
      .join('');
  };

  return (
    <div className="chatbot">
      <h2>Fitness Exercise Advisor</h2>
      <div className="conversation-container">
        {conversation.map((entry, index) => (
          <div key={index} className={`message ${entry.type}`}>
            <div dangerouslySetInnerHTML={{ __html: entry.message }} />
          </div>
        ))}
        {loading && <div className="message bot">Fetching advice...</div>}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your fitness question or goal"
          rows="4"
          cols="50"
        />
        <button type="submit">Get Fitness Advice</button>
      </form>
    </div>
  );
};

export default Chatbot;
