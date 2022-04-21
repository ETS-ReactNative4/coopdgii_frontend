import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colors, Texts_var } from "./styled";

const { height } = Dimensions.get("screen");
const News_pages = StyleSheet.create({
  page: {
    marginTop: StatusBar.currentHeight,
    height: height,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: height * 0.15,
    zIndex: 2,
  },
  body: {
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 120,
  },
  header_background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    zIndex: 2,
  },

  header_title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: Texts_var.title,
    textShadowColor: Colors.third,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 1,
    shadowOpacity: 3,
  },

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
