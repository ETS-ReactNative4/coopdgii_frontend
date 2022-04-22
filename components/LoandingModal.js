import React from "react";
import { Modal, StyleSheet, ActivityIndicator, View } from "react-native";
import { Colors } from "../styles/styled";

const LoandingModal = ({ isLoadingModalOpen }) => {
  return (
    <Modal visible={isLoadingModalOpen} transparent={true}>
      <View style={modal.container_modal}>
        <View style={modal.spiner_container}>
          <ActivityIndicator size={"large"} color={Colors.third} />
        </View>
      </View>
    </Modal>
  );
};

const modal = StyleSheet.create({
  container_modal: {
    backgroundColor: Colors.bg_container_modal,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spiner_container: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default LoandingModal;
