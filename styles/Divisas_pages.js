import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colors } from "./styled";

const { width, height } = Dimensions.get("screen");
const radius = 40;
const style = StyleSheet.create({
  screen: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.bg_divisas,
    height: height,
    alignItems: "center",
    justifyContent: "space-between",
  },
  screen_header: {
    width: width * 0.8,
    height: 100,
    borderWidth: 2,
    borderStyle: "dotted",
    borderRadius: 20,
    borderColor: Colors.white,
    marginTop: height * 0.15,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  img: {
    maxWidth: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  header: {
    flex: 1,
    justifyContent: "center",
  },

  header_money: {
    flexDirection: "row",
    alignItems: "center",
  },
  money_text: {
    color: Colors.white,
    fontSize: 18,
    opacity: 0.8,
  },
  money_big_text: {
    fontSize: 25,
    textAlign: "right",
    color: Colors.white,
    marginRight: 15,
  },
  money_big_total: {
    fontSize: 25,
    color: "black",
    alignSelf: "center",
    marginRight: 20,
  },

  screen_body: {
    height: height * 0.65,
    width: width,
    alignItems: "center",
  },
  body_list: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  body_item: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { style };
