import {ADD_RECIPES} from "../actions/actionsType"

const initialState = {
  list: [],
}

export const recipes = (state = initialState, action) => {
  switch(action.type){
    case ADD_RECIPES:
      return {
        list: [...state.list, ...action.payload.data]
      }
    default:
      return state
  }
}
