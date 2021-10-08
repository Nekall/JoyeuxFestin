import React, { useEffect,useState } from "react";
import {View, Card, FlatList, Text, ActivityIndicator} from "react-native";
import { useFetchRecipes } from "../../api/recipes/useFetchRecipes";
import { useSelector } from "react-redux";
import { getRecipesList } from "../../redux/selectors";
import RecipeTile from "./RecipeTile.js"

export default function RecipesList({navigation}){
  const [page, setPage] = useState(0);
  const {getAllRecipes} = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList);

  useEffect(() => {
    getAllRecipes(page)
  }, [page])

  const renderItem = ({ item }) => <RecipeTile item={item} navigation={navigation}/>

//charger une nouvelle page, 30 nouvelles recettes
  const onEndReached = () =>{
    setPage(currentPage => currentPage +1)
  }

  return(
    <>
      <FlatList
        data={allRecipes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
        ListFooterComponent={() => <View style={{padding:40}}><ActivityIndicator size="large" color="#000000" /></View>}
      />
    </>
  )
};
