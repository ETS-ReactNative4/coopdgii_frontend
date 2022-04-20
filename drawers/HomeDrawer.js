import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cuentas from "../screens/Cuentas";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeItems from "./HomeItems";
import Prestamos from "../screens/Prestamos";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import News from "../screens/News";
import { Entypo } from "@expo/vector-icons";
import Whatsapp from "../screens/Whatsapp";
import Certificado from "../screens/Certificado";

const Drawer = createDrawerNavigator();

export default function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontSize: 16, marginLeft: -20 },
        drawerActiveBackgroundColor: "#239B56",
        drawerActiveTintColor: "#ffff",
        drawerInactiveTintColor: "#333",
      }}
      drawerContent={(props) => <HomeItems {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Cuentas}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cuentas"
        component={Certificado}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="piggy-bank" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Prestamos"
        component={Prestamos}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="sack" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Noticias"
        component={News}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="news" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Whatsapp"
        component={Whatsapp}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="whatsapp" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
