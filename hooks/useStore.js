import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

export default function useStore() {
  const [token, setToken] = useState();
  const [nombre, setNombre] = useState();

  useEffect(async () => {
    try {
      await AsyncStorage.getItem("token").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setNombre(user.Nombre);
          setToken(user.Tokem);
        } else {
          console.log("No hay nada");
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
  return {
    token,
    nombre,
  };
}
