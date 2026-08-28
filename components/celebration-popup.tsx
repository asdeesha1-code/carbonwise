import { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const C = { ink: "#17211F", coral: "#E56B50", mint: "#B9D9C5", cream: "#FFF8F4", muted: "#68736E" };

type Props = { visible: boolean; eyebrow: string; title: string; body: string; accent?: string; actionLabel?: string; onClose: () => void };

export function CelebrationPopup({ visible, eyebrow, title, body, accent = C.coral, actionLabel = "Keep exploring", onClose }: Props) {
  const { reduceMotion } = useMotionPreference();
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(reduceMotion ? 1 : 0.92)).current;

  useEffect(() => {
    if (!visible) return;
    opacity.setValue(0);
    scale.setValue(reduceMotion ? 1 : 0.92);
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: reduceMotion ? 0 : 180, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: reduceMotion ? 0 : 260, useNativeDriver: true }),
    ]).start();
  }, [opacity, scale, visible, reduceMotion]);

  return <Modal visible={visible} transparent animationType="none" onRequestClose={onClose} accessibilityViewIsModal>
    <View style={styles.backdrop}>
      <Animated.View style={[styles.card, { opacity, transform: [{ scale }] }]} accessibilityRole="alert">
        <View style={[styles.orb, { backgroundColor: accent }]}><Text style={styles.orbText}>✦</Text></View>
        <View style={styles.confetti}><Text style={[styles.confettiText, { color: C.mint }]}>•</Text><Text style={[styles.confettiText, { color: C.coral }]}>✦</Text><Text style={[styles.confettiText, { color: "#E8B86A" }]}>•</Text></View>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <Pressable onPress={onClose} style={({ pressed }) => [styles.button, pressed && { opacity: 0.78 }]} accessibilityRole="button"><Text style={styles.buttonText}>{actionLabel}</Text></Pressable>
      </Animated.View>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({ backdrop: { flex: 1, backgroundColor: "rgba(23,33,31,0.58)", alignItems: "center", justifyContent: "center", padding: 24 }, card: { width: "100%", maxWidth: 360, backgroundColor: C.cream, borderRadius: 28, padding: 24, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 24, shadowOffset: { width: 0, height: 12 }, elevation: 8 }, orb: { width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center", marginBottom: 14 }, orbText: { color: "#FFF", fontSize: 30, fontWeight: "800" }, confetti: { position: "absolute", top: 28, right: 30, flexDirection: "row", gap: 8 }, confettiText: { fontSize: 20, fontWeight: "900" }, eyebrow: { color: C.coral, fontSize: 10, letterSpacing: 1.6, fontWeight: "900" }, title: { color: C.ink, fontSize: 25, lineHeight: 30, textAlign: "center", fontWeight: "900", marginTop: 7 }, body: { color: C.muted, fontSize: 13, lineHeight: 19, textAlign: "center", marginTop: 10 }, button: { width: "100%", height: 50, borderRadius: 16, backgroundColor: C.ink, alignItems: "center", justifyContent: "center", marginTop: 20 }, buttonText: { color: "#FFF", fontSize: 14, fontWeight: "800" } });
