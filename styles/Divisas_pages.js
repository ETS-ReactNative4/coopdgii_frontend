import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colors } from "./styled";

const {width, height} = Dimensions.get("screen")
const style = StyleSheet.create({
    screen:{
        marginTop:StatusBar.currentHeight,
        backgroundColor:Colors.bg_divisas,
        height:height,
        alignItems:"center"
    },
    screen_header:{
        width:width  * 0.80,
        height:80,
        borderWidth:2,
        borderStyle:"dotted",
        borderRadius:20,
        borderColor:Colors.white,
        marginTop:height * 0.1,
        justifyContent:"center"
    },
    screen_body:{
        backgroundColor:Colors.white,
        height:height/2
    }
})

export {style}