import React from "react";
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";

//Iconos

import { Entypo } from "@expo/vector-icons";
//Imagenes
import contactBack from "../assets/contact/contactBack.jpg";
import { Colors } from "../styles/styled";
import contact from "../styles/contact_page";
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import Card from "../components/Card";

import contactJson from "../json/contactJson.json";

const Contact = ({ navigation }) => {
  const openDrawer = () => navigation.toggleDrawer();

  return (
    <>
      <View style={contact.container}>
        <Btn_icon
          icon={<Entypo name="menu" size={24} color={Colors.primary} />}
          onPress={openDrawer}
          styleButton={btnDrawerStyle.btn}
        />
        <ImageBackground source={contactBack} style={contact.bg_img}>
          <Text style={[contact.text_color, contact.titleLittle]}>
            CONTACTO
          </Text>
          <Text style={[contact.text_color, contact.titles]}>
            Sentirse libres para contactarnos
          </Text>
        </ImageBackground>
        <View style={contact.body}>
          <Text style={contact.body_title}>
            Nuestros Oficiales Del Área De Servicio
          </Text>
          <Text style={contact.body_sudtitle}>
            Cuantos de ustedes han solicitado servicios en línea?
          </Text>

          <View style={contact.body_list}>
            <FlatList
              data={contactJson}
              keyExtractor={(item, index) => `${item.tel}_${index}`}
              renderItem={({ item }) => (
                <Card
                  name={item.name}
                  job={item.job}
                  img={item.img}
                  desc={item.desc}
                  tel={item.tel}
                  email={item.email}
                />
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Contact;
