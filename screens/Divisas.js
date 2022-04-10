import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function Divisas() {
  return (
    <View style={styles.rates_box}>
      <View
        style={{
          height: "8%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#239B56",
          borderBottomColor: "#000",
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ color: "#fff" }}>Tasas de Cambio</Text>
      </View>
      <View style={styles.rates_us_box}>
        <View style={{ marginLeft: "3%", marginRight: "50%" }}>
          <Text style={{ color: "#51d1f6", fontSize: 16, marginBottom: "4%" }}>
            Dólar
          </Text>
          <Text style={{ color: "#00008B", fontSize: 15, marginTop: 10 }}>
            USD
          </Text>
        </View>
        <View style={{ marginRight: "5%" }}>
          <Text style={{ color: "#A9A9A9", fontSize: 17 }}>Compra</Text>
          <Text style={{ color: "#00008B", fontSize: 18, marginTop: 10 }}>
            54.40
          </Text>
        </View>
        <View>
          <Text style={{ color: "#A9A9A9", fontSize: 17 }}>Venta</Text>
          <Text style={{ color: "#00008B", fontSize: 18, marginTop: 10 }}>
            55.50
          </Text>
        </View>
      </View>
      {/**/}
      <View style={[styles.rates_us_box, { marginTop: "3%" }]}>
        <View style={{ marginLeft: "3%", marginRight: "50%" }}>
          <Text style={{ color: "#51d1f6", fontSize: 16, marginBottom: "4%" }}>
            Euro
          </Text>
          <Text style={{ color: "#00008B", fontSize: 15, marginTop: 10 }}>
            EUR
          </Text>
        </View>
        <View style={{ marginRight: "5%" }}>
          <Text style={{ color: "#A9A9A9", fontSize: 17 }}>Compra</Text>
          <Text style={{ color: "#00008B", fontSize: 18, marginTop: 10 }}>
            59.00
          </Text>
        </View>
        <View>
          <Text style={{ color: "#A9A9A9", fontSize: 17 }}>Venta</Text>
          <Text style={{ color: "#00008B", fontSize: 18, marginTop: 10 }}>
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
    backgroundColor: "#F9FBFC",
  },
  rates_us_box: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
});
