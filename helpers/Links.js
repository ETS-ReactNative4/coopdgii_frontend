import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../styles/styled";
const Links = [
  {
    idx: 1,
    icon: <MaterialIcons name="phone-iphone" size={24} color={Colors.third} />,
    title: "Centro de contacto",
    sudtitle: "(809)-243-0000",
  },
  {
    idx: 2,
    icon: <FontAwesome5 name="globe" size={24} color={Colors.third} />,
    title: "Llamas desde el exterior",
    sudtitle: "1-000-000-0000",
  },
  {
    idx: 3,
    icon: <MaterialIcons name="email" size={24} color={Colors.third} />,
    title: "Correo electronico",
    sudtitle: "cliente@gmail.com",
  },
];

export { Links };
