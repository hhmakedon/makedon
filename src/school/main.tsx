import React from 'react';
import ReactDOM from 'react-dom/client';
import SchoolApp from './SchoolApp';
import '../styles/global.css';
import './school.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SchoolApp />
  </React.StrictMode>
);
