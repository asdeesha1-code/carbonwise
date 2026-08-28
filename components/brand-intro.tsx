import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const C = { ink: "#173B4A", coral: "#E56B50", mint: "#CDEFE4", cream: "#EAF7FF" };

export function BrandIntro({ onDone }: { onDone: () => void }) {
  const { reduceMotion } = useMotionPreference();
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(reduceMotion ? 1 : 0.82)).current;
  const line = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const duration = reduceMotion ? 0 : 420;
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: duration + 120, useNativeDriver: true }),
      Animated.timing(line, { toValue: 1, duration: reduceMotion ? 0 : 700, delay: 220, useNativeDriver: true }),
    ]).start();
    const timer = setTimeout(onDone, reduceMotion ? 400 : 1850);
    return () => clearTimeout(timer);
  }, [line, opacity, onDone, reduceMotion, scale]);

  return <View style={StyleSheet.absoluteFill} pointerEvents="auto">
    <View style={styles.background}>
      <View style={styles.halo} />
      <Animated.View style={[styles.content, { opacity, transform: [{ scale }] }]}>
        <View style={styles.logoFrame}><View style={styles.logoOrbit} /><Text style={styles.logoLeaf}>↗</Text><Text style={styles.logoDot}>·</Text></View>
        <Text style={styles.name}>Carbon<Text style={styles.nameAccent}>Wise</Text></Text>
        <Animated.View style={[styles.rule, { transform: [{ scaleX: line }] }]} />
        <Text style={styles.tagline}>SEE THE SIGNAL. CHOOSE THE MOVE.</Text>
      </Animated.View>
      <Text style={styles.footer}>A clearer climate story for everyday decisions</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({ background: { flex: 1, backgroundColor: C.cream, alignItems: "center", justifyContent: "center" }, halo: { position: "absolute", width: 320, height: 320, borderRadius: 160, backgroundColor: "rgba(255,255,255,0.34)" }, content: { alignItems: "center" }, logoFrame: { width: 106, height: 106, borderRadius: 32, backgroundColor: C.ink, alignItems: "center", justifyContent: "center", shadowColor: C.ink, shadowOpacity: 0.22, shadowRadius: 24, shadowOffset: { width: 0, height: 12 }, elevation: 8 }, logoOrbit: { width: 66, height: 66, borderRadius: 33, borderWidth: 2, borderColor: C.mint, opacity: 0.75 }, logoLeaf: { position: "absolute", color: C.coral, fontSize: 42, fontWeight: "900", transform: [{ rotate: "-18deg" }] }, logoDot: { position: "absolute", color: C.mint, fontSize: 38, top: 11, right: 23, fontWeight: "900" }, name: { color: C.ink, fontSize: 43, letterSpacing: -1.5, fontWeight: "900", marginTop: 22 }, nameAccent: { color: C.coral }, rule: { width: 132, height: 3, borderRadius: 3, backgroundColor: C.coral, marginTop: 15 }, tagline: { color: C.ink, fontSize: 9, letterSpacing: 2, fontWeight: "900", marginTop: 14 }, footer: { position: "absolute", bottom: 42, color: "rgba(23,59,74,0.52)", fontSize: 11, fontWeight: "600" } });
