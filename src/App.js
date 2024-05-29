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
import CatsPage from './pages/CatsPage';
import './App.css';

const App = () => {
  useEffect(() => {
    window.CommandBar.boot();
    window.CommandBar.addComponent(
      "record-preview-with-image",
      "Basic Record Preview with an image",
      {
        mount: (elem) => ({
          render: (data, metadata) => {
            elem.innerHTML =
              "<div>" +
              "<h3>" +
              data.label +
              "</h3>" +
              '<div><img src="' +
              data.photo +
              '" alt="photo" /></div>' +
              "</div>";
          },
          unmount: () => {
            // Clean up any timers, event handlers, etc.
          },
        }),
      }
    );
    // Add records
    window.CommandBar.addRecords(
      "pets",
      [
        {
          label: "Fido",
          id: "foo42",
          photo: "https://www.placedog.net/300/300",
        },
        {
          label: "Buster",
          id: "bar43",
          photo: "https://www.placedog.net/298/298",
        },
        {
          label: "Brutus",
          id: "baz44",
          photo: "https://www.placedog.net/299/299",
        },
      ],
      { detail: { type: "component", value: "record-preview-with-image" } }
    );

      // Add record actions
    window.CommandBar.addRecordAction('pets', {
      text: 'Open Profile',
      name: 'open_profile',
      template: {
        type: 'link',
        value: '/profile/{{record.id}}',
        operation: 'self' // how should the page open
      }
    });

    window.CommandBar.addRecordAction('pets', {
      text: 'Message',
      name: 'message',
      template: {
        type: 'callback',
        value: 'messageUser',
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li className="home-page"><Link to="/">Home</Link></li>
            <li className='about-page'><Link to="/about">About</Link></li>
            <li className='contact-page'><Link to="/contact">Contact</Link></li>
            <li className='cats-page'><Link to="/cats">Cats 🐱</Link></li>
            <li className='csv-page'><Link to="/csv-parser">CSV Parser</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route className="home" path="/" element={<HomePage />} />
          <Route className="about" path="/about" element={<AboutPage />} />
          <Route className="contact" path="/contact" element={<ContactPage />} />
          <Route className="cats" path="/cats" element={<CatsPage />} />
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