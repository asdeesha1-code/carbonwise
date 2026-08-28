import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, StyleSheet, View } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

type TabName = "house.fill" | "clock.arrow.circlepath" | "gamecontroller.fill" | "globe.americas.fill" | "person.crop.circle.fill";
function TabIcon({ name, color, focused }: { name: TabName; color: string; focused: boolean }) { return <View style={[styles.iconShell, focused && styles.iconShellActive]}><IconSymbol size={22} name={name} color={color} /></View>; }
export default function TabLayout() { const colors = useColors(); const insets = useSafeAreaInsets(); const bottomPadding = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 7); return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted, tabBarButton: HapticTab, tabBarStyle: { paddingTop: 7, paddingBottom: bottomPadding, height: 55 + bottomPadding, backgroundColor: colors.background, borderTopColor: colors.border, borderTopWidth: 0.5 }, tabBarLabelStyle: { fontSize: 10, fontWeight: "800" } }}>
  <Tabs.Screen name="index" options={{ title: "Today", tabBarIcon: ({ color, focused }) => <TabIcon name="house.fill" color={color} focused={focused} /> }} />
  <Tabs.Screen name="history" options={{ title: "History", tabBarIcon: ({ color, focused }) => <TabIcon name="clock.arrow.circlepath" color={color} focused={focused} /> }} />
  <Tabs.Screen name="learn" options={{ title: "Play", tabBarIcon: ({ color, focused }) => <TabIcon name="gamecontroller.fill" color={color} focused={focused} /> }} />
  <Tabs.Screen name="weather" options={{ title: "Weather", tabBarIcon: ({ color, focused }) => <TabIcon name="globe.americas.fill" color={color} focused={focused} /> }} />
  <Tabs.Screen name="account" options={{ title: "Me", tabBarIcon: ({ color, focused }) => <TabIcon name="person.crop.circle.fill" color={color} focused={focused} /> }} />
  <Tabs.Screen name="twin" options={{ href: null }} />
  <Tabs.Screen name="time-machine" options={{ href: null }} />
  <Tabs.Screen name="actions" options={{ href: null }} />
  <Tabs.Screen name="more" options={{ href: null }} />
</Tabs>; }
const styles = StyleSheet.create({ iconShell: { width: 34, height: 27, borderRadius: 14, alignItems: "center", justifyContent: "center" }, iconShellActive: { backgroundColor: "#EAF7FF", transform: [{ scale: 1.08 }] } });
