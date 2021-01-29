import { GET_RECIPES, ERROR } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.data
      };
    
    case ERROR:
      console.log('An error occured', action.data)
      return {
        ...state,
        error: action.data
      }
    default:
      return state;
  }
}