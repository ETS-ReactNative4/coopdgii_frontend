import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Texts_var } from "../styles/styled";

export default function Btn_link({
  onPress,
  text,
  styled,
  size = 15,
  color = Texts_var.ratesDark_blue,
  ...prop
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn_link_container, styled]}
      {...prop}
    >
      <Text style={{ color: color, fontSize: size }}>{text}</Text>
    </TouchableOpacity>
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
    color: Texts_var.ratesDark_blue,
  },
});
