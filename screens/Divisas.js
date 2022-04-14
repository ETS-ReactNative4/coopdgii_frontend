import { View, Text} from "react-native";
import React from "react";
import { Colors } from "../styles/styled";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import { Entypo } from "@expo/vector-icons";
import Btn_icon from "../components/Btn_icon";
import { style as DivisasStyle } from "../styles/Divisas_pages";
import RD from "../assets/svgs/RD";



const Divisas = ({ navigation }) => {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    // <View style={DivisasStyle.screen}>
      
    //   <Btn_icon
    //     icon={<Entypo name="menu" size={24} color={Colors.primary} />}
    //     onPress={openDrawer}
    //     styleButton={btnDrawerStyle.btn}
    //   />

    //   <View style={DivisasStyle.screen_panel}>
    //     {/* <RD width={20} height={30}/> */}
    //     <View></View>
    //     <Text>$100.00</Text>
    //   </View>
      
    //   <View style={DivisasStyle.screen_body}> </View>
    // </View>
    <View style={DivisasStyle.screen}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.primary} />}
        onPress={openDrawer}
        styleButton={btnDrawerStyle.btn}
      />
      <View style={DivisasStyle.screen_header}>
        <RD width={30} height={30}/>
      </View>
    </View>
  );
};

export default Divisas;
