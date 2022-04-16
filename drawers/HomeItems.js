import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
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
import { AntDesign } from "@expo/vector-icons";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function homeItems(props) {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

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
                Adawel
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/*lOGOUT BUTTON*/}
      <Pressable style={[styles.footer_view]} onPress={removeItem}>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{ color: Colors.third, fontSize: 16, fontWeight: "bold" }}
          >
            Salir
          </Text>
        </View>
        <View>
          <AntDesign name="poweroff" size={20} color="black" />
        </View>
      </Pressable>
      {/*Footer Text*/}
      <View style={{ flexDirection: "row", marginLeft: "8%" }}>
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
  );
}

const styles = StyleSheet.create({
  image_container: {
    padding: 10,
    marginBottom: 10,
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
    borderWidth: 0.1,
    borderColor: Colors.third,
    borderRadius: 100,
  },
});
