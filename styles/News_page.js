import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "./styled";

const News_pages = StyleSheet.create({
  page: {
    marginTop: StatusBar.currentHeight,
  },
  header: {},
  body: {},
  header_background: {},
  container_modal: {
    backgroundColor: Colors.bg_container_modal,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spiner_container: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default News_pages;
