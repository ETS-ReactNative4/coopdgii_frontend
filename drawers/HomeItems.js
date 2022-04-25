import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Logo from "../assets/images/logo_home.png";
import { Texts_var } from "../styles/styled";
import { Colors } from "../styles/styled";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../hooks/useStore";

export default function homeItems(props) {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { nombre } = useStore();

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("Sign_In");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.image_container}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={[styles.image, { height: height * 0.2 }]}
          />
          <View style={{ flexDirection: "row", marginLeft: "2%" }}>
            <View style={{ marginRight: "2%" }}>
              <Text style={[styles.text, { fontWeight: "bold" }]}>Hola</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "bold", color: Colors.third },
                ]}
              >
                {nombre}
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/*lOGOUT BUTTON*/}
      <Pressable style={{ alignItems: "center" }} onPress={removeItem}>
        <View style={[styles.footer_view]}>
          <View style={{ marginRight: "3%" }}>
            <Text
              style={{ color: Colors.third, fontSize: 16, fontWeight: "bold" }}
            >
              Salir
            </Text>
          </View>
          <View>
            <FontAwesome name="power-off" size={20} color="black" />
          </View>
        </View>
      </Pressable>
      {/*Footer Text*/}
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: "2%" }}>
            <Text
              style={{ color: Colors.third, fontSize: 14, fontWeight: "bold" }}
            >
              COOPDGII
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: Texts_var.ratesDark_blue,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              MOVIL 1.0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image_container: {
    height: 200,
  },
  image: {
    width: "100%",
  },
  text: {
    color: Texts_var.ratesDark_blue,
    fontSize: 18,
  },
  footer_view: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    borderWidth: 0.5,
    borderColor: Colors.third,
    borderRadius: 40,
  },
});
