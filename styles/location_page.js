import { StyleSheet } from "react-native";
import { StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },

    },
  );
  

  export {styles}