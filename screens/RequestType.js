import React, { useState, useEffect } from "react";
import RequestType_styled from "../styles/RequestType_style";
import { View, Text, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import LoandingModal from "../components/LoandingModal";
import useHttpGet from "../hooks/useHttpGet";
import DinamicInput from "../components/DinamicInput";
const RequestType = () => {
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

  useEffect(() => {
    if (formSelected) {
      const request = data["data"].find((item) => item.id === formSelected);
      if (request?.campos_data) setInputList(request?.campos_data);
    }
  }, [formSelected]);

  return (
    <View style={RequestType_styled.page}>
      <View style={RequestType_styled.header}>
        <Text style={RequestType_styled.title}>Seleciona el tipo</Text>
        <Picker
          selectedValue={formSelected}
          onValueChange={(itemValue) => setFormSelected(itemValue)}
        >
          {pickerList.length !== 0 &&
            pickerList.map((item, index) => (
              <Picker.Item value={item.id} label={item.nombre} key={index} />
            ))}
        </Picker>
      </View>
      <View style={RequestType_styled.body}>
        {InputList.length ? (
          <FlatList
            data={InputList}
            keyExtractor={(item, key) => `${item.nombre}_${item.tipo}_${key}`}
            renderItem={({ item }) => (
              <DinamicInput name={item.nombre} type={item.tipo} />
            )}
          />
        ) : (
          <Text>No ha selecionado</Text>
        )}
      </View>
      <LoandingModal isLoadingModalOpen={loading} />
      {err.error ? <Text>Existe un error</Text> : null}
    </View>
  );
};

export default RequestType;
