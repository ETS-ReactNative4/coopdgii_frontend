import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login_drawer from "./drawers/Login_drawer";

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
        {/*Stack.Screen name="Home" component={Home}*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
