import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Home Screen</Text>
      <Link href="/home" className="bg-green-500 px-8 py-4 rounded-xl">
        <Text className="text-white font-bold text-lg">設定ページへ</Text>
      </Link>
    </SafeAreaView>
  );
}
