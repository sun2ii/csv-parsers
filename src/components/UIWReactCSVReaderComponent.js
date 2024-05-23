// src/components/UIWReactCSVReaderComponent.js
import React, { useState } from 'react';
import CSVReader from '@uiw/react-csv-reader';

const UIWReactCSVReaderComponent = () => {
  const [data, setData] = useState([]);

  const handleFileLoad = (data) => {
    setData(data);
  };

  return (
    <div>
      <h2>@uiw/react-csv-reader</h2>
      <CSVReader onFileLoaded={handleFileLoad} />
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {data[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
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

export default UIWReactCSVReaderComponent;

