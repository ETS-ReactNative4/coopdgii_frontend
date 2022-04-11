import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sign_in from "../screens/Sign_in";
import Divisas from "../screens/Divisas";
import Login_items from "./Login_items";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Login_drawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontSize: 16, marginLeft: -20 },
        drawerActiveBackgroundColor: "#239B56",
        drawerActiveTintColor: "#ffff",
        drawerInactiveTintColor: "#333",
      }}
      drawerContent={(props) => <Login_items {...props} />}
    >
      <Drawer.Screen
        name="Login"
        component={Sign_in}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Divisas"
        component={Divisas}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="money-bill-wave" size={24} color={color} />
          ),
        }}
      />


    </Drawer.Navigator>
  );
}
