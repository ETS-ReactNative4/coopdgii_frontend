import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Colors } from "../styles/styled";

const Whatsapp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contactanos con los numeros</Text>
      <Text style={styles.text}>829-649-3938 o 829-828-1545</Text>
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.third,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
