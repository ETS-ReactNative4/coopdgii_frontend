import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Reset_styled from "../styles/Reset_styled";
import { AntDesign } from "@expo/vector-icons";
import ForgotPassword_styled from "../styles/ForgotPassword_styled";
import lock from "../assets/lock.png";
import Custom_input from "../components/Custom_input";
import Btn_link from "../components/Btn_link";
import { Colors } from "../styles/styled";
const ResetPassword = ({ navigation }) => {
  const [pass, setPass] = useState({ pass1: "", pass2: "" });

  const handleChange = (name, value) => {
    setPass({ ...pass, [name]: value });
  };
  return (
    <View style={Reset_styled.page}>
      <View style={Reset_styled.header}>
        <Image
          source={lock}
          style={ForgotPassword_styled.header_img}
          resizeMode="cover"
        />
      </View>
      <View style={Reset_styled.body}>
        <Text style={ForgotPassword_styled.title}>Resetear la contraseña</Text>
        <Custom_input
          placeholder="Escribe la contraseña"
          value={pass.pass1}
          onChange={handleChange}
          name="pass1"
          secure={true}
          iconName="ios-lock-open-outline"
          color={Colors.third}
        />
        <Custom_input
          placeholder="Escribe la contraseña otra vez"
          value={pass.pass1}
          onChange={handleChange}
          name="pass1"
          secure={true}
          iconName="ios-lock-open-outline"
          color={Colors.third}
        />
        <Btn_link
          styled={ForgotPassword_styled.button}
          text={"Enviar"}
          size={20}
          onPress={() => navigation.goBack()}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
