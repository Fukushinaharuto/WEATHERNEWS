import { Text, View  } from "react-native";
import { FormCard }  from "@/components/form-card";
import SafeScreen from "@/components/safe-screen";
import { LogoIcon } from "@/components/icons";

export default function Index() {
  
  return (
    <SafeScreen changeBackgroundColor="darkBlue">
      <View className="flex-1 justify-center items-center">
        <LogoIcon size={80} color="white" />
        <Text className="text-white text-3xl mt-6 font-bold">行動で見る天気</Text>
        <Text className="text-white/80 my-6">地域のリアルな情報を共有しよう</Text>
        <FormCard />
      </View>
    </SafeScreen>
  );
}
