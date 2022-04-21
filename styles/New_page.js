import { StyleSheet, StatusBar } from "react-native";
const New_pages = StyleSheet.create({
  page: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  header: {
    flex: 0.3,
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

    elevation: 5,
  },
  body: {
    flex: 1,
  },
});
export default New_pages;
