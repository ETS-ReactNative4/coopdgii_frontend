import React, { useState } from "react";
import Custom_input from "./Custom_input";
import { Colors } from "../styles/styled";
import { Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DinamicInput = ({
  name,
  type,
  handleChange,
  value,
  styled,
  pickerDatos = [],
  pickerStatus,
  ...prop
}) => {
  const handlePickerChange = (item) => {
    setpickeSatus(item);
    handleChange(name, pickeSatus);
  };
  const [pickeSatus, setpickeSatus] = useState(pickerStatus);
  switch (type) {
    case "select":
      return (
        <Picker
          selectedValue={pickeSatus}
          onValueChange={(item) => handlePickerChange(item)}
          mode="dialog"
        >
          {pickerDatos.map((item, index) => (
            <Picker.Item value={item} label={item} key={index} />
          ))}
        </Picker>
      );
    case "file":
      return <Text>File</Text>;
    case "date":
      return <Text>Date</Text>;

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
          {...prop}
        />
      );
  }
};

export default DinamicInput;
