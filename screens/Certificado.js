import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Records from "../json/certificado.json";

const Certificado = ({ navigation }) => {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.header_text}>Mis Cuentas</Text>
        <Pressable style={styles.header_icon} onPress={openDrawer}>
          <Entypo name="menu" size={30} color="#fff" />
        </Pressable>
      </View>
      {/*Icon_Body*/}
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
            <MaterialIcons name="storage" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Cuentas de Ahorro
            </Text>
          </View>
        </View>
        <View style={{ padding: 5, borderWidth: 0.5, marginRight: 5 }}>
          <AntDesign name="creditcard" size={24} color="gray" />
        </View>
        <View style={{ padding: 5, borderWidth: 0.5 }}>
          <MaterialIcons name="work" size={24} color="gray" />
        </View>
      </View>
      {/*Body View*/}
      <ScrollView>
        {Records.data.map((item) => {
          return (
            <View key={item.id} style={{ alignItems: "center" }}>
              <View style={styles.list_view}>
                <View style={styles.list_icon}>
                  <MaterialIcons name="inbox" size={24} color="#fff" />
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      color: Colors.dark_Blue,
                    }}
                  >
                    {item.tipo}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: 15.5,
                    }}
                  >
                    {item.id}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "gray",
                      fontSize: 14,
                    }}
                  >
                    {item.nombre}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: Colors.dark_Blue,
                      fontSize: 16,
                    }}
                  >
                    {item.monto}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Certificado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    width: "100%",
    height: "10%",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: Colors.third,
  },
  header_icon: {
    position: "absolute",
    left: 0,
    top: 10,
    padding: 10,
  },
  header_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  list_view: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 350,
    height: 100,
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 6,
  },
  list_icon: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.third,
    marginRight: "2%",
    borderRadius: 3,
  },
});
