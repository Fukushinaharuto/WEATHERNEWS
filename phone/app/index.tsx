import { Text, View } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  return (
    <LinearGradient
      colors={["#45556C", "#314158"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View></View>
    </LinearGradient>
  );
}
