import {
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type OptionProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: ColorValue;
};

export function Option({ icon, color, ...rest }: OptionProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
      activeOpacity={0.7}
    >
      <MaterialIcons name={icon} size={24} color="white" />
    </TouchableOpacity>
  );
}
