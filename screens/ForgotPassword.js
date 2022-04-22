import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import { Feather } from "@expo/vector-icons";
import ForgotPass from "../assets/ForgotPass.png";
import ForgotPassword_styled from "../styles/ForgotPassword_styled";
import Btn_link from "../components/Btn_link";
const ForgotPassword = ({ navigation }) => {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

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
        <View style={ForgotPassword_styled.Input}>
          <Feather name="at-sign" size={24} color={Colors.third} />
          <TextInput
            placeholder="Email ID / Mobile number"
            placeholderTextColor={Colors.cuentas_title}
            style={ForgotPassword_styled.InputText}
          />
        </View>
        <Btn_link
          text="Enviar"
          color={Colors.white}
          styled={ForgotPassword_styled.button}
          size={20}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
