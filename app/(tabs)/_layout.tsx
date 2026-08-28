import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 12 : Math.max(insets.bottom, 8);
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.muted,
      tabBarButton: HapticTab,
      tabBarStyle: { paddingTop: 8, paddingBottom: bottomPadding, height: 56 + bottomPadding, backgroundColor: colors.background, borderTopColor: colors.border, borderTopWidth: 0.5 },
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
    }}>
      <Tabs.Screen name="index" options={{ title: "Today", tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} /> }} />
      <Tabs.Screen name="twin" options={{ title: "Twin", tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.2.fill" color={color} /> }} />
      <Tabs.Screen name="time-machine" options={{ title: "Time Machine", tabBarIcon: ({ color }) => <IconSymbol size={24} name="slider.horizontal.3" color={color} /> }} />
      <Tabs.Screen name="actions" options={{ title: "Actions", tabBarIcon: ({ color }) => <IconSymbol size={24} name="bolt.fill" color={color} /> }} />
      <Tabs.Screen name="more" options={{ title: "More", tabBarIcon: ({ color }) => <IconSymbol size={24} name="ellipsis.circle.fill" color={color} /> }} />
    </Tabs>
  );
}
