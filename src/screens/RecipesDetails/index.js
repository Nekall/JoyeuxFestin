import React, { useEffect, useState }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { useSelector } from "react-redux";
import { useFetchRecipeDetails } from "../../api/recipes/useFetchRecipeDetails";
import { getSelectedRecipe, getStepsRecipe } from "../../redux/selectors";
import uuid from "react-native-uuid";

export default function RecipesDetails({route, navigation}){
  const { id } = route.params;
  const {getRecipeById, getStepById} = useFetchRecipeDetails();

  let recipe = useSelector(getSelectedRecipe);
  let recipeSteps = useSelector(getStepsRecipe);

  useEffect(() => {
    getRecipeById(id);
    getStepById(id);
  }, [])

  console.log("==>", recipeSteps[0]);

  return(
    <>
      {recipe !== undefined && recipeSteps !== undefined?
        <ScrollView>
          <Image source={{uri: recipe.image}} style={styles.image}/>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.readyInMinutes}>Ready in {recipe.readyInMinutes} minutes</Text>
          <View style={styles.ingredients}>
            <Text style={styles.ingTitle}>Ingredients:</Text>
            {recipe.extendedIngredients?.map(ingredient =>(
              <Text style={styles.ingredient} key={uuid.v4()}>{ingredient.name}</Text>
            ))}
          </View>
          <View style={styles.ingredients}>
            <Text style={styles.ingTitle}>Steps:</Text>
            {recipeSteps[0]?.steps.map(oneStep =>(
              <Text style={styles.step} key={uuid.v4()}>{oneStep.step}</Text>
            ))}
          </View>
        </ScrollView>
        :
        <></>
      }
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width:"100%",
    height: 200
  },
  title: {
    margin:10,
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
  },
  readyInMinutes: {
    textAlign:"center",
  },
  ingredients: {
    marginHorizontal:16,
    marginVertical:10,
    padding:6,
    borderTopColor:"grey",
    borderTopWidth:1,
    borderBottomColor:"grey",
    borderBottomWidth:1,
  },
  ingredient: {
    marginLeft:10,
  },
  ingTitle: {
    fontWeight:"bold",
    fontSize:15,
  },
})
