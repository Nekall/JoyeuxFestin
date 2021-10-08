import React from "react";
import RecipesList from "../screens/RecipesList";
import RecipesDetails from "../screens/RecipesDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const RecipesStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Recipes" component={RecipesList}/>
      <Stack.Screen name="RecipesDetails" component={RecipesDetails}/>
    </Stack.Navigator>
  )
}
