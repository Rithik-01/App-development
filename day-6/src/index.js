import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { AuthProvider } from './components//AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
