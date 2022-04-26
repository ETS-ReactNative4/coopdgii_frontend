import { Alert } from "react-native";
export default function setData(form, id, token) {
  var obj = new FormData();
  obj.append("token", `${token}`);
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
      } else {
        Alert.alert("Fallo", "Data no enviada", [{ text: "Ok" }]);
      }
    });
}
