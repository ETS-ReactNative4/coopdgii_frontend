import React from "react";
import Custom_input from "./Custom_input";
import { Colors } from "../styles/styled";
import { Text } from "react-native";
const DinamicInput = ({ name, type, handleChange, value, styled }) => {
  switch (type) {
    case "select":
      return <Text>Select</Text>;
    case "file":
      return <Text>File</Text>;
    case "date":
      return <Text>Date</Text>;
    case "textarea":
      return <Text>TextTarea</Text>;

    default:
      return (
        <Custom_input
          name={name}
          placeholder={name}
          value={value}
          onChange={handleChange}
          iconName={type === "text" ? "text" : "add-outline"}
          color={Colors.third}
          keyboardType={type === "text" ? "default" : "numeric"}
          styled={styled}
          autoFocus={true}
        />
      );
  }
};

export default DinamicInput;
