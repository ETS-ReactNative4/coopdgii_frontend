import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import { fontSize } from "styled-system";
import Maria from "../assets/contact/Maria.jpg";

const { height } = Dimensions.get("screen");
const Card = ({ img, name, job, desc, tel, email }) => {
  return (
    <View style={card.card}>
      <View style={card.header}>
        <Image source={getPerfilImage(img)} style={card.perfil} />
        <View>
          <Text style={card.title}>{name}</Text>
          <Text style={card.sudtitle}>{job}</Text>
        </View>
      </View>
      <Text style={card.desc}>{desc}</Text>
      <View>
        <View style={[card.info]}>
          <AntDesign
            name="phone"
            size={24}
            color={Colors.white}
            style={{ backgroundColor: Colors.third }}
          />
          <Text style={card.info_text}>{tel}</Text>
        </View>
        <View style={[card.info]}>
          <AntDesign
            name="mail"
            size={24}
            color={Colors.white}
            style={{ backgroundColor: Colors.third }}
          />
          <Text style={card.info_text}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const getPerfilImage = (name) => {
  switch (name) {
    case "Suelin":
      return require("../assets/contact/Suelin.jpg");
    case "Maria":
      return require("../assets/contact/Maria.jpg");
    case "Anny":
      return require("../assets/contact/Anny.jpg");
    case "Yulitza":
      return require("../assets/contact/Yulitza.jpg");
    case "Yohanny":
      return require("../assets/contact/Yohanny.jpg");

    default:
      return require("../assets/contact/Maria.jpg");
  }
};

const card = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 25,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.cuentas_title,
  },
  perfil: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 10,
  },
  sudtitle: {
    color: Colors.third,
    fontSize: 15,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  desc: {
    marginBottom: 15,
    textAlign: "left",
    marginHorizontal: 20,
  },
  info_text: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 15,
    color: Colors.cuentas_title,
  },
});
export default Card;
