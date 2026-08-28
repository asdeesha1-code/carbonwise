import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { CelebrationPopup } from "@/components/celebration-popup";
import { haptic } from "@/lib/haptics";
import { ScreenContainer } from "@/components/screen-container";
import { useCarbon } from "@/lib/carbon-context";

const C = { ink: "#173B4A", muted: "#4C6771", surface: "#F8FCFF", border: "#CFE7F5", coral: "#E56B50", mint: "#CDEFE4" };

export default function ActionsScreen() {
  const { activities, recommendations } = useCarbon();
  const [completed, setCompleted] = useState<number[]>([]);
  const [showWin, setShowWin] = useState(false);
  const doneCount = completed.length;

  const complete = (rank: number) => {
    const alreadyDone = completed.includes(rank);
    haptic.success();
    setCompleted((current) => alreadyDone ? current.filter((item) => item !== rank) : [...current, rank]);
    if (!alreadyDone) setShowWin(true);
  };

  return <ScreenContainer className="px-5"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
    <Text style={styles.eyebrow}>AI ACTION ENGINE</Text><Text style={styles.title}>Three moves worth your attention.</Text><Text style={styles.subtitle}>Ranked from your logged activities. No generic advice, no guilt — just the next useful step.</Text>
    <View style={styles.context}><Text style={styles.contextStrong}>{activities.length} activities</Text><Text style={styles.contextText}> are shaping these recommendations</Text></View>
    <View style={styles.progressCard}><View><Text style={styles.progressLabel}>YOUR MOMENTUM</Text><Text style={styles.progressTitle}>{doneCount === 0 ? "Choose one small move." : doneCount === 1 ? "One move is in motion." : "You are building a rhythm."}</Text></View><View style={styles.progressDots}>{[1, 2, 3].map((step) => <View key={step} style={[styles.progressDot, step <= doneCount && styles.progressDotDone]} />)}</View></View>
    {recommendations.map((item) => <View key={item.rank} style={[styles.card, completed.includes(item.rank) && styles.cardDone]}><View style={styles.top}><View style={styles.rank}><Text style={styles.rankText}>0{item.rank}</Text></View><View style={styles.impact}><Text style={styles.impactText}>−{item.saving.toFixed(1)} kg/week</Text><Text style={styles.impactSub}>potential reduction</Text></View></View><Text style={styles.action}>{item.action}</Text><Text style={styles.why}>{item.why} {item.share > 0 ? `That category is about ${item.share}% of your current logged footprint.` : ""}</Text><View style={styles.metaRow}><View><Text style={styles.metaLabel}>EFFORT</Text><Text style={styles.metaValue}>{item.effort}</Text></View><View><Text style={styles.metaLabel}>MONEY</Text><Text style={styles.metaValue}>{item.money}</Text></View><View><Text style={styles.metaLabel}>TIME</Text><Text style={styles.metaValue}>{item.time}</Text></View></View><Pressable onPress={() => complete(item.rank)} style={({ pressed }) => [styles.first, completed.includes(item.rank) && styles.firstComplete, pressed && { transform: [{ scale: 0.98 }], opacity: 0.8 }]}><Text style={styles.firstLabel}>{completed.includes(item.rank) ? "COMPLETED · NICE WORK" : "FIRST STEP"}</Text><Text style={styles.firstText}>{completed.includes(item.rank) ? "Saved as a small win. You can revisit this action anytime." : item.first}</Text></Pressable></View>)}
  </ScrollView><CelebrationPopup visible={showWin} eyebrow="SMALL WIN, REAL SIGNAL" title="That counts." body="CarbonWise is about repeatable choices, not perfect days. One practical action is now part of your progress story." actionLabel="Keep my momentum" onClose={() => setShowWin(false)} /></ScreenContainer>;
}

const styles = StyleSheet.create({ scroll: { paddingTop: 18, paddingBottom: 32, gap: 15 }, eyebrow: { color: C.coral, fontSize: 11, letterSpacing: 1.5, fontWeight: "800" }, title: { color: C.ink, fontSize: 29, lineHeight: 34, fontWeight: "800", marginTop: 4 }, subtitle: { color: C.muted, fontSize: 14, lineHeight: 20, marginTop: -6 }, context: { flexDirection: "row", alignItems: "center", backgroundColor: "#E8F0E8", borderRadius: 13, padding: 11 }, contextStrong: { color: "#2D7058", fontSize: 12, fontWeight: "800" }, contextText: { color: C.muted, fontSize: 12 }, progressCard: { backgroundColor: C.ink, borderRadius: 18, padding: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, progressLabel: { color: C.mint, fontSize: 9, letterSpacing: 1.2, fontWeight: "900" }, progressTitle: { color: "#FFF", fontSize: 14, fontWeight: "800", marginTop: 5 }, progressDots: { flexDirection: "row", gap: 6 }, progressDot: { width: 11, height: 11, borderRadius: 6, backgroundColor: "#34433C" }, progressDotDone: { backgroundColor: C.coral }, card: { backgroundColor: C.surface, borderRadius: 20, borderWidth: 1, borderColor: C.border, padding: 17 }, cardDone: { borderColor: C.mint, backgroundColor: "#FBFFFC" }, top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, rank: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F4E9E3", alignItems: "center", justifyContent: "center" }, rankText: { color: C.coral, fontSize: 13, fontWeight: "900" }, impact: { alignItems: "flex-end" }, impactText: { color: C.coral, fontSize: 16, fontWeight: "900" }, impactSub: { color: C.muted, fontSize: 10, marginTop: 2 }, action: { color: C.ink, fontSize: 17, lineHeight: 22, fontWeight: "800", marginTop: 15 }, why: { color: C.muted, fontSize: 12, lineHeight: 18, marginTop: 7 }, metaRow: { flexDirection: "row", gap: 42, borderTopWidth: 1, borderTopColor: "#F0EBE5", marginTop: 15, paddingTop: 13 }, metaLabel: { color: C.muted, fontSize: 9, letterSpacing: 1, fontWeight: "800" }, metaValue: { color: C.ink, fontSize: 12, fontWeight: "800", marginTop: 4 }, first: { backgroundColor: "#F7F4EF", borderRadius: 12, padding: 11, marginTop: 15 }, firstLabel: { color: C.coral, fontSize: 9, letterSpacing: 1, fontWeight: "800" }, firstText: { color: C.ink, fontSize: 12, lineHeight: 17, fontWeight: "700", marginTop: 4 }, firstComplete: { backgroundColor: "#E8F0E8", borderColor: C.mint, borderWidth: 1 } });
