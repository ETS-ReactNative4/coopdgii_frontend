import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Women from "../assets/images/woman-writing.jpg";
import { Colors } from "../styles/styled";
import { Texts_var } from "../styles/styled";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useToken from "../hooks/useToken";
import useModal from "../hooks/useModal";
import Card_modal from "../components/Card_modal";
import useStore from "../hooks/useStore";

const token = {
  token: "TESTACCOUNTTOKEN434234345424323JAJAJA",
};
export default function Cuentas({ navigation }) {
  const [name, setName] = useState();
  const { datauser, loading } = useToken(
    "https://coopdgii.com/coopvirtual/App/resumen",
    token
  );
  const { nombre } = useStore();
  const [isNumberModalOpen, openNumberModal, closeNumberModal] = useModal();

  const openSideMenu = () => {
    navigation.toggleDrawer();
  };

  const goSolicitud = () => {
    navigation.navigate("Solicitudes");
  };

  const goContact = () => {
    navigation.navigate("Ayuda");
  };

  const [value, setValue] = useState("Mostrar todos mis productos");
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 230 }}>
        <View style={{ width: "100%", height: "100%", position: "relative" }}>
          <ImageBackground
            source={Women}
            resizeMode="cover"
            style={[styles.back_image, { opacity: 0.3 }]}
          />
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            {/*Menu and bell part*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Pressable onPress={openSideMenu}>
                <Ionicons name="menu" size={30} color={Colors.third} />
              </Pressable>
              <Pressable>
                <Feather name="bell" size={30} color={Colors.third} />
              </Pressable>
            </View>
            {/*Greetings View*/}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "2%" }}>
                  <Text
                    style={[styles.text, { color: Texts_var.ratesDark_blue }]}
                  >
                    Hola
                  </Text>
                </View>
                <View>
                  <Text style={[styles.text, { color: Colors.third }]}>
                    {nombre}
                  </Text>
                </View>
              </View>
              <View>
                <Text>Ultima Conexion: {moment().format("LLLL")}</Text>
              </View>
              <View
                style={{
                  marginTop: "4%",
                  backgroundColor: Colors.bg_btnColor,
                  borderRadius: 10,
                }}
              >
                <Picker
                  style={{ height: "10%", width: 300 }}
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                >
                  <Picker.Item
                    label="Mostrar todos mis productos"
                    value="Mostrar todos mis productos"
                  />
                  <Picker.Item label="Cuentas" value="Cuentas" />
                  <Picker.Item label="Inversion" value="Inversion" />
                  <Picker.Item label="Prestamos" value="Prestamos" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
        {/*Products View*/}
        <View>
          {(() => {
            switch (value) {
              case "Mostrar todos mis productos":
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "2%",
                      }}
                    >
                      <View style={{ marginRight: "2%" }}>
                        <FontAwesome5
                          name="piggy-bank"
                          size={24}
                          color={Colors.third}
                        />
                      </View>
                      <View>
                        <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                          Cuentas
                        </Text>
                      </View>
                    </View>
                    {/*Cuentas View*/}
                    {datauser &&
                      datauser.data.cuentas.map(function (index) {
                        return (
                          <View
                            key={index.idcuenta}
                            style={styles.container_details}
                          >
                            <View style={styles.cuentas_view}>
                              <View>
                                <Text style={styles.cuentas_text}>
                                  {index.tipo}
                                </Text>
                                <Text>{index.idcuenta}</Text>
                              </View>
                              <View>
                                <Text
                                  style={[
                                    styles.cuentas_text,
                                    { fontSize: 14 },
                                  ]}
                                >
                                  Balance Disponible
                                </Text>
                                <Text>{index.balance_disponible}</Text>
                              </View>
                            </View>
                          </View>
                        );
                      })}
                    <View>
                      {/* Inversiones View*/}
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: "2%",
                          marginLeft: "2%",
                        }}
                      >
                        <View style={{ marginRight: "2%" }}>
                          <FontAwesome5
                            name="coins"
                            size={24}
                            color={Colors.third}
                          />
                        </View>
                        <View>
                          <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                            Inversion
                          </Text>
                        </View>
                      </View>

                      <View style={styles.container_details}>
                        <View style={styles.cuentas_view}>
                          <View>
                            <Text
                              style={[styles.cuentas_text, { fontSize: 14 }]}
                            >
                              Certificado Financiero
                            </Text>
                            <Text>100511544542</Text>
                          </View>
                          <View>
                            <Text
                              style={[styles.cuentas_text, { fontSize: 14 }]}
                            >
                              Balance Disponible
                            </Text>
                            <Text>512105450154</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "2%",
                        marginLeft: "2%",
                      }}
                    >
                      <View style={{ marginRight: "2%" }}>
                        <FontAwesome5
                          name="money-bill"
                          size={24}
                          color={Colors.third}
                        />
                      </View>
                      <View>
                        <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                          Prestamos
                        </Text>
                      </View>
                    </View>
                    {/*Prestamos View*/}
                    {datauser &&
                      datauser.data.prestamos.map(function (index) {
                        return (
                          <View
                            key={index.idprestamo}
                            style={styles.container_details}
                          >
                            <View style={styles.cuentas_view}>
                              <View>
                                <Text style={styles.cuentas_text}>
                                  {index.descripcion}
                                </Text>
                                <Text>{index.monto_prestamo}</Text>
                              </View>
                              <View>
                                <Text
                                  style={[
                                    styles.cuentas_text,
                                    { fontSize: 14 },
                                  ]}
                                >
                                  Balance Disponible
                                </Text>
                                <Text>{index.balance_prestamo}</Text>
                              </View>
                            </View>
                          </View>
                        );
                      })}
                  </View>
                );
              case "Cuentas":
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "2%",
                      }}
                    >
                      <View style={{ marginRight: "2%" }}>
                        <FontAwesome5
                          name="piggy-bank"
                          size={24}
                          color={Colors.third}
                        />
                      </View>
                      <View>
                        <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                          Cuentas
                        </Text>
                      </View>
                    </View>
                    {datauser &&
                      datauser.data.cuentas.map(function (index) {
                        return (
                          <View
                            key={index.idcuenta}
                            style={styles.container_details}
                          >
                            <View style={styles.cuentas_view}>
                              <View>
                                <Text style={styles.cuentas_text}>
                                  {index.tipo}
                                </Text>
                                <Text>{index.idcuenta}</Text>
                              </View>
                              <View>
                                <Text
                                  style={[
                                    styles.cuentas_text,
                                    { fontSize: 14 },
                                  ]}
                                >
                                  Balance Disponible
                                </Text>
                                <Text>{index.balance_disponible}</Text>
                              </View>
                            </View>
                          </View>
                        );
                      })}
                  </View>
                );
              case "Inversion":
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "2%",
                        marginLeft: "2%",
                      }}
                    >
                      <View style={{ marginRight: "2%" }}>
                        <FontAwesome5
                          name="coins"
                          size={24}
                          color={Colors.third}
                        />
                      </View>
                      <View>
                        <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                          Inversion
                        </Text>
                      </View>
                    </View>

                    <View style={styles.container_details}>
                      <View style={styles.cuentas_view}>
                        <View>
                          <Text style={[styles.cuentas_text, { fontSize: 14 }]}>
                            Certificado Financiero
                          </Text>
                          <Text>100511544542</Text>
                        </View>
                        <View>
                          <Text style={[styles.cuentas_text, { fontSize: 14 }]}>
                            Balance Disponible
                          </Text>
                          <Text>512105450154</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              case "Prestamos":
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "2%",
                        marginLeft: "2%",
                      }}
                    >
                      <View style={{ marginRight: "2%" }}>
                        <FontAwesome5
                          name="money-bill"
                          size={24}
                          color={Colors.third}
                        />
                      </View>
                      <View>
                        <Text style={[styles.cuentas_text, { fontSize: 15 }]}>
                          Prestamos
                        </Text>
                      </View>
                    </View>
                    {datauser &&
                      datauser.data.prestamos.map(function (index) {
                        return (
                          <View
                            key={index.idprestamo}
                            style={styles.container_details}
                          >
                            <View style={styles.cuentas_view}>
                              <View>
                                <Text style={styles.cuentas_text}>
                                  {index.descripcion}
                                </Text>
                                <Text>{index.monto_prestamo}</Text>
                              </View>
                              <View>
                                <Text
                                  style={[
                                    styles.cuentas_text,
                                    { fontSize: 14 },
                                  ]}
                                >
                                  Balance Disponible
                                </Text>
                                <Text>{index.balance_prestamo}</Text>
                              </View>
                            </View>
                          </View>
                        );
                      })}
                  </View>
                );
              default:
                return null;
            }
          })()}
        </View>
      </View>
      {/*Footer View*/}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingVertical: "4%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable
            style={[
              styles.footer_views,
              { marginRight: "25%", marginLeft: "5%" },
            ]}
            onPress={goSolicitud}
          >
            <FontAwesome name="paper-plane-o" size={24} color={Colors.third} />
            <Text>Solicitud</Text>
          </Pressable>
          <Pressable
            style={[styles.footer_views, { marginRight: "22%" }]}
            onPress={goContact}
          >
            <Foundation name="telephone" size={24} color={Colors.third} />
            <Text>Contacto</Text>
          </Pressable>
          <Pressable style={[styles.footer_views]} onPress={openNumberModal}>
            <FontAwesome name="whatsapp" size={24} color={Colors.third} />
            <Text>Whatsapp</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={isNumberModalOpen} transparent={true}>
        <Card_modal
          closeModal={closeNumberModal}
          styleBody={styles.containerModal}
          title="Call us"
        >
          <View>
            <Text style={styles.text}>Contactanos con los numeros</Text>
            <Text style={styles.text}>829-649-3938</Text>
            <Text style={styles.text}>829-828-1545</Text>
          </View>
        </Card_modal>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  back_image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    height: "%",
    position: "relative",
  },
  footer_views: {
    alignItems: "center",
    justifyContent: "center",
  },
  cuentas_view: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_details: {
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
    borderBottomWidth: 1,
  },
  cuentas_text: {
    color: Colors.third,
    fontWeight: "bold",
    fontSize: 13,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.third,
    position: "relative",
  },
});
