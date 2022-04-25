import { Alert } from "react-native";
export default function setData(form, id) {
  var obj = new FormData();
  obj.append("token", "TESTACCOUNTTOKEN434234345424323JAJAJA");
  obj.append("tipo", id);
  obj.append("datos", JSON.stringify(form));
  fetch("https://coopdgii.com/coopvirtual/App/solicitudes_registro", {
    method: "POST",
    body: obj,
  })
    .then((res) => res.json())
    .then((responseData) => {
      if (responseData.success) {
        Alert.alert("Exito", "Data enviada", [{ text: "Ok" }]);
      }
    });
}
