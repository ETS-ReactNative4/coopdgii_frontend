import {
  View,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ToastAndroid,
  Dimensions
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../styles/login_page";
import Logo from "../assets/images/logo.png";
import Women from "../assets/images/woman-writing.jpg";
import { Entypo } from "@expo/vector-icons";
import Custom_input from "../components/Custom_input";
import Custom_button from "../components/Custom_button";
import Btn_link from "../components/Btn_link";
import { wifi_Status } from "../hooks/wifiStatus";
import { Colors } from "../styles/styled";

const initialUser = {
  ids: "",
  pass: "",
};

export default function Sign_in({ navigation }) {
  const { height, width } = Dimensions.get("screen");
  

  const [user, setUser] = useState(initialUser);
  const [connectionStatus, setConnectionStatus] = useState(false);
  wifi_Status().then((res) => {
    setConnectionStatus(res);
  });

  const handleChange = (name, text) => {
    setUser({
      ...user,
      [name]: text,
    });
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  function verifyData() {
    if (!connectionStatus) {
      ToastAndroid.show("No hay conexion a internet", ToastAndroid.LONG);
    } else if (!user.ids.trim() || !user.pass.trim()) {
      Alert.alert("Advertencia", "Complete los campos y intentelo de nuevo", [
        { text: "Ok" },
      ]);
    } else {
      Alert.alert("Exito", "Completaste los campos", [{ text: "Ok" }]);
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.root_container}>
        <View style={{ position: "relative", width: "100%" }}>
          <Entypo
            name="menu"
            size={26}
            color={Colors.third}
            onPress={openDrawer}
          />
        </View>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.2 }]}
          resizeMode="contain"
        />

        <Custom_input
          placeholder={"Cedula"}
          name="ids"
          iconName={"person-outline"}
          onChange={handleChange}
        />
        <Custom_input
          placeholder={"Constraseña"}
          name="pass"
          iconName={"key-outline"}
          onChange={handleChange}
          secure={true}
        />
        <Custom_button onPress={verifyData} />
        <Btn_link
          onPress={() => console.log("Pressed")}
          text={"¿Tiene Problemas para iniciar sesion?"}
        />
        <View style={{ height:height * 0.35, position:"absolute", bottom:0,width:width}}>
          
        <Image
          source={Women}
          style={[styles.footer_image, { height:"100%", maxWidth:"100%" }]}
          
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
