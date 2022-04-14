import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ChemicalCalculator from "./src/screens/ChemicalCalculator";

export default function App() {
  return <ChemicalCalculator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
