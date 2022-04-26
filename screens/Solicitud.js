import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import useToken from "../hooks/useToken";
import { Colors } from "../styles/styled";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LoandingModal from "../components/LoandingModal";

const token = {
  token: "TESTACCOUNTTOKEN434234345424323JAJAJA",
};

const Solicitud = ({ navigation }) => {
  const { datauser, loading } = useToken(
    "https://coopdgii.com/coopvirtual/App/solicitudes",
    token
  );
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.header_text}>Solicitudes</Text>
        <Pressable style={styles.header_icon} onPress={openDrawer}>
          <Entypo name="menu" size={30} color="#fff" />
        </Pressable>
      </View>
      {/*Icon View*/}
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
            <FontAwesome name="paper-plane" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Solicitudes
            </Text>
          </View>
        </View>
        <View style={{ padding: 5, borderWidth: 0.5, marginRight: 5 }}>
          <AntDesign name="creditcard" size={24} color="gray" />
        </View>
        <View style={{ padding: 5, borderWidth: 0.5 }}>
          <MaterialIcons name="storage" size={24} color="gray" />
        </View>
      </View>
      {/*Body View*/}
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        {datauser && (
          <FlatList
            data={datauser.data}
            renderItem={({ item }) => (
              <View style={styles.list_container}>
                <View style={styles.list_view}>
                  <View style={styles.icon_view}>
                    <FontAwesome name="paper-plane-o" size={24} color="#fff" />
                  </View>
                  <View
                    style={{
                      width: "90%",
                    }}
                  >
                    <Text style={[styles.list_text, { fontSize: 15 }]}>
                      {item.nombre}
                    </Text>
                    <View>
                      <Text
                        style={[
                          styles.list_text,
                          { color: Colors.secondary, fontSize: 15 },
                        ]}
                      >
                        Fecha:{item.fecha}
                      </Text>
                      <Text
                        style={[
                          styles.list_text,
                          { color: Colors.secondary, fontSize: 15 },
                        ]}
                      >
                        Estado:{item.estado}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <LoandingModal isLoadingModalOpen={loading} />
    </View>
  );
};

export default Solicitud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  list_container: {
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
    fontSize: 18,
  },
  list_view: {
    width: "90%",
    flexDirection: "row",
  },
  icon_view: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: Colors.third,
    borderRadius: 5,
  },
  list_text: {
    color: Colors.dark_Blue,
    fontWeight: "bold",
    fontSize: 16,
  },
});
