import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Colors } from "../styles/styled";
import { Ionicons } from "@expo/vector-icons";
import { Texts_var } from "../styles/styled";
import All_products from "../components/All_products";

export default function Prestamos() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            color: Texts_var.ratesfont,
            fontSize: 16,
          }}
        >
          Prestamos
        </Text>
      </View>
      <View
        style={{
          marginTop: "2%",
          flexDirection: "row",
        }}
      >
        <View style={{ marginLeft: "5%", marginRight: "2%" }}>
          <Text style={styles.text_greetings}>Hola</Text>
        </View>
        <View>
          <Text
            style={[styles.text_greetings, { color: Texts_var.ratesDark_blue }]}
          >
            Adawel
          </Text>
        </View>
      </View>
      {/*Loans views*/}
      <View style={{ alignItems: "center" }}>
        <View style={[styles.loans, { padding: 15 }]}>
          {/*Your Account*/}
          <View style={{ flexDirection: "row" }}>
            <View>
              <Ionicons name="people" size={40} color="black" />
            </View>
            <View>
              <Text
                style={[
                  styles.text_greetings,
                  { fontSize: 30, marginLeft: "2%" },
                ]}
              >
                Tu cuenta
              </Text>
            </View>
          </View>
          {/*Loans*/}
          <All_products
            icon={"money-bill"}
            type={"Prestamos Normales"}
            type_acc={"Prestamo Normal"}
            special_acc={"Existe"}
          />
          <All_products
            icon={"piggy-bank"}
            type={"Orden de Compra"}
            type_acc={"Prestamo Normal"}
            special_acc={"Existe"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.third,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    backgroundColor: Colors.third,
    borderBottomWidth: 0.5,
  },
  text_greetings: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.third,
  },
  loans: {
    width: "100%",
    height: "100%",
    borderWidth: 0.5,
    borderRadius: 25,
    marginTop: "5%",
  },
});
