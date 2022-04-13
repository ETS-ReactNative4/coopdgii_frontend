import React from "react";
import { View, FlatList, Text, Image, Modal } from "react-native";

//Iconos
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";

import { Links } from "../helpers/Links";
import { Call } from "../helpers/Call";


const Contact = ({ navigation }) => {
  const [isCallModalOpen, openCallModal, closeCallModal] = useModal(false);
  const [isEmailModalOpen, openEmailModal, closeEmailModal] = useModal(false);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <View style={contact.container}>
        <Btn_icon
          icon={<Entypo name="menu" size={24} color={Colors.primary} />}
          onPress={openDrawer}
          styleButton={btnDrawerStyle.btn}
        />
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
            It looks like you are experiencing problems with our sign up
            process. We are here to help so please get in touch with us
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
    </>
  );
};



export default Contact;
