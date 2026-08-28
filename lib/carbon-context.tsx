import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Activity, demoActivities, recommendations } from "@/lib/carbon";

type CarbonContextValue = {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  resetDemo: () => void;
  recommendations: ReturnType<typeof recommendations>;
};

const CarbonContext = createContext<CarbonContextValue | null>(null);
const STORAGE_KEY = "carbonwise.activities.v1";

export function CarbonProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>(demoActivities());
  useEffect(() => { AsyncStorage.getItem(STORAGE_KEY).then((value) => { if (value) setActivities(JSON.parse(value)); }); }, []);
  useEffect(() => { AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(activities)); }, [activities]);
  const value = useMemo(() => ({
    activities,
    addActivity: (activity: Activity) => setActivities((current) => [activity, ...current]),
    resetDemo: () => setActivities(demoActivities()),
    recommendations: recommendations(activities),
  }), [activities]);
  return <CarbonContext.Provider value={value}>{children}</CarbonContext.Provider>;
}

export function useCarbon() {
  const value = useContext(CarbonContext);
  if (!value) throw new Error("useCarbon must be used inside CarbonProvider");
  return value;
}
