import {ADD_RECIPES, ADD_RECIPE_DETAILS} from "../actions/actionsType"

const initialState = {
  list: [],
  details: {},
}

export const recipes = (state = initialState, action) => {
  switch(action.type){
    case ADD_RECIPES:
      return {
        list: [...state.list, ...action.payload.data],
        details: state.details
      }
    case ADD_RECIPE_DETAILS:
      return {
        list: state.list,
        details: action.payload.data

      }
    default:
      return state
  }
};
