import React, { useState } from 'react';
import { Importer, ImporterField } from 'react-csv-importer';
import 'react-csv-importer/dist/index.css';

const ReactCSVImporterComponent = () => {
  const [data, setData] = useState([]);

  const handleData = (rows) => {
    setData(rows);
  };

  return (
    <div>
      <h2>React CSV Importer</h2>
      <Importer
        onStart={({ file }) => {
          console.log("starting import of file", file.name);
        }}
        processChunk={async (rows) => {
          // Process each chunk of rows
          handleData(rows);
        }}
        onComplete={() => {
          console.log("import complete");
        }}
        onError={(err) => {
          console.log("import error", err);
        }}
      >
        <ImporterField name="field1" label="Field 1" />
        <ImporterField name="field2" label="Field 2" />
      </Importer>
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
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, cellIndex) => (
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

export default ReactCSVImporterComponent;
