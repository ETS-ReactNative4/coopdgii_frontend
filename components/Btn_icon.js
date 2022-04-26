import React from "react";
import { TouchableOpacity } from "react-native";

import { Colors } from "../styles/styled";

const Btn_icon = ({ onPress, icon, styleButton, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styleButton]}>
      {icon}
    </TouchableOpacity>
  );
};

export default Btn_icon;
