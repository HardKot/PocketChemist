import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import gStyle from "~style";
import ReactionInput from "~components/ReactionInput";

import type { FC } from "react";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#333333",
    paddingHorizontal: 30,
    paddingTop: 125,
  },
});

const ChemicalCalculator: FC = () => {
  return (
    <View style={styles.background}>
      <StatusBar style="light" />
      <ReactionInput style={gStyle.textInput} />
    </View>
  );
};

export default ChemicalCalculator;
