import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Women from "../assets/images/woman-writing.jpg";
import { Colors } from "../styles/styled";
import { Texts_var } from "../styles/styled";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import All_products from "../components/All_products";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cuentas({ navigation }) {
  const [name, setName] = useState();
  useEffect(() => {
    getToken();
  });

  async function getToken() {
    try {
      await AsyncStorage.getItem("token").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Nombre);
        } else {
          console.log("No hay nada");
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  const openSideMenu = () => {
    navigation.toggleDrawer();
  };

  const goWhatsapp = () => {
    navigation.navigate("Whatsapp");
  };

  const [value, setValue] = useState("Mostrar todos mis productos");
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 230 }}>
        <View style={{ width: "100%", height: "100%", position: "relative" }}>
          <ImageBackground
            source={Women}
            resizeMode="cover"
            style={[styles.back_image, { opacity: 0.3 }]}
          />
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            {/*Menu and bell part*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Pressable onPress={openSideMenu}>
                <Ionicons name="menu" size={30} color={Colors.third} />
              </Pressable>
              <Pressable>
                <Feather name="bell" size={30} color={Colors.third} />
              </Pressable>
            </View>
            {/*Greetings View*/}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "2%" }}>
                  <Text
                    style={[styles.text, { color: Texts_var.ratesDark_blue }]}
                  >
                    Hola
                  </Text>
                </View>
                <View>
                  <Text style={[styles.text, { color: Colors.third }]}>
                    {name}
                  </Text>
                </View>
              </View>
              <View>
                <Text>Ultima Conexion: {moment().format("LLLL")}</Text>
              </View>
              <View
                style={{
                  marginTop: "4%",
                  backgroundColor: Colors.bg_btnColor,
                  borderRadius: 10,
                }}
              >
                <Picker
                  style={{ height: "10%", width: 300 }}
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                >
                  <Picker.Item
                    label="Mostrar todos mis productos"
                    value="Mostrar todos mis productos"
                  />
                  <Picker.Item label="Cuentas" value="Cuentas" />
                  <Picker.Item label="Inversion" value="Inversion" />
                  <Picker.Item label="Prestamos" value="Prestamos" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
        {/*Products View*/}
        <View>
          {(() => {
            switch (value) {
              case "Mostrar todos mis productos":
                return (
                  <View>
                    <All_products
                      icon={"piggy-bank"}
                      type={"Cuentas"}
                      type_acc={"Cuentas Aportaciones"}
                    />
                    <All_products
                      icon={"coins"}
                      type={"Inversion"}
                      type_acc={"Certificado Financiero"}
                    />
                    <All_products
                      icon={"money-bill"}
                      type={"Prestamos"}
                      type_acc={"Prestamo Normal"}
                      special_acc={"Existe"}
                    />
                  </View>
                );
              case "Cuentas":
                return (
                  <All_products
                    icon={"piggy-bank"}
                    type={"Cuentas"}
                    type_acc={"Cuentas Aportaciones"}
                  />
                );
              case "Inversion":
                return (
                  <All_products
                    icon={"coins"}
                    type={"Inversion"}
                    type_acc={"Certificado Financiero"}
                  />
                );
              case "Prestamos":
                return (
                  <All_products
                    icon={"money-bill"}
                    type={"Prestamos"}
                    type_acc={"Prestamo Normal"}
                    special_acc={"Existe"}
                  />
                );
              default:
                return null;
            }
          })()}
        </View>
      </View>
      {/*Footer View*/}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingVertical: "4%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable
            style={[
              styles.footer_views,
              { marginRight: "25%", marginLeft: "5%" },
            ]}
          >
            <FontAwesome name="paper-plane-o" size={24} color={Colors.third} />
            <Text>Solicitud</Text>
          </Pressable>
          <Pressable style={[styles.footer_views, { marginRight: "22%" }]}>
            <Foundation name="telephone" size={24} color={Colors.third} />
            <Text>Contacto</Text>
          </Pressable>
          <Pressable style={[styles.footer_views]} onPress={goWhatsapp}>
            <FontAwesome name="whatsapp" size={24} color={Colors.third} />
            <Text>Whatsapp</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  back_image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    height: "%",
    position: "relative",
  },
  footer_views: {
    alignItems: "center",
    justifyContent: "center",
  },
});
