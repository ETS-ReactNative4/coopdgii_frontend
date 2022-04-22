import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Colors } from "./styled";

const { height, width } = Dimensions.get("screen");

const ForgotPassword_styled = StyleSheet.create({
  page: {
    marginTop: StatusBar.currentHeight,
    height: height,
    width: width,
    backgroundColor: Colors.white,
  },
  header: {
    height: height * 0.4,
    width: "100%",
  },
  header_img: {
    width: "100%",
    height: "100%",
  },
  body: {
    marginHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: Colors.third,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    fontSize: 15,
    color: Colors.cuentas_title,
    textAlign: "left",
    marginBottom: 30,
  },
  Input: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 0,
    marginBottom: 10,
  },
  InputText: {
    borderBottomWidth: 1,
    marginLeft: 15,
    width: "80%",
    height: 35,
    marginBottom: 0,
  },
  button: {
    backgroundColor: Colors.third,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default ForgotPassword_styled;
