import SafeScreen from "@/components/safe-screen";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

export default function Index() {
  return (
    <SafeScreen changeBackgroundColor="white">
      <View>
        <Text>今の状況を共有</Text>
        <Text>今の行動・判断を共有してください</Text>
      </View>
    </SafeScreen>
  );
}
