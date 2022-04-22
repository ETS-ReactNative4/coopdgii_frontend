import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Colors, Texts_var } from "./styled";

const { width } = Dimensions.get("window");

const contact = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignContent: "center",
    flex: 2,
    marginTop: StatusBar.currentHeight,
  },
  bg_img: {
    flex: 0.4,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 15,
  },
  text_color: {
    color: Colors.white,
  },
  titles: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 40,
  },
  titleLittle: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "400",
    opacity: 0.5,
  },
  body: {
    marginHorizontal: 20,
    flex: 1,
  },

  body_title: {
    fontSize: 25,
    color: Colors.cuentas_title,
    opacity: 0.9,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  body_sudtitle: {
    fontSize: 15,
    color: Colors.cuentas_title,
    textAlign: "center",
    marginBottom: 20,
  },
  body_list: {
    alignItems: "center",
    flex: 1,
    paddingBottom: 15,
  },
});

export default contact;
