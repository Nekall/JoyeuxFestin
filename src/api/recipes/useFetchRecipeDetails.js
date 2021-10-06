import axios from "axios";
import {API_URL, API_KEY, MAX_RESULT} from "@env";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../../redux/actions";

export const useFetchRecipeDetails = () => {

  const dispatch = useDispatch();

  const getRecipeById = async (id) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: API_KEY,
          includeNutrition: false
        }
      })
      dispatch(selectedRecipe(response.data))
    } catch(e) {
      console.log("Error in getRecipeById", e);
    }
  }

  return{
    getRecipeById
  }
}
