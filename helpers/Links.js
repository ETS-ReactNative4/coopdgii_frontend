import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Links = [
  {
    idx: 1,
    icon: (
      <MaterialIcons name="phone-iphone" size={24} color={Colors.secondary} />
    ),
    title: "Centro de contacto",
    sudtitle: "(809)-243-0000",
  },
  {
    idx: 2,
    icon: <FontAwesome5 name="globe" size={24} color={Colors.secondary} />,
    title: "Llamas desde el exterior",
    sudtitle: "1-000-000-0000",
  },
  {
    idx: 3,
    icon: <MaterialIcons name="email" size={24} color={Colors.secondary} />,
    title: "Correo electronico",
    sudtitle: "cliente@gmail.com",
  },
];

export { Links };
