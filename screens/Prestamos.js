import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../styles/styled";

export default function Prestamos() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "4%",
          marginLeft: "4%",
        }}
      >
        <View style={{ marginRight: "2%" }}>
          <FontAwesome5 name="coins" size={24} color={Colors.third} />
        </View>
        <View style={{ marginTop: "1%" }}>
          <Text style={[styles.text, { color: Colors.third }]}>Prestamos</Text>
        </View>
      </View>
      <View style={styles.piggy_container}>
        <View style={{ marginLeft: "1%" }}>
          <Text style={[styles.text, { color: Colors.third }]}>
            Certificado Financiero
          </Text>
          <Text>10000001515</Text>
        </View>
        <View style={{ marginRight: "3%" }}>
          <Text>Balance Disponible</Text>
          <Text style={[styles.text, { marginBottom: "2%" }]}>10000001515</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  piggy_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2%",
    marginLeft: "5%",
    borderBottomWidth: 1,
  },
});
