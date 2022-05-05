import { Alert } from "react-native";
export default function setData(form, id, token) {
  var obj = new FormData();
  obj.append("token", `${token}`);
  obj.append("tipo", id);
  obj.append("datos", JSON.stringify(form));
  fetch("YOUR-API-ADDRESS", {
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
