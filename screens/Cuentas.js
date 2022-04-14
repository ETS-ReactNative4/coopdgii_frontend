import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Women from "../assets/images/woman-writing.jpg";
import { Colors } from "../styles/styled";
import { Texts_var } from "../styles/styled";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import All_products from "../components/All_products";
import Prestamos from "./Prestamos";

export default function Cuentas({ navigation }) {
  const openSideMenu = () => {
    navigation.toggleDrawer();
  };
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "30%" }}>
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
              <View>
                <Ionicons
                  name="menu"
                  size={30}
                  color={Colors.third}
                  onPress={openSideMenu}
                />
              </View>
              <View>
                <Feather name="bell" size={30} color={Colors.third} />
              </View>
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
                    Adawel
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
                      icon={"coins"}
                      type={"Prestamos"}
                      type_acc={"Certificado Financiero"}
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
                    icon={"coins"}
                    type={"Prestamos"}
                    type_acc={"Certificado Financiero"}
                    special_acc={"Existe"}
                  />
                );
              default:
                return null;
            }
          })()}
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
});
