import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colors } from "./styled";

const { height, width } = Dimensions.get("screen");
const RequestType_styled = StyleSheet.create({
  page: {
    height: height,
    width: width,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.white,
  },
  header: {
    width: width,
    height: height * 0.2,
    backgroundColor: Colors.third,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 15,
    elevation: 8,
  },
  body: {
    marginHorizontal: 20,
    height: height * 0.8,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: "80%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  list: {
    height: "60%",
    paddingBottom: 25,
  },
  footer: {
    height: "40%",
  },

  btn: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: Colors.third,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  input: {
    padding: 10,
  },
});

export default RequestType_styled;
