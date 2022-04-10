import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Logo from "../assets/images/logo.png";
import { Entypo } from "@expo/vector-icons";

const Login_items = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.image_container}>
          <Image source={Logo} resizeMode="contain" style={[styles.image]} />
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            "Un logro de todos"
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        style={[styles.footer_view, { paddingVertical: 15 }]}
        onPress={() => console.log("Pressed")}
      >
        <View>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Necesita Ayuda
          </Text>
        </View>
        <View>
          <Entypo name="help" size={18} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default Login_items;

const styles = StyleSheet.create({
  image_container: {
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#239B56",
    fontSize: 15.5,
  },
  footer_view: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#239B56",
  },
});
