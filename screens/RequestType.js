import React, { useState, useEffect } from "react";
import RequestType_styled from "../styles/RequestType_style";
import { View, Text, FlatList, KeyboardAvoidingView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import LoandingModal from "../components/LoandingModal";
import { Entypo } from "@expo/vector-icons";
import useHttpGet from "../hooks/useHttpGet";
import DinamicInput from "../components/DinamicInput";
import Btn_link from "../components/Btn_link";
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";

import { Colors } from "../styles/styled";

const RequestType = ({ navigation }) => {
  const { data, loading, err } = useHttpGet(
    "https://coopdgii.com/coopvirtual/App/solicitudes_tipo"
  );
  const [form, setForm] = useState({});
  const [pickerList, setPickerList] = useState([]);
  const [formSelected, setFormSelected] = useState();
  const [InputList, setInputList] = useState([]);

  const handleChange = (name, text) => setForm({ ...form, [name]: text });

  useEffect(() => {
    if (data) {
      setPickerList(
        data["data"].map((item) => ({
          nombre: item.nombre,
          id: item.id,
        }))
      );
    }
  }, [data]);

  const handlePress = () => {
    console.log(form);
  };
  const handleNavegation = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    if (formSelected) {
      setForm({});
      const request = data["data"].find((item) => item.id === formSelected);
      if (request?.campos_data) setInputList(request?.campos_data);
    }
  }, [formSelected]);

  return (
    <View style={RequestType_styled.page}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.white} />}
        onPress={handleNavegation}
        styleButton={btnDrawerStyle.btn}
      />
      <View style={RequestType_styled.header}>
        <Text style={RequestType_styled.title}>Seleciona el tipo</Text>
        <Picker
          selectedValue={formSelected}
          onValueChange={(itemValue) => setFormSelected(itemValue)}
          style={RequestType_styled.selected}
          mode="dialog"
        >
          {pickerList.length !== 0 &&
            pickerList.map((item, index) => (
              <Picker.Item value={item.id} label={item.nombre} key={index} />
            ))}
        </Picker>
      </View>
      <View style={RequestType_styled.body}>
        <KeyboardAvoidingView
          style={RequestType_styled.list}
          behavior="padding"
        >
          {InputList.length ? (
            <FlatList
              data={InputList}
              keyExtractor={(item, key) => `${item.nombre}_${item.tipo}_${key}`}
              renderItem={({ item }) => (
                <DinamicInput
                  name={item.nombre}
                  type={item.tipo}
                  handleChange={handleChange}
                  value={form[item.nombre]}
                  styled={RequestType_styled.input}
                />
              )}
            />
          ) : (
            <Text>No ha selecionado</Text>
          )}
        </KeyboardAvoidingView>
        <View style={RequestType_styled.footer}>
          <Btn_link
            text="Enviar data"
            size={20}
            color={Colors.third}
            styled={RequestType_styled.btn}
            onPress={handlePress}
          />
        </View>
      </View>
      <LoandingModal isLoadingModalOpen={loading} />
      {err.error ? <Text>Existe un error</Text> : null}
    </View>
  );
};

export default RequestType;
