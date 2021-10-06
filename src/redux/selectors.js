//Selectors (Pour selectionner une partie du store)
export const getRecipesList = store => store.recipes.list
export const getSelectedRecipe = store => store.recipes.selectedRecipe
export const getStepsRecipe = store => store.recipes.stepsRecipe
