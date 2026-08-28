import factors from "../data/emission-factors.json";

export type Category = "transport" | "food" | "shopping" | "energy" | "waste" | "digital" | "other";
export type Confidence = "HIGH" | "MEDIUM" | "LOW";

export type Activity = {
  id: string;
  timestamp: string;
  category: Category;
  activityType: string;
  quantity: number;
  unit: string;
  estimatedCO2eLow: number;
  estimatedCO2eHigh: number;
  emissionFactor: number;
  confidence: Confidence;
  source: string;
  notes?: string;
};

export type Calculation = Omit<Activity, "id" | "timestamp" | "notes"> & { emissionFactor: number };

const ranges: Record<Confidence, [number, number]> = {
  HIGH: [0.95, 1.05],
  MEDIUM: [0.8, 1.2],
  LOW: [0.6, 1.4],
};

export function findFactor(category: Category, activityType: string) {
  const rows = (factors as Record<string, { activityType: string; factorPerUnit: number; unit: string; source: string; confidenceDefault: Confidence }[]>)[category] ?? [];
  return rows.find((row) => activityType.toLowerCase().includes(row.activityType) || row.activityType.includes(activityType.toLowerCase())) ?? null;
}

export function calculateEmission(input: { category: Category; activityType: string; quantity: number; unit?: string; confidence?: Confidence }): Calculation {
  const factor = findFactor(input.category, input.activityType);
  const emissionFactor = factor?.factorPerUnit ?? 0.35;
  const confidence = input.confidence ?? factor?.confidenceDefault ?? "LOW";
  const [lowMultiplier, highMultiplier] = ranges[confidence];
  const base = Math.max(0, input.quantity) * emissionFactor;
  return {
    category: input.category,
    activityType: input.activityType,
    quantity: input.quantity,
    unit: input.unit ?? factor?.unit ?? "unit",
    emissionFactor,
    estimatedCO2eLow: base * lowMultiplier,
    estimatedCO2eHigh: base * highMultiplier,
    confidence,
    source: factor?.source ?? "Labeled category-average estimate; methodology-dependent and low confidence",
  };
}

export function parseActivity(text: string): Calculation {
  const normalized = text.trim().toLowerCase();
  const quantityMatch = normalized.match(/(\d+(?:\.\d+)?)/);
  const quantity = quantityMatch ? Number(quantityMatch[1]) : 1;
  let category: Category = "other";
  let activityType = "category average";
  let unit = "activity";
  if (/(bus|car|metro|bike|bicycle|train|taxi)/.test(normalized)) {
    category = "transport";
    activityType = /bus/.test(normalized) ? "bus" : /metro|train/.test(normalized) ? "metro" : /bike|bicycle/.test(normalized) ? "bike" : "car";
    unit = "km";
  } else if (/(beef|steak|chicken|plant|vegetarian|meal|lunch|dinner)/.test(normalized)) {
    category = "food";
    activityType = /beef|steak/.test(normalized) ? "beef meal" : /chicken/.test(normalized) ? "chicken meal" : "plant meal";
    unit = "serving";
  } else if (/(kwh|electricity|energy|heater|ac)/.test(normalized)) {
    category = "energy";
    activityType = "electricity";
    unit = "kWh";
  } else if (/(shirt|clothing|jeans|jacket|shopping)/.test(normalized)) {
    category = "shopping";
    activityType = "clothing";
    unit = "item";
  }
  return calculateEmission({ category, activityType, quantity, unit });
}

export function demoActivities(): Activity[] {
  const seed = [
    ["transport", "bus", 18, "km", "HIGH"],
    ["transport", "car", 7, "km", "MEDIUM"],
    ["food", "plant meal", 1, "serving", "LOW"],
    ["food", "chicken meal", 1, "serving", "LOW"],
    ["energy", "electricity", 4, "kWh", "LOW"],
  ] as const;
  return seed.map(([category, activityType, quantity, unit, confidence], index) => ({
    id: `demo-${index}`,
    timestamp: new Date(Date.now() - index * 86400000 / 2).toISOString(),
    ...calculateEmission({ category, activityType, quantity, unit, confidence }),
  }));
}

export function sumRange(items: Activity[]) {
  return items.reduce((acc, item) => ({ low: acc.low + item.estimatedCO2eLow, high: acc.high + item.estimatedCO2eHigh }), { low: 0, high: 0 });
}

export function recommendations(activities: Activity[]) {
  const byCategory = activities.reduce<Record<string, number>>((acc, item) => { acc[item.category] = (acc[item.category] ?? 0) + item.estimatedCO2eHigh; return acc; }, {});
  const total = Object.values(byCategory).reduce((a, b) => a + b, 0) || 1;
  const options = [
    { category: "transport", action: "Swap one short car trip for the bus", why: "Transport is your largest lever this week.", saving: 5.8, effort: "LOW", money: "Save ₹180", time: "10 min", first: "Choose one trip under 8 km for the bus." },
    { category: "food", action: "Choose a plant meal twice this week", why: "Your food pattern is a meaningful share of the logged footprint.", saving: 4.8, effort: "LOW", money: "Save ₹120", time: "No extra time", first: "Pick a plant-based lunch for your next workday." },
    { category: "energy", action: "Run one cooler, shorter AC cycle", why: "Small energy changes compound without needing a lifestyle reset.", saving: 2.2, effort: "MED", money: "Save ₹65", time: "2 min", first: "Set the thermostat 1°C higher tonight." },
  ];
  return options.sort((a, b) => (byCategory[b.category] ?? 0) - (byCategory[a.category] ?? 0)).slice(0, 3).map((option, index) => ({ ...option, rank: index + 1, share: Math.round(((byCategory[option.category] ?? 0) / total) * 100) }));
}
