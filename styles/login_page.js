import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { Colors } from "./styled";

export const styles = StyleSheet.create({
  //Login Page
  root_container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "red",

    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.fourth,
    alignItems: "center",
    padding: 20,
    alignContent: "flex-end",
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
