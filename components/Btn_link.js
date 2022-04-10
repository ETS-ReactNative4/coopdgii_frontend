import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Btn_link({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.btn_link_container}>
      <Text style={styles.text_link}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn_link_container: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  text_link: {
    color: "#00008B",
  },
});
