import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
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
      title: "Torre xxi",
      coordinate: {
        latitude: 18.465587466992208,
        longitude: -69.94285975416142,
      },
    },
    {
      title: "Torre xxi",
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
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
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
      <View style={styles.searchContainer}>
        <Text>Buscador</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7,
  },
  searchContainer: {
    position: "absolute",
    width: Dimensions.get("window").width,
    bottom: 0,
    borderTopLeftRadius: 20,
  },
});
