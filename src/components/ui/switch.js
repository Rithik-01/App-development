// src/components/ui/Switch.js
import React from 'react';
import './Switch.css';

const Switch = ({ checked, onCheckedChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={(e) => onCheckedChange(e.target.checked)} />
      <span className="slider round"></span>
    </label>
  );
};

export { Switch };
