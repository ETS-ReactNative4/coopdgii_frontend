import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../styles/styled";
import { Ionicons } from "@expo/vector-icons";
import { Texts_var } from "../styles/styled";
import useToken from "../hooks/useToken";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const token = {
  token: "TESTACCOUNTTOKEN434234345424323JAJAJA",
};

export default function Prestamos({ navigation }) {
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
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

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
        <Pressable style={styles.header_icon} onPress={openDrawer}>
          <Entypo name="menu" size={30} color="#fff" />
        </Pressable>
      </View>
      {/*Loans views*/}
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
              backgroundColor: Colors.third,
              marginRight: 5,
            }}
          >
            <View style={{ marginRight: 5 }}>
              <AntDesign name="creditcard" size={24} color="#fff" />
            </View>
            <View>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Prestamos
              </Text>
            </View>
          </View>
          <View style={{ padding: 5, borderWidth: 0.5, marginRight: 5 }}>
            <MaterialIcons name="storage" size={24} color="gray" />
          </View>
          <View style={{ padding: 5, borderWidth: 0.5 }}>
            <MaterialIcons name="work" size={24} color="gray" />
          </View>
        </View>
        <View style={[styles.loans, { padding: 15 }]}>
          {/*Your Account*/}
          {datauser && (
            <FlatList
              data={datauser.data}
              renderItem={({ item }) => (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View style={styles.header_loans}>
                    <View style={styles.loans_icon}>
                      <Ionicons name="person-outline" size={75} color="#fff" />
                    </View>
                    <View>
                      <Text style={styles.text_loans}>{item.descripcion}</Text>
                      <Text>Monto Prestamo : {item.monto_prestamo}</Text>
                      <Text>Balance Prestamo : {item.balance_prestamo}</Text>
                      <Text>
                        Fecha de vencimiento : {item.fecha_vencimiento}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
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
    position: "relative",
  },
  header_icon: {
    position: "absolute",
    left: 0,
    top: 10,
    padding: 10,
  },
  text_greetings: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.third,
  },
  loans: {
    width: "100%",
    height: "100%",
    marginTop: "5%",
  },
  header_loans: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 375,
    height: 100,
    marginTop: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text_loans: {
    fontWeight: "bold",
    fontSize: 17,
    color: Colors.third,
  },
  loans_icon: {
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.third,
  },
});
