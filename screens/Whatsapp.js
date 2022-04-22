import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import React from "react";
import { Colors } from "../styles/styled";
import { Entypo } from "@expo/vector-icons";

const Whatsapp = ({ navigation }) => {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contactanos con los numeros</Text>
      <Text style={styles.text}>829-649-3938 o 829-828-1545</Text>
      <Pressable style={styles.header_icon} onPress={openDrawer}>
        <Entypo name="menu" size={30} color="#fff" />
      </Pressable>
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
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  header_icon: {
    position: "absolute",
    left: 0,
    top: 10,
    padding: 10,
  },
});
