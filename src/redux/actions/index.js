import {ADD_RECIPES} from "./actionsType";

export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload: {
      data
    },
});
