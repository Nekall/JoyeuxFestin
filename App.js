import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {Provider} from "react-redux";
import {store} from "./src/redux/store.js";
import AppNavigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppNavigation />
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
