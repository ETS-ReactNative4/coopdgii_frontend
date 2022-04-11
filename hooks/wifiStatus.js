import NetInfo from "@react-native-community/netinfo";

export const wifi_Status = () => {
  return NetInfo.fetch().then((state) => {
    return state.isConnected;
  });
};
