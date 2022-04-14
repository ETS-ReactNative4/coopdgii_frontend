import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../styles/styled";

export default function Custom_button({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button_container}>
      <Text style={styles.text}>INICIAR SESION</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: Colors.third,
    width: "100%",
    padding: 15,
    marginVertical: 30,
    alignItems: "center",
    borderRadius: 10,
    marginBottom:10,
    marginTop:25
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
