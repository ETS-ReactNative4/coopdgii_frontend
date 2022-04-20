import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Modal,
  ImageBackground,
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
import useModal from "../hooks/useModal";
import Card_modal from "../components/Card_modal";
import News_pages from "../styles/News_page";
import newsBackground from "../assets/newsBackground.jpg";

export default function News() {
  const { data, loading, error } = useGet(
    "https://coopdgii.com/coopvirtual/App/noticias"
  );
  const [isLoadingModalOpen, openLoadingModal, closeLoadingModal] = useModal(
    !loading
  );

  useEffect(() => {
    if (loading) openLoadingModal();
    else {
      console.log(data);
      closeLoadingModal();
    }
  }, [loading]);

  return (
    <>
      <View style={News_pages.page}>
        <View style={News_pages.header}>
          <ImageBackground
            source={newsBackground}
            style={News_pages.header_background}
          >
            <View>
              <Text>COOPDGII NEWS</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={News_pages.body}></View>
      </View>

      <Modal visible={isLoadingModalOpen} transparent={true}>
        <View style={News_pages.container_modal}>
          <View style={News_pages.spiner_container}>
            <ActivityIndicator size={"large"} color={Colors.third} />
          </View>
        </View>
      </Modal>
    </>
    // <NativeBaseProvider>
    //   <View
    //     style={{
    //       height: Dimensions.get("window").height,
    //       width: Dimensions.get("window").width,
    //       marginTop: StatusBar.currentHeight,
    //     }}
    //   >
    //     {data?.data.length > 1 ? (
    //       <FlatList
    //         data={data?.data}
    //         renderItem={({ item }) => (
    //           <View>
    //             <View style={styles.newsContainer}>
    //               <Image
    //                 width={550}
    //                 height={250}
    //                 resizeMode={"cover"}
    //                 source={{
    //                   uri: item.imagen,
    //                 }}
    //                 alt="Alternate Text"
    //               />
    //               <Text style={styles.title}>{item.title}</Text>
    //               <Text style={styles.date}>
    //                 {moment(item.date).format("LLL")}
    //               </Text>
    //               <Text style={styles.newsDescription}>{item.content}</Text>
    //             </View>
    //             <Divider my={2} bg="#e0e0e0" />
    //           </View>
    //         )}
    //         keyExtractor={(item, index) => index.toString()}
    //       />
    //     ) : (
    //       <View style={styles.spinner}>
    //         <Spinner color="danger.400" />
    //       </View>
    //     )}
    //   </View>
    // </NativeBaseProvider>
  );
}
