import {ADD_RECIPES, ADD_RECIPE_DETAILS} from "./actionsType";

export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload: {
      data
    },
});

export const addRecipeDetails = (data) => ({
    type: ADD_RECIPE_DETAILS,
    payload: {
      data
    },
});
