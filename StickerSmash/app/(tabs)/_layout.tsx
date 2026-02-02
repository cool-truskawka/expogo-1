import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#11c93f',
                headerStyle: {
                    backgroundColor: '#2c0b16',
                },
                headerShadowVisible: false,
                headerTintColor: '#36dd15',
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: '#2c0b16',
                },

            }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="about" options={{
                title: 'About', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={24} color={color} />
                )
            }} />
        </Tabs>
    );
}