import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Btn_icon from "../components/Btn_icon";
import { wifi_Status } from "../hooks/wifiStatus";
import Loading from "./loadingPage";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
import { styles as locationStyle } from "../styles/location_page";
import btnDrawerStyle from "../styles/btnDrawerStyle";
export default function Location({ navigation }) {
  const [connectionStatus, setConnectionStatus] = useState(false);
  wifi_Status().then((res) => {
    setConnectionStatus(res);
  });

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const markers = [
    {
      title: "Santo Domingo",
      coordinate: { latitude: 18.47186, longitude: -69.89232 },
    },
    {
      title: "27 de febrero",
      coordinate: {
        latitude: 18.464437524100664,
        longitude: -69.9332789034591,
      },
    },
    {
      title: "Torre XXI",
      coordinate: {
        latitude: 18.465587466992208,
        longitude: -69.94285975416142,
      },
    },
    {
      title: "Torre XXI",
      coordinate: {
        latitude: 18.465587466992208,
        longitude: -69.94285975416142,
      },
    },
    {
      title: "c:/ Francisco ramirez",
      coordinate: {
        latitude: 18.461168612861055,
        longitude: -69.94323247184235,
      },
    },
  ];
  return connectionStatus ? (
    <View style={locationStyle.container}>
      <Btn_icon
        icon={<Entypo name="menu" size={24} color={Colors.primary} />}
        onPress={openDrawer}
        styleButton={btnDrawerStyle.btn}
      />
      <MapView
        style={locationStyle.map}
        initialRegion={{
          latitude: 18.47186,
          longitude: -69.89232,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, key) => (
          <Marker
            key={key}
            title={marker.title}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>
    </View>
  ) : (
    <Loading />
  );
}
