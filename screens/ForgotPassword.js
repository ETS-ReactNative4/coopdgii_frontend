import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import Custom_input from "../components/Custom_input";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import ForgotPass from "../assets/ForgotPass.png";
import ForgotPassword_styled from "../styles/ForgotPassword_styled";
import Btn_link from "../components/Btn_link";
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleChange = (name, text) => setEmail(text);

  return (
    <View style={ForgotPassword_styled.page}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.primary} />}
        onPress={openDrawer}
        styleButton={btnDrawerStyle.btn}
      />
      <View style={ForgotPassword_styled.header}>
        <Image
          source={ForgotPass}
          resizeMode="cover"
          style={ForgotPassword_styled.header_img}
        />
      </View>
      <View style={ForgotPassword_styled.body}>
        <Text style={ForgotPassword_styled.title}>
          Olvidaste la contraseña?
        </Text>
        <Text style={ForgotPassword_styled.desc}>
          No te preocupes! no pasa nada. Por favor ingresa el email realcionado
          con tu cuenta
        </Text>
        <Custom_input
          placeholder="Escribe la contraseña otra vez"
          value={email}
          handleChange={handleChange}
          name="email"
          secure={true}
          iconName="at-circle-outline"
          color={Colors.third}
        />

        <Btn_link
          text="Enviar"
          color={Colors.white}
          styled={ForgotPassword_styled.button}
          size={20}
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
