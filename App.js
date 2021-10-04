import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RecipesList from "./src/screens/RecipesList";
import {Provider} from "react-redux";
import {store} from "./src/redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RecipesList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
