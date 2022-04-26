import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colors } from "./styled";

const { height, width } = Dimensions.get("screen");
const New_pages = StyleSheet.create({
  page: {
    marginTop: StatusBar.currentHeight,
    height: height,
    width: width,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 0.5,
    position: "relative",
    zIndex: 0,
  },
  header_image: {
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "left",
  },
  date: {
    marginTop: 5,
    textAlign: "right",
    fontSize: 15,
    fontWeight: "normal",
  },
  content: {
    fontSize: 16,
  },
  btnIcon: {
    backgroundColor: Colors.third,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
export default New_pages;
