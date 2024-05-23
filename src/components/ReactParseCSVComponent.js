import React, { useCallback } from 'react';
import { useCsvParser, zodResolver } from 'react-parse-csv';
import { z } from 'zod';

// Define a schema for validation using zod
const schema = z.object({
  Name: z.string().min(1),
  Email: z.string().email(),
  Phone: z.string().min(10)
});

const ReactParseCSVComponent = () => {
  const { data, errors, isValid, parse } = useCsvParser({ resolver: zodResolver(schema) });

  // Simple file change handler
  const handleFileChange = useCallback((event) => {
    parse(event.currentTarget.files[0]);
  }, [parse]);

  return (
    <div>
      <h2>React Parse CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {isValid && (
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
      {!isValid && (
        <table>
          <thead>
          </thead>
          <tbody>
            {errors.map(({ line, column, message, value }, index) => (
              <tr key={index}>
                <td>{line}</td>
                <td>{column}</td>
                <td>{message}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReactParseCSVComponent;
