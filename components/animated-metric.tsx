import { useEffect, useRef } from "react";
import { Animated, StyleProp, TextStyle } from "react-native";
import { useMotionPreference } from "@/hooks/use-motion-preference";

export function AnimatedMetric({ value, suffix, style, duration = 450 }: { value: number; suffix?: string; style?: StyleProp<TextStyle>; duration?: number }) {
  const { reduceMotion } = useMotionPreference();
  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (reduceMotion) { opacity.setValue(1); translateY.setValue(0); return; }
    opacity.setValue(0.35);
    translateY.setValue(4);
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration, useNativeDriver: true }),
    ]).start();
  }, [duration, opacity, reduceMotion, translateY, value]);
  return <Animated.Text style={[style, { opacity, transform: [{ translateY }] }]}>{value.toFixed(1)}{suffix ? ` ${suffix}` : ""}</Animated.Text>;
}
