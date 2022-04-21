import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  ImageBackground,
  FlatList,
} from "react-native";
import useGet from "../hooks/useGet";
import { Colors } from "../styles/styled";
import useModal from "../hooks/useModal";
import News_pages from "../styles/News_page";
import newsBackground from "../assets/newsBackground.jpg";
import New_card from "../components/New_card";

export default function News({ navigation }) {
  const { data, loading, error } = useGet(
    "https://coopdgii.com/coopvirtual/App/noticias"
  );
  const [isLoadingModalOpen, openLoadingModal, closeLoadingModal] = useModal(
    !loading
  );

  useEffect(() => {
    if (loading) openLoadingModal();
    else {
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
              <Text style={News_pages.header_title}>COOPDGII NEWS</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={News_pages.body}>
          {!loading && (
            <FlatList
              data={data?.data}
              keyExtractor={(item, index) => `${index}-${item.id}`}
              renderItem={({ item }) => (
                <New_card
                  img={item.imagen}
                  title={item.title}
                  onNextScreen={() => navigation.navigate("New", { item })}
                />
              )}
            />
          )}
        </View>
      </View>

      <Modal visible={isLoadingModalOpen} transparent={true}>
        <View style={News_pages.container_modal}>
          <View style={News_pages.spiner_container}>
            <ActivityIndicator size={"large"} color={Colors.third} />
          </View>
        </View>
      </Modal>
    </>
  );
}
