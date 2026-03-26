import { useState, useEffect } from "react";

export type TimeOfDay = "day" | "night";

export const useTimeOfDay = () => {
  // SSRでのハイドレーションエラーを避けるため、初期値はnullか安定した値にする
  // ここでは'day'にしておき、useEffectでクライアント時刻に合わせる
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      // 6時から18時までを「昼 (day)」、それ以外を「夜 (night)」とする
      if (hour >= 6 && hour < 18) {
        setTimeOfDay("day");
      } else {
        setTimeOfDay("night");
      }
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return timeOfDay;
};
