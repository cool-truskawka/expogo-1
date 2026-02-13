import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#791515',
                tabBarInactiveTintColor: '#791515',
                tabBarShowLabel: false,
                headerTransparent: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#161414',
                    borderTopColor: '#791515',
                    borderTopWidth: 2,
                }             
            }}>
            <Tabs.Screen name="index" options={{ 
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size + 3} color={color} />
                )
            }} />
            <Tabs.Screen name="search" options={{ 
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'search-sharp' : 'search-outline'} size={size + 3} color={color} />
                ) }} />
            <Tabs.Screen name="reels" options={{ 
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'play' : 'play-outline'} size={size + 3} color={color} />
                ) }} />
            <Tabs.Screen name="messages" options={{ 
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'send' : 'send-outline'} size={size + 3} color={color} />
                ) }} />
            <Tabs.Screen name="profile"  options={{ 
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={size + 3} color={color} />
                ) }} />
        </Tabs>
    );
}