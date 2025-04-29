import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                }}
            />
            <Tabs.Screen
                name="games"
                options={{
                    title: "Games",
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


