// components/SafeScreen.tsx
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/lib/colors";

type Props = {
  children: ReactNode;
  changeBackgroundColor: "white" | "darkBlue";
};

export default function SafeScreen({
  children,
  changeBackgroundColor = "white",
}: Props) {
  const insets = useSafeAreaInsets();

  switch (changeBackgroundColor) {
    case "darkBlue":
      return (
        <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: Math.max(insets.left, 20),
          paddingRight: Math.max(insets.right, 20),
        }}
      >
        {children}
      </LinearGradient>
    )
    case "white":
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.secondary,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: Math.max(insets.left, 20),
            paddingRight: Math.max(insets.right, 20),
          }}
        >
          {children}
        </View>
      );
  } 
}
