import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import useToken from "../hooks/useToken";
import { Colors } from "../styles/styled";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const token = {
  token: "TESTACCOUNTTOKEN434234345424323JAJAJA",
};

const Descuentos = ({ navigation }) => {
  const { datauser, loading } = useToken(
    "https://coopdgii.com/coopvirtual/App/descuentos",
    token
  );

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.third} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.header_text}>Descuentos</Text>
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
            <MaterialIcons name="work" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Descuentos
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
      {datauser && (
        <FlatList
          data={datauser.data
            .map(function (item, index) {
              return item.det;
            })
            .flat()}
          renderItem={({ item }) => (
            <View
              style={{ alignItems: "center", marginBottom: 10, marginTop: 5 }}
            >
              <View style={styles.list_view}>
                <View style={styles.icon_view}>
                  <MaterialIcons name="work-outline" size={30} color="#fff" />
                </View>
                <View>
                  <Text style={[styles.list_text]}>Mes:{item.mes_str}</Text>
                  <Text
                    style={[
                      styles.list_text,
                      { color: Colors.secondary, fontSize: 15 },
                    ]}
                  >
                    Año:{item.ano}
                  </Text>
                  <Text
                    style={[
                      styles.list_text,
                      { color: Colors.secondary, fontSize: 15 },
                    ]}
                  >
                    Tipo:{item.descripcion}
                  </Text>
                  <Text style={[styles.list_text, { fontSize: 16 }]}>
                    Monto:{item.monto}
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Descuentos;

const styles = StyleSheet.create({
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
    borderWidth: 0.5,
    borderRadius: 8,
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
    fontSize: 17,
  },
});
