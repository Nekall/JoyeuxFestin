import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesList from "../screens/RecipesList";
import RecipesDetails from "../screens/RecipesDetails";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function AppNavigation(){

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipesList">
        <Stack.Screen name="RecipesList" component={RecipesList} />
        <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
