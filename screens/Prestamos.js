import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../styles/styled";
import { Ionicons } from "@expo/vector-icons";
import { Texts_var } from "../styles/styled";
import useToken from "../hooks/useToken";

const token = {
  token: "TESTACCOUNTTOKEN434234345424323JAJAJA",
};

export default function Prestamos() {
  const { datauser, loading } = useToken(
    "https://coopdgii.com/coopvirtual/App/prestamos",
    token
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.third} />
      </View>
    );
  }

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
          <FlatList
            data={datauser.data}
            renderItem={({ item }) => (
              <View style={[styles.header_loans]}>
                <View>
                  <Ionicons name="person-outline" size={75} color="black" />
                </View>
                <View>
                  <Text style={styles.text_loans}>{item.descripcion}</Text>
                  <Text>Monto Prestamo : {item.monto_prestamo}</Text>
                  <Text>Balance Prestamo : {item.balance_prestamo}</Text>
                  <Text>Fecha de vencimiento : {item.fecha_vencimiento}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
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
  header_loans: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "4%",
  },
  text_loans: {
    fontWeight: "bold",
    fontSize: 17,
    color: Colors.third,
  },
});
