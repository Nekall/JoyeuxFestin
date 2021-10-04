import axios from "axios";
import {API_URL, API_KEY, MAX_RESULT} from "@env";
import { useDispatch } from "react-redux";
import { addRecipes } from "../../redux/actions";

export const useFetchRecipes = () => {

const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: API_KEY,
          number: MAX_RESULT
        }
      })
      dispatch(addRecipes(response.data.results))
    } catch(e) {
      console.log("Error in getAllRecipes", e);
    }
  }

  return{
    getAllRecipes
  }
}
