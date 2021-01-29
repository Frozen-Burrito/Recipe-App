import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

const SearchBox = ({ handleLoading }) => {

  const { getRecipes } = useContext(GlobalContext);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    handleLoading(true);
    getRecipes(query);
  }

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBox;