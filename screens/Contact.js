import React from "react";
import { View, FlatList, Text, Image, Modal } from "react-native";

//Iconos
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


//Imagenes
import contanctUs from "../assets/contanctUs.png";

//Components
import Item from "../components/Item";
import Card_modal from "../components/Card_modal";
import Icon_button from "../components/Icon_button";
//Hooks
import useModal from "../hooks/useModal";

///Estilos
import { Colors } from "../styles/styled";
import contact from "../styles/contact_page";

const Contact = () => {
  const [isCallModalOpen, openCallModal, closeCallModal] = useModal(false);
  const [isEmailModalOpen, openEmailModal, closeEmailModal] = useModal(false);
  return (
    <View style={contact.container}>
      <View style={contact.header}>
        <Text style={contact.Title}>Contacto </Text>
        <Image
          source={contanctUs}
          resizeMode="contain"
          style={contact.header_img}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={contact.body_title}>How can i help you?</Text>
        <Text style={contact.body_description}>
          It looks like you are experiencing problems with our sign up process.
          We are here to help so please get in touch with us
        </Text>
        <View style={contact.body_buttons}>
          <Icon_button
            title="Call to us"
            handlePress={openCallModal}
            icon={
              <MaterialIcons
                name="phone-iphone"
                size={35}
                color={Colors.primary}
              />
            }
          />

          <Icon_button
            title="Email us"
            handlePress={openEmailModal}
            icon={
              <MaterialIcons name="email" size={35} color={Colors.primary} />
            }
          />
        </View>
        <Modal
          animationType="slide"
          visible={isCallModalOpen}
          transparent={true}
        >
          <Card_modal closeModal={closeCallModal} title="Call to us">
            <FlatList
              data={Call}
              renderItem={({ item }) => (
                <Item
                  icon={item.icon}
                  title={item.title}
                  sudtitle={item.sudtitle}
                  ItemStyled={contact.item_container}
                  TitleStyled={contact.Item_title}
                  sudStyle={contact.Item_sudtitle}
                  ItemTextStyled={contact.Item_TextContainer}
                />
              )}
              keyExtractor={(item) => item.idx}
            />
          </Card_modal>
        </Modal>

        <Modal
          animationType="slide"
          visible={isEmailModalOpen}
          transparent={true}
        >
          <Card_modal closeModal={closeEmailModal} title="Email us">
            <FlatList
              data={Links}
              renderItem={({ item, key }) => (
                <Item
                  icon={item.icon}
                  title={item.title}
                  sudtitle={item.sudtitle}
                  ItemStyled={contact.item_container}
                  TitleStyled={contact.Item_title}
                  sudStyle={contact.Item_sudtitle}
                  ItemTextStyled={contact.Item_TextContainer}
                />
              )}
              keyExtractor={(item) => item.idx}
            />
          </Card_modal>
        </Modal>
      </View>
    </View>
  );
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
