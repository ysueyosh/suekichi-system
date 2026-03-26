"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTimeOfDay, TimeOfDay } from "../hooks/useTimeOfDay";
import { Weather } from "../hooks/useWeather";

interface ThemeContextType {
  weather: Weather;
  timeOfDay: TimeOfDay;
  isManual: boolean;
  setWeather: (weather: Weather) => void;
  setTimeOfDay: (timeOfDay: TimeOfDay) => void;
  toggleManual: () => void;
  weatherOptions: Weather[];
  timeOptions: TimeOfDay[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const systemTimeOfDay = useTimeOfDay();
  // const { weather: initialWeather } = useWeather(); // 将来的にAPIを使うならここ

  const [weather, setWeather] = useState<Weather>("sunny");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [isManual, setIsManual] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // 初回およびシステム時刻が変わった時に自動モードなら追従
  useEffect(() => {
    if ((!isManual || !mounted) && systemTimeOfDay) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeOfDay(systemTimeOfDay);
    }
  }, [systemTimeOfDay, isManual, mounted]);

  const value = {
    weather,
    timeOfDay,
    isManual,
    setWeather: (w: Weather) => {
      setWeather(w);
      setIsManual(true);
    },
    setTimeOfDay: (t: TimeOfDay) => {
      setTimeOfDay(t);
      setIsManual(true);
    },
    toggleManual: () => {
      setIsManual((prev) => !prev);
      // 自動に戻すときはシステム時刻を再適用
      if (isManual) {
        setTimeOfDay(systemTimeOfDay);
      }
    },
    weatherOptions: ["sunny", "cloudy", "rainy"] as Weather[],
    // morning を削除し、day / night のみに
    timeOptions: ["day", "night"] as TimeOfDay[],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }
  return context;
};
