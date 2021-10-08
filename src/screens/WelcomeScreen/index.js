import React from "react";
import {View, Card, FlatList, Text, StyleSheet} from "react-native";

export default function RecipesList(){



  return(
    <>
      <View styles={style.container}>
        <Text styles={style.title}>Welcome</Text>
        <Text styles={style.title}>Here is a small application in React Native linked to the Spoonacular API in order to display a recipe list.</Text>
        <Text styles={style.title}>Move to the next screen</Text>
      </View>
    </>
  )
};


const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignContent:"center"
  },
  title: {
    fontWeight:"bold"
  },
})
