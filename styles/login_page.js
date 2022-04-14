import { StyleSheet, useWindowDimensions, StatusBar } from "react-native";
import { Colors } from "./styled";

export const styles = StyleSheet.create({
  //Login Page
  root_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.fourth,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  footer_image: {
    opacity: 0.4,
  },
});
