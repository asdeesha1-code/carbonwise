import { useEffect, useMemo, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useCarbon } from "@/lib/carbon-context";
import { sumRange } from "@/lib/carbon";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const C = { sky: "#BFE8FA", cloud: "#FFFFFF", coral: "#E56B50", ink: "#173B4A", mint: "#CDEFE4", haze: "#B9DCEB" };

export function ClimateAtmosphere() {
  const { activities } = useCarbon();
  const { reduceMotion } = useMotionPreference();
  const cloudOne = useRef(new Animated.Value(-40)).current;
  const cloudTwo = useRef(new Animated.Value(80)).current;
  const shimmer = useRef(new Animated.Value(0.16)).current;
  const windOne = useRef(new Animated.Value(-90)).current;
  const windTwo = useRef(new Animated.Value(100)).current;
  const total = sumRange(activities);
  const air = useMemo(() => total.high <= 6 ? { label: "CLEAR AIR", tint: C.mint, opacity: 0.04 } : total.high <= 10 ? { label: "LIGHT HAZE", tint: "#E8B86A", opacity: 0.12 } : { label: "HEAVY HAZE · VISUAL", tint: C.coral, opacity: 0.23 }, [total.high]);

  useEffect(() => {
    if (reduceMotion) return;
    const one = Animated.loop(Animated.sequence([Animated.timing(cloudOne, { toValue: 90, duration: 12000, useNativeDriver: true }), Animated.timing(cloudOne, { toValue: -40, duration: 12000, useNativeDriver: true })]));
    const two = Animated.loop(Animated.sequence([Animated.timing(cloudTwo, { toValue: -70, duration: 16000, useNativeDriver: true }), Animated.timing(cloudTwo, { toValue: 80, duration: 16000, useNativeDriver: true })]));
    const pulse = Animated.loop(Animated.sequence([Animated.timing(shimmer, { toValue: Math.min(0.45, air.opacity + 0.13), duration: 2200, useNativeDriver: true }), Animated.timing(shimmer, { toValue: air.opacity, duration: 2600, useNativeDriver: true })]));
    const windA = Animated.loop(Animated.sequence([Animated.timing(windOne, { toValue: 110, duration: 9000, useNativeDriver: true }), Animated.timing(windOne, { toValue: -90, duration: 9000, useNativeDriver: true })]));
    const windB = Animated.loop(Animated.sequence([Animated.timing(windTwo, { toValue: -110, duration: 11000, useNativeDriver: true }), Animated.timing(windTwo, { toValue: 100, duration: 11000, useNativeDriver: true })]));
    one.start(); two.start(); pulse.start(); windA.start(); windB.start();
    return () => { one.stop(); two.stop(); pulse.stop(); windA.stop(); windB.stop(); };
  }, [air.opacity, cloudOne, cloudTwo, reduceMotion, shimmer, windOne, windTwo]);

  return <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.atmosphere]}>
    <View style={[styles.sky, { backgroundColor: C.sky, opacity: 0.76 }]} />
    <Animated.View style={[styles.windLine, styles.windLineA, { transform: [{ translateX: windOne }] }]} />
    <Animated.View style={[styles.windLine, styles.windLineB, { transform: [{ translateX: windTwo }] }]} />
    <View style={[styles.airWash, { backgroundColor: air.tint, opacity: air.opacity }]} />
    <Animated.View style={[styles.haze, { backgroundColor: air.tint, opacity: reduceMotion ? air.opacity : shimmer }]} />
    <View style={styles.sun}><View style={styles.sunCore} /><View style={[styles.sunRing, { borderColor: air.tint }]} /></View>
    <Animated.View style={[styles.cloud, styles.cloudA, { transform: [{ translateX: cloudOne }] }]}><View style={styles.cloudPuffSmall} /><View style={styles.cloudPuffLarge} /></Animated.View>
    <Animated.View style={[styles.cloud, styles.cloudB, { transform: [{ translateX: cloudTwo }] }]}><View style={styles.cloudPuffLarge} /><View style={styles.cloudPuffSmall} /></Animated.View>

  </View>;
}

const styles = StyleSheet.create({ atmosphere: { zIndex: 0 }, sky: { ...StyleSheet.absoluteFillObject }, airWash: { ...StyleSheet.absoluteFillObject }, haze: { position: "absolute", left: -50, right: -50, top: 80, height: 180, borderRadius: 120, transform: [{ rotate: "-8deg" }] }, sun: { position: "absolute", top: 28, right: 26, width: 56, height: 56, alignItems: "center", justifyContent: "center" }, sunCore: { width: 26, height: 26, borderRadius: 13, backgroundColor: "#E8B86A" }, sunRing: { position: "absolute", width: 46, height: 46, borderRadius: 23, borderWidth: 1, opacity: 0.35 }, cloud: { position: "absolute", flexDirection: "row", alignItems: "flex-end", opacity: 0.5 }, cloudA: { top: 82, left: -70 }, cloudB: { top: 146, right: -70 }, cloudPuffSmall: { width: 34, height: 20, borderRadius: 18, backgroundColor: C.cloud, marginHorizontal: -5 }, cloudPuffLarge: { width: 65, height: 30, borderRadius: 24, backgroundColor: C.cloud }, windLine: { position: "absolute", height: 2, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.52)" }, windLineA: { width: 92, top: 196, left: -90, transform: [{ rotate: "-4deg" }] }, windLineB: { width: 66, top: 252, right: -100, transform: [{ rotate: "-4deg" }] }, weatherNote: { position: "absolute", bottom: 8, right: 20, color: "rgba(23,33,31,0.45)", fontSize: 9, fontWeight: "700" } });
