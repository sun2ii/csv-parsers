import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { init } from "commandbar";

init("e96320ec");

window.messageUser = function(record) {
  alert(`Message sent to user ${record.label} with ID ${record.id}`);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
