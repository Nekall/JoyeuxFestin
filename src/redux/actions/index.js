import {ADD_RECIPES, SELECTED_RECIPE} from "./actionsType";

export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload: {
      data
    },
});

export const selectedRecipe = (data) => ({
    type: SELECTED_RECIPE,
    payload: {
      data
    },
});
