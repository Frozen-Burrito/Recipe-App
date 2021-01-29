import React, { createContext, useReducer } from 'react';

import { reducer } from './rootReducer';
import { api } from '../api';
import { GET_RECIPES, ERROR } from './actionTypes';

const initialState = {
  recipes: [],
  error: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const getRecipes = async (query) => {
    console.log('Searching for recipes')
    try {
      const response = await api.get(`/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);

      dispatch({
        type: GET_RECIPES,
        data: response.data.hits
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        data: error
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
      recipes: state.recipes,
      error: state.error,
      getRecipes
    }}>
      { children }
    </GlobalContext.Provider>
  )
}