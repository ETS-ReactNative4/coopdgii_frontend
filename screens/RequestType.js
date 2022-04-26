import React, { useState, useEffect } from "react";
import RequestType_styled from "../styles/RequestType_style";
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import LoandingModal from "../components/LoandingModal";
import { Entypo } from "@expo/vector-icons";
import useHttpGet from "../hooks/useHttpGet";
import DinamicInput from "../components/DinamicInput";
import Btn_link from "../components/Btn_link";
import Btn_icon from "../components/Btn_icon";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import setData from "../helpers/dataSolicitud";
import useStore from "../hooks/useStore";

import { Colors } from "../styles/styled";

const RequestType = ({ navigation }) => {
  const { data, loading, err } = useHttpGet(
    "https://coopdgii.com/coopvirtual/App/solicitudes_tipo"
  );
  const { token } = useStore();
  const [form, setForm] = useState({});
  const [pickerList, setPickerList] = useState([]);
  const [formSelected, setFormSelected] = useState();
  const [InputList, setInputList] = useState([]);
  var arr = [];
  var temp = [];

  const handleChange = (name, text) => setForm({ ...form, [name]: text });
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const person = ["persona fisica", "no persona"];
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
    for (let element in form) {
      arr.push(`${element}`, `${form[element]}`);
    }
    {
      arr && divideArr(arr);
    }
  };

  function divideArr(component) {
    for (let i = 0; i < component.length; i += 2) {
      let divided = component.slice(i, i + 2);
      temp.push(divided);
    }
    return setData(temp, form.id, token);
  }

  const handleNavegation = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    if (formSelected) {
      const request = data["data"].find((item) => item.id === formSelected);
      if (request?.campos_data) {
        setInputList(request?.campos_data);
        setForm({ id: formSelected });
      }
    }
  }, [formSelected]);

  return (
    <View style={RequestType_styled.page}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.white} />}
        color={Colors.white}
        onPress={handleNavegation}
        styleButton={[btnDrawerStyle.btn]}
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
                  pickerDatos={item.id === 1 ? person : numbers}
                  pickerStatus={item.id === 1 ? person[0] : numbers[0]}
                  multiline={item.tipo === "textarea"}
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
