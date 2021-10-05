import React, { useEffect }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";
import { useFetchRecipeDetails } from "../../api/recipes/useFetchRecipeDetails";
import { getRecipeDetails } from "../../redux/selectors";

export default function RecipesDetails({route, navigation}){
  const { id } = route.params;
  const {getRecipeDetails} = useFetchRecipeDetails();
  const recipeDetails = useSelector(getRecipeDetails);

  useEffect(() => {
    getRecipeDetailsById(id)
  }, []);

  return(
    <>
      <Text>Nom de recette : {recipeDetails.title} & id : {id}, ici !</Text>
      <TouchableOpacity onPress={() => {
        navigation.goBack()
      }}>
        <Text>Back</Text>
      </TouchableOpacity>
    </>
  )
}
