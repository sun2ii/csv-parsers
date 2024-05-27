import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReactPapaParseComponent from './components/ReactPapaParseComponent';
import ReactCSVReaderComponent from './components/ReactCSVReaderComponent';
import ReactParseCSVComponent from './components/ReactParseCSVComponent';
import UIWReactCSVReaderComponent from './components/UIWReactCSVReaderComponent';
import ReactCSVImporterComponent from './components/ReactCSVImporterComponent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => {
  useEffect(() => {
    const loggedInUserId = "12345"; // Replace with the actual user ID if available
    if (window.CommandBar) {
      window.CommandBar.boot(loggedInUserId);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li className="home-page"><Link to="/">Home</Link></li>
            <li className='about-page'><Link to="/about">About</Link></li>
            <li className='contact-page'><Link to="/contact">Contact</Link></li>
            <li className='csv-page'><Link to="/csv-parser">CSV Parser</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route className="home" path="/" element={<HomePage />} />
          <Route className="about" path="/about" element={<AboutPage />} />
          <Route className="contact" path="/contact" element={<ContactPage />} />
          <Route className="csv-parser" path="/csv-parser" element={<CSVParserShowcase />} />
        </Routes>
      </div>
    </Router>
  );
};

const CSVParserShowcase = () => (
  <div>
    <h1>CSV Parser Showcase</h1>
    <ReactPapaParseComponent />
    <ReactCSVReaderComponent />
    <ReactParseCSVComponent />
    <UIWReactCSVReaderComponent /> 
    <ReactCSVImporterComponent />
  </div>
);

export default App;