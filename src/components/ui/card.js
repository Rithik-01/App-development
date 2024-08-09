// src/components/ui/Card.js
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent };
