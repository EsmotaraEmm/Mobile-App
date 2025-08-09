import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    OutfitRegular: require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
    OutfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
