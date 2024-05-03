// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import DictionaryResults from './components/DictionaryResults.jsx';
import { getDefinitions } from './services/dictionaryService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (term) => {
    const definitions = await getDefinitions(term);
    setResults(definitions);
  };

  return (
    <div className="container">
      <h1>Vineetha's Dictionary App</h1>
      <SearchBar onSearch={handleSearch} />
      <DictionaryResults results={results} />
      <ToastContainer />
    </div>
  );
}

export default App;
