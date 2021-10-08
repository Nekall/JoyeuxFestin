import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecipesStack } from "./RecipesStack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUtensils } from '@fortawesome/free-solid-svg-icons'

const Tabs = createBottomTabNavigator();

export default function AppNavigation(){
  return(
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Welcome" component={WelcomeScreen} options={{tabBarIcon: () => <FontAwesomeIcon icon={ faHome } />}}/>
        <Tabs.Screen name="Recipes" component={RecipesStack} options={{tabBarIcon: () => <FontAwesomeIcon icon={ faUtensils } />}}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
