import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Btn_icon from "../components/Btn_icon";
import New_pages from "../styles/New_page";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import moment from "moment";

const New = ({ route, navigation }) => {
  const { item } = route?.params;
  return (
    <View style={New_pages.page}>
      <Btn_icon
        icon={<AntDesign name="left" size={24} color={Colors.white} />}
        styleButton={New_pages.btnIcon}
        onPress={() => navigation.goBack()}
      />
      <View style={New_pages.header}>
        <Image source={{ uri: item.imagen }} style={New_pages.header_image} />
      </View>
      <View style={New_pages.body}>
        <View style={{ marginBottom: 20 }}>
          <Text style={New_pages.title}>{item.title}</Text>
          <Text style={New_pages.date}>{moment(item.date).format("LL")}</Text>
        </View>
        <ScrollView style={{ marginBottom: 40 }}>
          <Text style={New_pages.content}>{item.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default New;
