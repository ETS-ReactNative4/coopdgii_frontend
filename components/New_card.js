import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Colors } from "../styles/styled";
import Btn_link from "./Btn_link";

const { width, height } = Dimensions.get("screen");

const New_card = ({ img, title, onNextScreen }) => {
  return (
    <View style={CardStyle.newContainer}>
      <Image source={{ uri: img }} style={CardStyle.Card_img} />
      <View style={CardStyle.container}>
        <View style={CardStyle.textContainer}>
          <Text style={CardStyle.title}>{title}</Text>
        </View>
        <Btn_link
          text="ver mas"
          onPress={onNextScreen}
          color={Colors.third}
          styled={CardStyle.card_link}
        />
      </View>
    </View>
  );
};

const CardStyle = StyleSheet.create({
  newContainer: {
    width: width * 0.85,
    marginBottom: 25,
    height: height * 0.35,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    // backgroundColor: "#F1F3F4",
    width: "100%",
    backgroundColor: Colors.third,
    borderBottomEndRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textContainer: { flex: 1, justifyContent: "center" },

  title: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    flexShrink: 1,
    marginLeft: 15,
  },
  card_link: {
    backgroundColor: "#ffffff",
    width: 60,
    marginRight: 20,
    paddingVertical: 8,
    alignSelf: "center",
    textAlign: "left",
  },
  Card_img: {
    maxWidth: "100%",
    height: "60%",

    zIndex: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default New_card;
