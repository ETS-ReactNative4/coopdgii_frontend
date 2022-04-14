import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function usePost(url, response, datos) {
  const [data, setData] = useState(response);
  const [isLoanding, setIsLoanding] = useState(false);

  async function getData(url) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: datos,
      });
      const data = await res.json();
      setData({
        isLoading: false,
        data,
      });
    } catch (error) {
      Alert.alert("Error", error, [{ text: "Ok" }]);
    }
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return data;
}
