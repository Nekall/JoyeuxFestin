import axios from "axios";

export const useFetchRecipes = () => {

  const getAllRecipes = () => {
    try {
      const reponse = await axios.get(URL_API, {
        apiKey: API_KEY,
        number: MAX_RESULT
      })
      console.log("reponse", reponse.data.results);
    } catch(e) {
      console.log("Error in getAllRecipes", e);
    }
  }

  return{
    getAllRecipes
  }
}
