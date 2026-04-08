"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeContext } from "../../contexts/ThemeContext";
import { getTheme } from "../../lib/theme/theme";

export default function DynamicThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { timeOfDay } = useThemeContext();

  // メモ化することで不要な再生成を防ぐ
  const theme = React.useMemo(() => {
    // 時間帯に応じてテーマを切り替える (day=light, night=dark)
    // 配色は常に「晴れ」のものをベースにする
    return getTheme("sunny", timeOfDay === "day" ? "day" : "night");
  }, [timeOfDay]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
