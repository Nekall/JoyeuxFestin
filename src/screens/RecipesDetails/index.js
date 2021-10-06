import React, { useEffect, useState }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { useSelector } from "react-redux";
import { useFetchRecipeDetails } from "../../api/recipes/useFetchRecipeDetails";
import { getSelectedRecipe } from "../../redux/selectors";

export default function RecipesDetails({route, navigation}){
  const { id } = route.params;
  const {getRecipeById} = useFetchRecipeDetails();

  let recipe = useSelector(getSelectedRecipe);

  useEffect(() => {
    getRecipeById(id);
  }, [])

  return(
    <>
      {recipe !== undefined?
        <ScrollView>
          <Image source={{uri: recipe.image}} style={styles.image}/>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.readyInMinutes}>Ready in {recipe.readyInMinutes} minutes</Text>
          <View style={styles.ingredients}>
            <Text style={styles.ingTitle}>Ingredients:</Text>
            {recipe.extendedIngredients.map(ingredient =>(
              <Text style={styles.ingredient}>{ingredient.name}</Text>
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
