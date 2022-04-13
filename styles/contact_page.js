import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Colors, Texts_var } from "./styled";

const { width } = Dimensions.get("window");

const contact = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg_color,
    alignContent: "center",
    flex: 2,
    marginTop: StatusBar.currentHeight,
  },
  list_container: {
    backgroundColor: Colors.bg_color,
    marginHorizontal: 10,
    borderColor: Colors.secondary,
    marginTop: 20,

    //Shadow property
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",

    marginHorizontal: 10,
    padding: 20,
    borderBottomWidth: 0.9,
    alignItems: "center",
  },
  Item_title: {
    fontSize: 15,
    color: Colors.secondary,
  },
  Item_sudtitle: {
    fontSize: 15,
    color: Colors.primary,
  },
  Item_TextContainer: {
    marginLeft: 20,
  },
  header: {
    flex: 0.8,
    justifyContent: "flex-end",
  },
  Title: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.primary,
    marginBottom: 10,
    marginTop: 20,
    marginBottom: 0,
    flexBasis: "25%",
  },
  header_img: {
    maxWidth: width,
    flexBasis: "60%",
  },
  body_title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: Texts_var.title,
    color: Colors.black,
    fontWeight: Texts_var.fwBold,
  },
  body_description: {
    textAlign: "center",
    marginHorizontal: 30,
  },
  body_buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default contact;
