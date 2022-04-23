import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "./styled";

const Reset_styled = StyleSheet.create({
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
    marginHorizontal: 20,
  },
});

export default Reset_styled;
