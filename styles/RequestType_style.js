import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "./styled";
const RequestType_styled = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1.5,
  },
  body: {
    flex: 2,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.third,
    marginTop: 10,
  },
});

export default RequestType_styled;
