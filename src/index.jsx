import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DentistProvider } from './Provider/DentistContext';
import { AppProvider } from './Provider/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DentistProvider>
      <AppProvider>
        <App/>
      </AppProvider>
    </DentistProvider>
  </React.StrictMode>
);


