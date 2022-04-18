import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { Colors } from "../styles/styled";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import { Entypo } from "@expo/vector-icons";
import Btn_icon from "../components/Btn_icon";
import { style as DivisasStyle } from "../styles/Divisas_pages";
import RD from "../assets/images/RD.jpg";
import usa from "../assets/images/usa.png";
import eu from "../assets/images/eu.jpg";
import japon from "../assets/images/japon.png";
import mex from "../assets/images/mex.png";
import MoneyConvert from "../helpers/MoneyConvert";

const Divisas = ({ navigation }) => {
  const [coins, setCoins] = useState();
  const [coin, setCoin] = useState(coinsList[0]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleChange = (attr, value) => {
    setCoin({ ...coin, [attr]: parseInt(value || 0) });
  };

  const filterMoney = () => {
    const currentCoinList = coinsList.filter(
      (item) => item.countryName !== coin.countryName
    );

    return currentCoinList;
  };

  const updateMoneys = (currectCoinList, monto, convert) => {
    return currectCoinList.map((item) => {
      let newMonto = {
        ...item,
        ["monto"]: MoneyConvert(monto, convert, item.simbol),
      };
      return newMonto;
    });
  };

  useEffect(() => {
    let currentCoinList = filterMoney();
    const { monto, convert } = coin;
    if (monto) {
      let newMoneys = updateMoneys(currentCoinList, monto, convert);
      setCoins(newMoneys);
    } else {
      setCoins(currentCoinList);
    }
  }, [coin]);

  return (
    <View style={DivisasStyle.screen}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={"black"} />}
        onPress={openDrawer}
        styleButton={btnDrawerStyle.btn}
      />
      <View style={DivisasStyle.screen_header}>
        <View style={[DivisasStyle.header, DivisasStyle.header_money]}>
          <Image source={coin.flag} style={DivisasStyle.img} />
          <View>
            <Text style={DivisasStyle.money_text}>{coin.countryName}</Text>
            <Text style={DivisasStyle.money_text}>{coin.coinName}</Text>
          </View>
        </View>

        <View style={[DivisasStyle.header]}>
          <TextInput
            value={coin.monto ? coin.monto.toString() : ""}
            placeholderTextColor={Colors.white}
            placeholder="$0"
            onChangeText={(text) => handleChange("monto", text)}
            style={DivisasStyle.money_big_text}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={DivisasStyle.screen_body}>
        <View style={DivisasStyle.body_list}>
          <FlatList
            data={coins}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => setCoin(item)}
                style={[
                  DivisasStyle.body_item,
                  {
                    backgroundColor: index % 2 === 0 ? "#EFFDEF" : "#F8FFF8",
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item?.flag}
                    style={[DivisasStyle?.img, { alignSelf: "center" }]}
                  ></Image>
                  <View>
                    <Text style={[DivisasStyle.money_text, { color: "black" }]}>
                      {item?.countryName}
                    </Text>
                    <Text style={[DivisasStyle.money_text, { color: "black" }]}>
                      {item?.coinName}
                    </Text>
                  </View>
                </View>
                <Text style={DivisasStyle.money_big_total}>
                  {!item?.monto ? "0" : item?.monto}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item, idex) => `${item?.coinName}_${idex}`}
          />
        </View>
      </View>
    </View>
  );
};

const coinsList = [
  {
    flag: RD,
    countryName: "RD",
    coinName: "rd peso",
    monto: "",
    simbol: "rd",
    convert: {
      usa: 0.018,
      eu: 0.017,
      mex: 0.36,
      japon: 0.44,
    },
  },
  {
    flag: usa,
    countryName: "USA",
    coinName: "US Dolar",
    monto: "",
    simbol: "usa",
    convert: {
      rd: 55.05,
      eu: 0.99,
      mex: 0.36,
      japon: 2.28,
    },
  },
  {
    flag: mex,
    countryName: "MX",
    coinName: "MX peso",
    monto: "",
    simbol: "mex",
    convert: {
      rd: 2.76,
      usa: 0.05,
      eu: 0.046,
      japon: 6.34,
    },
  },
  {
    flag: eu,
    countryName: "EU",
    coinName: "EU euro",
    monto: "",
    simbol: "eu",
    convert: {
      rd: 59.52,
      usa: 1.08,
      mex: 21.6,
      japon: 136.71,
    },
  },
  {
    flag: japon,
    countryName: "JP",
    coinName: "JP yen",
    monto: "",
    simbol: "japon",
    convert: {
      rd: 0.44,
      usa: 0.0079,
      mex: 0.16,
      eu: 0.0073,
    },
  },
];

export default Divisas;
