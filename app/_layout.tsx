import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./styling/globals.css";

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
