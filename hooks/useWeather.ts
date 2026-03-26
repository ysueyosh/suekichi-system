import { useState } from "react";

export type Weather = "sunny" | "cloudy" | "rainy";

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>("sunny");
  return { weather, setWeather };
};
