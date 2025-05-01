import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const playerSearchResults = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>results for player: {id} </Text>
        </View>
    );
};

export default playerSearchResults;

