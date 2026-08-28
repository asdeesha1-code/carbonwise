import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AnimatedMetric } from "@/components/animated-metric";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useCarbon } from "@/lib/carbon-context";
import { sumRange } from "@/lib/carbon";
import { haptic } from "@/lib/haptics";

const C = { ink: "#173B4A", muted: "#4C6771", surface: "#F8FCFF", border: "#CFE7F5", coral: "#E56B50", mint: "#CDEFE4", cream: "#EAF7FF" };

export default function MoreScreen() {
  const { activities, resetDemo } = useCarbon();
  const [receipt, setReceipt] = useState(false);
  const [replay, setReplay] = useState(false);
  const pulse = useRef(new Animated.Value(1)).current;
  const total = sumRange(activities);
  const impact = Math.min(Math.max(total.high * 0.18, 2.2), 5.8);
  const replayed = Math.max(0, total.high - impact);

  useEffect(() => {
    if (!replay) return;
    Animated.sequence([
      Animated.timing(pulse, { toValue: 1.08, duration: 180, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 1, duration: 260, useNativeDriver: true }),
    ]).start();
  }, [pulse, replay]);

  const toggleReplay = () => {
    haptic.selection();
    setReplay((value) => !value);
  };

  return (
    <ScreenContainer className="px-5">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.eyebrow}>MORE</Text>
        <Text style={styles.title}>Make the signal useful.</Text>
        <Text style={styles.subtitle}>Everything in this prototype runs locally so you can explore the full loop without an API key.</Text>

        <Pressable onPress={toggleReplay} style={({ pressed }) => [styles.replayCard, pressed && { opacity: 0.92 }]}>
          <View style={styles.replayHeader}><View><Text style={styles.replayEyebrow}>IMPACT REPLAY</Text><Text style={styles.replayTitle}>{replay ? "That change has a shape." : "See your next move, before it happens."}</Text></View><Animated.View style={[styles.replayOrb, { transform: [{ scale: pulse }] }]}><Text style={styles.replayOrbText}>↗</Text></Animated.View></View>
          <Text style={styles.replayCopy}>{replay ? "One realistic swap can make the week feel lighter without asking for a perfect reset." : "CarbonWise turns a recommendation into a tiny before-and-after story you can feel."}</Text>
          <View style={styles.replayMetrics}><View><Text style={styles.replayLabel}>CURRENT WEEK</Text><AnimatedMetric value={total.high} suffix=" kg" style={styles.replayMetric} /></View><Text style={styles.replayArrow}>→</Text><View><Text style={styles.replayLabel}>WITH ONE MOVE</Text><AnimatedMetric value={replayed} suffix=" kg" style={[styles.replayMetric, { color: C.coral }]} /></View></View>
          <View style={styles.replayTrack}><View style={[styles.replayFill, { width: `${Math.min((replayed / Math.max(total.high, 1)) * 100, 100)}%` }]} /><View style={styles.replayDot} /></View>
          <View style={styles.replayBottom}><Text style={styles.replayDelta}>{replay ? `−${impact.toFixed(1)} kg CO2e/week` : "Tap to replay your impact"}</Text><Text style={styles.replayHint}>{replay ? "small move · visible result" : "a CarbonWise moment"}</Text></View>
        </Pressable>

        <Pressable onPress={() => { haptic.selection(); setReceipt(!receipt); }} style={({ pressed }) => [styles.menuCard, pressed && { opacity: 0.7 }]}><View style={styles.menuIcon}><IconSymbol name="doc.text.fill" size={19} color={C.coral} /></View><View style={styles.menuBody}><Text style={styles.menuTitle}>Daily Carbon Receipt</Text><Text style={styles.menuCopy}>A compact, text-first view of today&apos;s footprint.</Text></View><Text style={styles.chevron}>›</Text></Pressable>
        {receipt && <View style={styles.receipt}><Text style={styles.receiptBrand}>CARBONWISE / 28 AUG</Text><Text style={styles.receiptLine}>TODAY&apos;S CO2e RANGE</Text><Text style={styles.receiptMetric}>{total.low.toFixed(1)}–{total.high.toFixed(1)} kg</Text><View style={styles.dashes}><Text style={styles.receiptLine}>LOGGED ACTIVITIES</Text><Text style={styles.receiptValue}>{activities.length}</Text></View><View style={styles.dashes}><Text style={styles.receiptLine}>DAILY BUDGET</Text><Text style={styles.receiptValue}>6.0 kg</Text></View><Text style={styles.receiptNote}>Keep going. One practical change matters more than a perfect day.</Text></View>}
        <View style={styles.card}><Text style={styles.cardTitle}>Offline Demo Mode</Text><Text style={styles.cardCopy}>Reset this prototype to a realistic sample week. Your activity data stays on this device.</Text><Pressable onPress={() => { haptic.success(); resetDemo(); setReplay(false); }} style={({ pressed }) => [styles.demoButton, pressed && { opacity: 0.8 }]}><Text style={styles.demoText}>Reload demo data</Text></Pressable></View>
        <View style={styles.card}><Text style={styles.cardTitle}>How CarbonWise estimates</Text><Text style={styles.cardCopy}>Every number is a range: quantity × emission factor. Factors are labeled by confidence and source, and category averages are explicitly marked low confidence.</Text><View style={styles.methodRow}><View style={[styles.methodDot, { backgroundColor: C.mint }]} /><Text style={styles.methodText}>Measured · directly logged signal</Text></View><View style={styles.methodRow}><View style={[styles.methodDot, { backgroundColor: "#E8B86A" }]} /><Text style={styles.methodText}>Estimated · factor-based pattern</Text></View><View style={styles.methodRow}><View style={[styles.methodDot, { backgroundColor: "#D8D0C8" }]} /><Text style={styles.methodText}>Assumed · category average</Text></View></View>
        <Text style={styles.footer}>CarbonWise prototype · SDG 13 hackathon MVP</Text>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingTop: 18, paddingBottom: 32, gap: 14 }, eyebrow: { color: C.coral, fontSize: 11, letterSpacing: 1.5, fontWeight: "800" }, title: { color: C.ink, fontSize: 29, lineHeight: 34, fontWeight: "800", marginTop: 4 }, subtitle: { color: C.muted, fontSize: 14, lineHeight: 20, marginBottom: 4 },
  replayCard: { backgroundColor: C.ink, borderRadius: 22, padding: 18, overflow: "hidden" }, replayHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, replayEyebrow: { color: C.mint, fontSize: 10, letterSpacing: 1.4, fontWeight: "800" }, replayTitle: { color: "#FFF", fontSize: 20, lineHeight: 24, fontWeight: "800", maxWidth: 260, marginTop: 6 }, replayOrb: { width: 42, height: 42, borderRadius: 21, backgroundColor: C.coral, alignItems: "center", justifyContent: "center" }, replayOrbText: { color: "#FFF", fontSize: 24, fontWeight: "700" }, replayCopy: { color: "#C5D3CB", fontSize: 12, lineHeight: 18, marginTop: 14 }, replayMetrics: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }, replayLabel: { color: "#AAB7B0", fontSize: 9, letterSpacing: 0.8, fontWeight: "800" }, replayMetric: { color: "#FFF", fontSize: 27, fontWeight: "800", marginTop: 5 }, replayArrow: { color: C.coral, fontSize: 26 }, replayTrack: { height: 7, borderRadius: 7, backgroundColor: "#34433C", marginTop: 17, position: "relative" }, replayFill: { height: 7, borderRadius: 7, backgroundColor: C.coral }, replayDot: { position: "absolute", right: -1, top: -4, width: 15, height: 15, borderRadius: 8, backgroundColor: C.mint, borderWidth: 3, borderColor: C.ink }, replayBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 }, replayDelta: { color: C.mint, fontSize: 12, fontWeight: "800" }, replayHint: { color: "#AAB7B0", fontSize: 10 },
  menuCard: { backgroundColor: C.surface, borderRadius: 18, padding: 15, borderWidth: 1, borderColor: C.border, flexDirection: "row", alignItems: "center", gap: 12 }, menuIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: C.cream, alignItems: "center", justifyContent: "center" }, menuBody: { flex: 1 }, menuTitle: { color: C.ink, fontSize: 14, fontWeight: "800" }, menuCopy: { color: C.muted, fontSize: 11, lineHeight: 16, marginTop: 3 }, chevron: { color: C.coral, fontSize: 24 }, receipt: { backgroundColor: C.ink, borderRadius: 18, padding: 18 }, receiptBrand: { color: C.mint, fontSize: 10, letterSpacing: 1.5, fontWeight: "800", marginBottom: 18 }, receiptLine: { color: "#AAB7B0", fontSize: 10, letterSpacing: 1, fontWeight: "800" }, receiptMetric: { color: "#FFF", fontSize: 30, fontWeight: "800", marginTop: 7, marginBottom: 20 }, dashes: { borderTopWidth: 1, borderTopColor: "#3D4B45", paddingTop: 10, marginTop: 10, flexDirection: "row", justifyContent: "space-between" }, receiptValue: { color: "#FFF", fontSize: 12, fontWeight: "800" }, receiptNote: { color: "#C5D3CB", fontSize: 12, lineHeight: 17, marginTop: 20 }, card: { backgroundColor: C.surface, borderRadius: 20, padding: 17, borderWidth: 1, borderColor: C.border }, cardTitle: { color: C.ink, fontSize: 16, fontWeight: "800" }, cardCopy: { color: C.muted, fontSize: 12, lineHeight: 18, marginTop: 7 }, demoButton: { alignSelf: "flex-start", backgroundColor: C.cream, borderRadius: 14, paddingHorizontal: 13, paddingVertical: 10, marginTop: 13 }, demoText: { color: C.coral, fontSize: 12, fontWeight: "800" }, methodRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 13 }, methodDot: { width: 9, height: 9, borderRadius: 5 }, methodText: { color: C.ink, fontSize: 12 }, footer: { color: C.muted, textAlign: "center", fontSize: 11, marginTop: 5 }
});
