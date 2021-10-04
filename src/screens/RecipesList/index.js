import React, { useEffect } from "react";
import {Card, FlatList, Text} from "react-native";
import { useFetchRecipes } from "../../api/recipes/useFetchRecipes";
import { useSelector } from "react-redux";
import { getRecipesList } from "../../redux/selectors";
import RecipeTile from "./RecipeTile.js"

export default function RecipesList(){
  const {getAllRecipes} = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList);

  const renderItem = ({ item }) => <RecipeTile item={item} />

  console.log(allRecipes);

  useEffect(() => {
    getAllRecipes()
  }, [])

  return(
    <>
      <FlatList
        data={allRecipes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  )
};
