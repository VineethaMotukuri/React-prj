// DictionaryResults.jsx
import React from 'react';
import '../App.css';

const DictionaryResults = ({ results }) => {
  if (!Array.isArray(results)) {
    
    return (
      <div className="dictionary-results-container">
        <p>No definitions found for the word.</p>
      </div>
    );
  }

  return (
    <div className="dictionary-results-container">
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.definition}</li>
        ))}
      </ul>
    </div>
  );
};

export default DictionaryResults;
