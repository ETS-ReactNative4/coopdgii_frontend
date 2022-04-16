import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../styles/styled";

export default function All_products({ icon, type, type_acc, special_acc }) {
  const CuentaExist = ({ special_acc }) => {
    if (special_acc) {
      return (
        <View style={styles.piggy_container}>
          <View style={{ marginLeft: "1%" }}>
            <Text style={[styles.text, { color: Colors.third }]}>
              Prestamo General
            </Text>
            <Text>10000001515</Text>
          </View>
          <View style={{ marginRight: "3%" }}>
            <Text>Balance Disponible</Text>
            <Text style={[styles.text, { marginBottom: "2%" }]}>
              10000001515
            </Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ marginRight: "2%", marginLeft: "2%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "4%",
        }}
      >
        <View style={{ marginRight: "2%" }}>
          <FontAwesome5 name={icon} size={24} color={Colors.third} />
        </View>
        <View style={{ marginTop: "1%" }}>
          <Text style={[styles.text, { color: Colors.third }]}>{type}</Text>
        </View>
      </View>
      <View style={styles.piggy_container}>
        <View style={{ marginLeft: "1%" }}>
          <Text style={[styles.text, { color: Colors.third }]}>{type_acc}</Text>
          <Text>10000001515</Text>
        </View>
        <View style={{ marginRight: "3%" }}>
          <Text>Balance Disponible</Text>
          <Text style={[styles.text, { marginBottom: "2%" }]}>10000001515</Text>
        </View>
      </View>
      <CuentaExist special_acc={special_acc} />
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
