import React from "react";
import { View, Text, Button, Image } from "react-native";
import New_pages from "../styles/New_page";

const New = ({ route, navigation }) => {
  const { item } = route?.params;
  return (
    <View style={New_pages.page}>
      <View style={New_pages.header}>
        <Image source={{ uri: item.imagen }} style={New_pages.header_image} />
      </View>
      <View style={New_pages.body}></View>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default New;
