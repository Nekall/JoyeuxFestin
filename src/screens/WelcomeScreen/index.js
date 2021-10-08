import React from "react";
import {SafeAreaView, View, Card, FlatList, Text, StyleSheet} from "react-native";

export default function RecipesList(){

  return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text>Here is a small application in React Native linked to the Spoonacular API in order to display a recipe list.</Text>
        <Text>Move to the next screen</Text>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    fontWeight:"bold"
  },
})
