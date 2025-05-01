import { TextInput, View, TouchableHighlight, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

//api

const index = () => {
    const [searchBarText, setSearchBarText] = useState<string>("");
    const router = useRouter();

    async function handleSearch(): Promise<void> {
        if (searchBarText.trim()) {
            // TESTING ENDPOINTS

            router.push(`/playersearch/${searchBarText.trim()}`);
        } else {
            console.log("Please enter a valid player ID");
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView className="bg-bgMain">
                <View className="h-full bg-bgMain">
                    <View className="flex flex-row justify-center mx-1 mt-4">
                        <TextInput
                            onChangeText={setSearchBarText}
                            value={searchBarText}
                            className="border-2 border-textMain rounded-lg w-9/12 bg-bgMain text-slate-50 min-h-12 max-h-16 px-4 font-semibold mr-2"
                        />
                        <TouchableHighlight
                            onPress={handleSearch}
                            accessibilityLabel="Learn more about this purple button"
                            className="bg-bgBtn flex items-center justify-center rounded-lg w-2/12 ml-2"
                        >
                            <Text className="text-btnText font-semibold">
                                Search
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default index;

/*
-add a temp button to navigate to the next route..
-create playerscreen with fixed data..
-style nicely
-implement interface?? or just feed data obj??
-pass props
-test with dynamic data
*/
