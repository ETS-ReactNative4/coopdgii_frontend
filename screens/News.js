import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import {
  NativeBaseProvider,
  FlatList,
  Divider,
  Image,
  Spinner,
} from "native-base";
import moment from "moment";
import { styles } from "../styles/home_page";
import useGet from "../hooks/useGet";
import { Colors } from "../styles/styled";

export default function News() {
  const { data, loading, error } = useGet(
    "https://coopdgii.com/coopvirtual/App/noticias"
  );

  if (loading)
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size={"large"} color={Colors.third} />
      </View>
    );

  return (
    <NativeBaseProvider>
      <View
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          marginTop: StatusBar.currentHeight,
        }}
      >
        {data?.data.length > 1 ? (
          <FlatList
            data={data?.data}
            renderItem={({ item }) => (
              <View>
                <View style={styles.newsContainer}>
                  <Image
                    width={550}
                    height={250}
                    resizeMode={"cover"}
                    source={{
                      uri: item.imagen,
                    }}
                    alt="Alternate Text"
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.date).format("LLL")}
                  </Text>
                  <Text style={styles.newsDescription}>{item.content}</Text>
                </View>
                <Divider my={2} bg="#e0e0e0" />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
}
