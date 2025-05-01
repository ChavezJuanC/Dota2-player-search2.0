import { Tabs } from "expo-router";
import { Image, View, Text, ImageSourcePropType } from "react-native";
import { icons } from "@/constants/icons";

interface TabIconInterface {
    label: string;
    icon: ImageSourcePropType;
    focused: boolean;
}

const TabIcon = ({ label, icon, focused }: TabIconInterface) => (
    <View className="flex flex-col min-w-24 max-w-32 justify-center items-center pt-8">
        <Image
            source={icon}
            className="size-8"
            style={focused ? { tintColor: "#346877" } : { tintColor: "#3AD2DC" }}
        />
        <Text className="text-navTabs">{label}</Text>
    </View>
);

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#1F1927",
                },
                headerShown: false, // Disable headers globally
            }}
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            label="Home"
                            icon={icons.home}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            label="Profile"
                            icon={icons.profile}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="games"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            label="Games"
                            icon={icons.games}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            label="Settings"
                            icon={icons.settings}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

/*
Nav [(Home)(Profile)(Match)(Settings)]
(Home) : Player Search -> Results /  Favorites 
(Profile):
(Match Search): -> Match Results
*/
