// src/components/ReactPapaParseComponent.js
import React, { useState } from 'react';
import { readString } from 'react-papaparse';

const ReactPapaParseComponent = () => {
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target.result;
      const parsedData = readString(csv, { header: true }).data;
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2>React-Papa-Parse</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReactPapaParseComponent;

