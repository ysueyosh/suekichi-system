"use client";

import * as React from "react";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import DynamicThemeProvider from "./DynamicThemeProvider";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeContextProvider>
        <DynamicThemeProvider>{children}</DynamicThemeProvider>
      </ThemeContextProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
