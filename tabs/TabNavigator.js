import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Solicitud from "../screens/Solicitud";
import SolicitudTipo from "../screens/SolicitudTipo";
import SolicitudRegistro from "../screens/SolicitudRegistro";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import RequestType from "../screens/RequestType";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Solicitud") {
            iconName = focused ? "paper-plane" : "paper-plane-o";
          } else if (route.name === "Tipos") {
            iconName = focused ? "paperclip" : "paperclip";
          } else if (route.name === "Registro") {
            iconName = focused ? "registered" : "registered";
          }

          return <FontAwesome name={iconName} size={24} color={Colors.third} />;
        },
        tabBarActiveTintColor: Colors.third,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Solicitud" component={Solicitud} />
      <Tab.Screen name="Tipos" component={RequestType} />
      <Tab.Screen name="Registro" component={SolicitudRegistro} />
    </Tab.Navigator>
  );
}
