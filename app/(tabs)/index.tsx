import { TextInput, View, TouchableHighlight, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const index = () => {
    const [searchBarText, setSearchBarText] = useState<string>("");

    function onPressSearchButton(): void {
        console.log(searchBarText);
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
                            onPress={onPressSearchButton}
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
BgMain #1F1927
BgBtn #3AD2DC
TextMain #97939C
TextSecond #3AD2DC
NavTabs #C1C0BF
BtnText #346877
*/
