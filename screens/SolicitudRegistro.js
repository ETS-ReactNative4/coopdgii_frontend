import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SolicitudRegistro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Solicitud Registro</Text>
    </View>
  );
};

export default SolicitudRegistro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
