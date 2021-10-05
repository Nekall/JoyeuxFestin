import axios from "axios";
import {API_URL, API_KEY, MAX_RESULT} from "@env";
import { useDispatch } from "react-redux";
import { addRecipeDetails } from "../../redux/actions";

export const useFetchRecipeDetails = () => {

  const dispatch = useDispatch();

  const getRecipeDetailsById = async (id) => {
    if(typeof id === "number"){try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: API_KEY,
          includeNutrition: false
        }
      })
      console.log("result fetch" ,response.data);
      dispatch(addRecipeDetails(response.data))
    } catch(e) {
      console.log("Error in getRecipeDetails", e);
    }}
  }

  return{
    getRecipeDetailsById
  }
}
