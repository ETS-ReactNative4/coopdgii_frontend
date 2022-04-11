import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { Colors,Texts_var } from "../styles/styled";

const Card_modal = ({ closeModal, children, title }) => {
  return (
    <TouchableOpacity style={style.Container} onPress={closeModal}>
      <View
        style={style.ModalContainer}
        onStartShouldSetResponder={(e) => true}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <View style={style.ModalHeader}>
          <Text style={style.title}>{title}</Text>
        </View>
        <View>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: "rgba(68, 68, 68,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalContainer: {
    backgroundColor: Colors.bg_color,
    flex: 0.5,
    borderRadius: 25,
    alignSelf: "stretch",
    marginHorizontal: 30,
  },
  ModalHeader: {
    padding: 5,
  },
  ModalClose: {
    backgroundColor: Colors.close,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: Colors.primary,
    fontSize: Texts_var.iconText,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default Card_modal;
