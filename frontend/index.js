import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Ensure this path is correct
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
