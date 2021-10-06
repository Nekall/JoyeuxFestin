import {ADD_RECIPES, SELECTED_RECIPE, STEPS_RECIPE} from "../actions/actionsType"

const initialState = {
  list: [],
  selectedRecipe: {},
  stepsRecipe: [],
}

export const recipes = (state = initialState, action) => {
  switch(action.type){
    case ADD_RECIPES:
      return {
        list: [...state.list, ...action.payload.data],
        selectedRecipe: state.selectedRecipe,
        stepsRecipe: state.stepsRecipe,
      }
    case SELECTED_RECIPE:
      return {
        list: state.list,
        selectedRecipe: action.payload.data,
        stepsRecipe: state.stepsRecipe,
      }
    case STEPS_RECIPE:
      return {
        list: state.list,
        selectedRecipe: state.selectedRecipe,
        stepsRecipe: action.payload.data,
      }
    default:
      return state
  }
};
