import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Custom_input({
  placeholder,
  value,
  iconName,
  secure,
  onChange,
  name,
}) {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChange(name, text)}
        value={value}
        secureTextEntry={secure}
      />
      <Ionicons name={iconName} size={24} color="black" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  input_container: {
    position: "relative",
    marginTop: 10,
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  input: {
    paddingLeft: 20,
  },
  icon: {
    position: "absolute",
    top: 6,
    left: 1,
  },
});
