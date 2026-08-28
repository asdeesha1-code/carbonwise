import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({ handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: false, shouldSetBadge: false, shouldShowBanner: true, shouldShowList: true }) });

export async function setDailyActivityReminder(enabled: boolean) {
  if (Platform.OS === "web") return false;
  if (!enabled) {
    await Notifications.cancelAllScheduledNotificationsAsync();
    return true;
  }
  const { status: existing } = await Notifications.getPermissionsAsync();
  const status = existing === "granted" ? existing : (await Notifications.requestPermissionsAsync()).status;
  if (status !== "granted") return false;
  if (Platform.OS === "android") await Notifications.setNotificationChannelAsync("carbonwise-reminders", { name: "CarbonWise reminders", importance: Notifications.AndroidImportance.DEFAULT });
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({ content: { title: "Keep your signal fresh", body: "Log one small activity in CarbonWise today.", data: { screen: "today" } }, trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour: 19, minute: 30 } });
  return true;
}
