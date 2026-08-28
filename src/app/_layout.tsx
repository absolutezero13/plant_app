import { hydrateStore, store, type RootState } from "@/store/store";
import { Rubik_400Regular } from "@expo-google-fonts/rubik/400Regular";
import { Rubik_500Medium } from "@expo-google-fonts/rubik/500Medium";
import { Rubik_600SemiBold } from "@expo-google-fonts/rubik/600SemiBold";
import { Rubik_700Bold } from "@expo-google-fonts/rubik/700Bold";
import { Rubik_800ExtraBold } from "@expo-google-fonts/rubik/800ExtraBold";
import { useFonts } from "expo-font";
import { DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="index" />
          <Stack.Screen
            name="onboarding"
            options={{
              fullScreenGestureEnabled: false,
            }}
          />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
        <Stack.Screen name="paywall" />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [isUserStateReady, setIsUserStateReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
  });

  useEffect(() => {
    hydrateStore().finally(() => setIsUserStateReady(true));
  }, []);

  useEffect(() => {
    if ((fontsLoaded || fontError) && isUserStateReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, isUserStateReady]);

  if ((!fontsLoaded && !fontError) || !isUserStateReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
