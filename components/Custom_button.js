import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Custom_button({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button_container}>
      <Text style={styles.text}>INICIAR SESION</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#239B56",
    width: "100%",
    padding: 15,
    marginVertical: 30,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
