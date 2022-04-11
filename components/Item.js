import React from "react";
import { View, Text } from "react-native";

const Item = ({
  icon,
  title,
  sudtitle,
  ItemStyled,
  TitleStyled,
  sudStyle,
  ItemTextStyled,
}) => {
  return (
    <View style={ItemStyled}>
      {icon}
      <View style={ItemTextStyled}>
        <Text style={TitleStyled}>{title}</Text>
        <Text style={sudStyle}>{sudtitle}</Text>
      </View>
    </View>
  );
};

export default Item;
