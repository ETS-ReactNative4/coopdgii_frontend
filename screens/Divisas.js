import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Texts_var, Colors } from "../styles/styled";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import { Entypo } from "@expo/vector-icons";
import Btn_icon from "../components/Btn_icon";

export default function Divisas({navigation}) {

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rates_box}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.white} />}
        onPress={openDrawer}
        styleButton={btnDrawerStyle.btn}
      />
      <View
        style={{
          height: "8%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.third,
          borderBottomColor: Colors.black,
          borderBottomWidth: 2,
        }}
      >
        <Text
          style={{
            color: Texts_var.ratesfont,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Tasas de Cambio
        </Text>
      </View>
      <View style={styles.rates_us_box}>
        <View style={{ marginLeft: "3%", marginRight: "50%" }}>
          <Text
            style={{
              color: Texts_var.ratesAque,
              fontSize: 16,
              marginBottom: "4%",
            }}
          >
            Dólar
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 15,
              marginTop: 10,
            }}
          >
            USD
          </Text>
        </View>
        <View style={{ marginRight: "5%" }}>
          <Text style={{ color: Texts_var.ratesGray, fontSize: 17 }}>
            Compra
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            54.40
          </Text>
        </View>
        <View>
          <Text style={{ color: Texts_var.ratesGray, fontSize: 17 }}>
            Venta
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            55.50
          </Text>
        </View>
      </View>
      {/**/}
      <View style={[styles.rates_us_box, { marginTop: "3%" }]}>
        <View style={{ marginLeft: "3%", marginRight: "50%" }}>
          <Text
            style={{
              color: Texts_var.ratesAque,
              fontSize: 16,
              marginBottom: "4%",
            }}
          >
            Euro
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 15,
              marginTop: 10,
            }}
          >
            EUR
          </Text>
        </View>
        <View style={{ marginRight: "5%" }}>
          <Text style={{ color: Texts_var.ratesGray, fontSize: 17 }}>
            Compra
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            59.00
          </Text>
        </View>
        <View>
          <Text style={{ color: Texts_var.ratesGray, fontSize: 17 }}>
            Venta
          </Text>
          <Text
            style={{
              color: Texts_var.ratesDark_blue,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            63.00
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rates_box: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.fourth,
  },
  rates_us_box: {
    flexDirection: "row",
    backgroundColor: Texts_var.ratesfont,
    paddingVertical: 40,
  },
});
