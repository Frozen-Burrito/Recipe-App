import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { CircleSpinner } from 'react-spinners-kit';

import SearchBox from '../../components/searchbox';
import SearchResults from '../../components/searchResults';

const SearchPage = () => {

  const { recipes } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const handleLoading = (newLoading) => {
    setLoading(newLoading);
    console.log(loading);
  }

  if (loading && recipes.length > 0) {
    handleLoading(false);
  }

  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBox handleLoading={handleLoading}/>

      {loading ? (
        <CircleSpinner size={30} color="#686769" loading={true} />
      ) : (
        <SearchResults results={recipes} />
      )}
    </div>
  )
}

export default SearchPage;