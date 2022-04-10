import { StyleSheet, useWindowDimensions, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  //Login Page
  root_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#F9FBFC",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  footer_image: {
    marginTop: 10,
    opacity: 0.4,
  },
});
