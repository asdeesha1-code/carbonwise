import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, StyleSheet, View } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

type TabName = "house.fill" | "person.2.fill" | "slider.horizontal.3" | "bolt.fill" | "ellipsis.circle.fill";

function TabIcon({ name, color, focused }: { name: TabName; color: string; focused: boolean }) {
  return <View style={[styles.iconShell, focused && styles.iconShellActive]}><IconSymbol size={23} name={name} color={color} /></View>;
}

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 12 : Math.max(insets.bottom, 8);
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted, tabBarButton: HapticTab, tabBarStyle: { paddingTop: 8, paddingBottom: bottomPadding, height: 56 + bottomPadding, backgroundColor: colors.background, borderTopColor: colors.border, borderTopWidth: 0.5 }, tabBarLabelStyle: { fontSize: 10, fontWeight: "700" } }}>
    <Tabs.Screen name="index" options={{ title: "Today", tabBarIcon: ({ color, focused }) => <TabIcon name="house.fill" color={color} focused={focused} /> }} />
    <Tabs.Screen name="twin" options={{ title: "Twin", tabBarIcon: ({ color, focused }) => <TabIcon name="person.2.fill" color={color} focused={focused} /> }} />
    <Tabs.Screen name="time-machine" options={{ title: "Time Machine", tabBarIcon: ({ color, focused }) => <TabIcon name="slider.horizontal.3" color={color} focused={focused} /> }} />
    <Tabs.Screen name="actions" options={{ title: "Actions", tabBarIcon: ({ color, focused }) => <TabIcon name="bolt.fill" color={color} focused={focused} /> }} />
    <Tabs.Screen name="more" options={{ title: "More", tabBarIcon: ({ color, focused }) => <TabIcon name="ellipsis.circle.fill" color={color} focused={focused} /> }} />
  </Tabs>;
}

const styles = StyleSheet.create({ iconShell: { width: 34, height: 28, borderRadius: 14, alignItems: "center", justifyContent: "center" }, iconShellActive: { backgroundColor: "#F4E9E3", transform: [{ scale: 1.08 }] } });
