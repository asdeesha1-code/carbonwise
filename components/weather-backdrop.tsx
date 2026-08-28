import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useMotionPreference } from "@/hooks/use-motion-preference";

export function WeatherBackdrop({ polluted, night }: { polluted: boolean; night: boolean }) {
  const drift = useRef(new Animated.Value(0)).current;
  const reduceMotion = useMotionPreference();
  useEffect(() => { if (reduceMotion) return; const loop = Animated.loop(Animated.sequence([Animated.timing(drift, { toValue: 1, duration: 18000, useNativeDriver: true }), Animated.timing(drift, { toValue: 0, duration: 18000, useNativeDriver: true })])); loop.start(); return () => loop.stop(); }, [drift, reduceMotion]);
  const translate = drift.interpolate({ inputRange: [0, 1], outputRange: [-26, 30] });
  return <View pointerEvents="none" style={StyleSheet.absoluteFill}><View style={[styles.sky, { backgroundColor: night ? "rgba(18,52,73,0.14)" : polluted ? "rgba(118,128,139,0.22)" : "rgba(120,202,238,0.16)" }]} /><Animated.View style={[styles.cloud, styles.cloudOne, { transform: [{ translateX: reduceMotion ? 0 : translate }], opacity: polluted ? 0.38 : 0.86 }]} /><Animated.View style={[styles.cloud, styles.cloudTwo, { transform: [{ translateX: reduceMotion ? 0 : translate }], opacity: polluted ? 0.22 : 0.65 }]} />{polluted && <View style={styles.haze} />}</View>;
}
const styles = StyleSheet.create({ sky: { ...StyleSheet.absoluteFillObject }, cloud: { position: "absolute", height: 22, width: 94, borderRadius: 20, backgroundColor: "#FFFFFF" }, cloudOne: { top: 96, right: -16 }, cloudTwo: { top: 158, left: -28, width: 124, height: 28 }, haze: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(111,120,128,0.08)" } });
