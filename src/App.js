// src/App.js
import React from 'react';
import ReactPapaParseComponent from './components/ReactPapaParseComponent';
import ReactCSVReaderComponent from './components/ReactCSVReaderComponent';
import ReactParseCSVComponent from './components/ReactParseCSVComponent';
import UIWReactCSVReaderComponent from './components/UIWReactCSVReaderComponent';
import ReactCSVImporterComponent from './components/ReactCSVImporterComponent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>CSV Parser Showcase</h1>
      <ReactPapaParseComponent />
      <ReactCSVReaderComponent />
      <ReactParseCSVComponent />
      <UIWReactCSVReaderComponent /> 
      <ReactCSVImporterComponent />
    </div>
  );
};

export default App;
