import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

function useGet(url, response) {
  const [data, setData] = useState(response);

  async function getData(url) {
    try {
      const res = await fetch(url);
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
