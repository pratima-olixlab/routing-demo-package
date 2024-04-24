import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client' instead of ReactDOM
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
