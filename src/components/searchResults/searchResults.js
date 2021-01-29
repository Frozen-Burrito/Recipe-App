import React from 'react';

import SearchItem from '../searchItem';

const SearchResults = ({ results }) => {

  return (
    <div>
      { results && results.map(result => (
        <SearchItem item={result}/>
      ))}
    </div>
  )
}

export default SearchResults;