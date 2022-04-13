import { View, Text, Image, StyleSheet, Pressable, Modal, FlatList } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Logo from "../assets/images/logo.png";
import { Entypo } from "@expo/vector-icons";
import useModal from "../hooks/useModal";
import Card_modal from "../components/Card_modal";
import { Links } from "../helpers/Links";
import Item from "../components/Item";
import contact  from "../styles/contact_page";


const Login_items = (props) => {
  const [isHelpModalOpen, openHelpModal, closeHelpModal] = useModal()


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.image_container}>
          <Image source={Logo} resizeMode="contain" style={[styles.image]} />
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            "Un logro de todos"
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        style={[styles.footer_view, { paddingVertical: 15 }]}
        onPress={openHelpModal}
      >
        <View>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Necesita Ayuda
          </Text>
        </View>
        <View>
          <Entypo name="help" size={18} color="white" />
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        visible={isHelpModalOpen}
        transparent={true}
      >
        <Card_modal closeModal={closeHelpModal} title="Call us">
        <FlatList
                data={Links}
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
    </View>
  );
};

export default Login_items;

const styles = StyleSheet.create({
  image_container: {
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#239B56",
    fontSize: 15.5,
  },
  footer_view: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#239B56",
  },
});
