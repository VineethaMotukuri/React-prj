// SearchBar.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = async () => {
    if (term.trim() === '') {
      // Show a warning toast if the search term is empty
      toast.warning('Please enter a word!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return;
    }

    try {
      // eslint-disable-next-line
      const definitions = await onSearch(term);

      
    } catch (error) {
      // Handle other errors, e.g., show an error toast
      toast.error('Error fetching definitions', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter a word..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
