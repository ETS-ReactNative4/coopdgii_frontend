import React, { useState } from "react";
import Custom_input from "./Custom_input";
import { Colors } from "../styles/styled";
import { Text, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Btn_link from "./Btn_link";
import RequestType_styled from "../styles/RequestType_style";

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

  const [image, setImage] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      handleChange(name, result);
      Alert.alert("Exito", "Se ha guardado la imagen", [{ text: "Ok" }]);
    }
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
      return (
        <Btn_link
          onPress={pickImage}
          text={name}
          color={"blue"}
          size={16}
          styled={[
            RequestType_styled.btn,
            {
              borderColor: "blue",
            },
          ]}
        />
      );

    case "date":
      return (
        <Custom_input
          name={name}
          placeholder={name}
          value={value}
          onChange={handleChange}
          iconName={"calendar"}
          color={Colors.third}
          styled={styled}
        />
      );

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
