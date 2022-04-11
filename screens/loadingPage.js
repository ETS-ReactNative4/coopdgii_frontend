import React from "react";
import { View, ActivityIndicator, StyleSheet, StatusBar } from "react-native";
import { Colors } from "../styles/styled";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.third} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
