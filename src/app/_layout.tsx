import { Rubik_400Regular } from "@expo-google-fonts/rubik/400Regular";
import { Rubik_500Medium } from "@expo-google-fonts/rubik/500Medium";
import { Rubik_600SemiBold } from "@expo-google-fonts/rubik/600SemiBold";
import { Rubik_700Bold } from "@expo-google-fonts/rubik/700Bold";
import { Rubik_800ExtraBold } from "@expo-google-fonts/rubik/800ExtraBold";
import { useFonts } from "expo-font";
import { DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="onboarding"
          options={{
            fullScreenGestureEnabled: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
