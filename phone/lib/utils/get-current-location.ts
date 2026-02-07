import * as Location from "expo-location";
import Toast from "react-native-toast-message";

export async function getCurrentLocation() {
  // 位置情報の権限リクエスト
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Toast.show({
      type: "error",
      text1: "位置情報の利用が許可されていません",
    });
    throw new Error("Location permission denied");
  }

  // 現在地を取得
  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  return { latitude, longitude };
}
