import React from "react";
import { View, FlatList, Text, Image, Dimensions, Modal } from "react-native";

//Iconos
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { contact } from "../styles/Contact";

//Imagenes
import contanctUs from "../assets/images/contanctUs.png";

//Components
import Item from "../Components/Item";
import IconButton from "../Components/IconButton";
import CardModal from "../Components/CardModal";

//Hooks
import useModal from "../hooks/useModal";

///Estilos
import { Colors } from "../styles/styled";



const Contact = () => {
  return <div>Contact</div>;
};


const Links = [
    {
      idx: 1,
      icon: (
        <MaterialIcons name="phone-iphone" size={24} color={Colors.secondary} />
      ),
      title: "Centro de contacto",
      sudtitle: "(809)-243-0000",
    },
    {
      idx: 2,
      icon: <FontAwesome5 name="globe" size={24} color={Colors.secondary} />,
      title: "Llamas desde el exterior",
      sudtitle: "1-000-000-0000",
    },
    {
      idx: 3,
      icon: <MaterialIcons name="email" size={24} color={Colors.secondary} />,
      title: "Correo electronico",
      sudtitle: "cliente@gmail.com",
    },
  ];
  
  const Call = [
    {
      idx: 4,
      icon: (
        <AntDesign name="facebook-square" size={24} color={Colors.secondary} />
      ),
      title: "Facebook",
      sudtitle: "/banco_RD",
    },
    {
      idx: 5,
      icon: <AntDesign name="twitter" size={24} color={Colors.secondary} />,
      title: "Twitter",
      sudtitle: "@banco_RD",
    },
    {
      idx: 6,
      icon: <AntDesign name="instagram" size={24} color={Colors.secondary} />,
      title: "Instagram",
      sudtitle: "@Banco_RD2",
    },
  ];

export default Contact;
