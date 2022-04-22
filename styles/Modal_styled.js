import { StyleSheet } from "react-native";
import { Colors } from "./styled";
const Modal_Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    color: Colors.third,
    fontSize: 15,
  },
  textContainer: {
    marginLeft: 10,
  },
});

export default Modal_Style;
