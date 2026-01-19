import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Notifications from 'expo-notifications';
export default function Index() {
 

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "天気アラート！",
        body: "豪雨が接近中です！外出を控えてください。",
        data: { type: 'weather_alert' },
        sound: true,
      },
      trigger: null
      // trigger: {
      //   type: 'timeInterval',   
      //   seconds: 1,
      //   repeats: false,
      // } as Notifications.TimeIntervalTriggerInput,
    });
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-blue-50 to-indigo-100 justify-center items-center p-8 bg-red-200">
      <Text className="text-4xl font-bold text-gray-900 mb-12">天気アプリ</Text>
      
      <TouchableOpacity 
        className="bg-red-500 px-12 py-6 rounded-3xl shadow-2xl mb-6"
        onPress={sendNotification}
      >
        <Text className="text-white text-2xl font-bold">通知テスト</Text>
      </TouchableOpacity>
    </View>
  );
}

