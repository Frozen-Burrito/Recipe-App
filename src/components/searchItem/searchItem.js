import React from 'react';

const SearchItem = ({ item }) => {

  const { recipe } = item;

  return (
    <div>
      <h2 >{recipe.label}</h2>
      <p>Source: {recipe.source}</p>

      { recipe.dietLabels && recipe.dietLabels.map(dietLabel => (
        <p>{dietLabel}</p>
      ))}

      { recipe.healthLabels && recipe.healthLabels.map(healthLabel => (
        <p>{healthLabel}</p>
      ))}
    </div>
  );
}

export default SearchItem;