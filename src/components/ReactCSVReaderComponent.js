import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';

const ReactCSVReaderComponent = () => {
  // Declare a state variable 'data' to hold the CSV data
  const [data, setData] = useState([]);

  // Handler function to set the CSV data once it's loaded
  const handleFileLoad = (data) => {
    setData(data);
  };

  return (
    <div>
      <h2>React CSV Reader</h2>
      {/* CSVReader component to handle file upload and parsing */}
      <CSVReader onFileLoaded={handleFileLoad} />
      {/* Conditional rendering: display table if data is available */}
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {/* Map through the first row to create table headers */}
              {data[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Map through the rest of the rows to create table body */}
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, cellIndex) => (
                  <td key={cellIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReactCSVReaderComponent;


