import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login_drawer from "./drawers/Login_drawer";
import HomeDrawer from "./drawers/HomeDrawer";
import New from "./screens/New";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign_In" component={Login_drawer} />
        <Stack.Screen name="Home_Screen" component={HomeDrawer} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
