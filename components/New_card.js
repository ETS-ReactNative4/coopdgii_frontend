import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import Btn_link from "./Btn_link";

const New_card = ({ img, title, newObj, onNextScreen }) => {
  return (
    <ImageBackground style={CardStyle.newContainer} source={img}>
      <View style={CardStyle.container}>
        <Text style={CardStyle.title}>{title}</Text>
        <Btn_link text="ver mas" onPress={onNextScreen} />
      </View>
    </ImageBackground>
  );
};

const CardStyle = StyleSheet.create({
  newContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default New_card;
