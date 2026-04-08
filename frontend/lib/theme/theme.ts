import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { Weather } from "../../hooks/useWeather";
import { TimeOfDay } from "../../hooks/useTimeOfDay";

// 型拡張: paletteにgradient, japaneseColorsを追加
declare module "@mui/material/styles" {
  interface TypeBackground {
    gradient: string;
  }
}

// テーマごとのカラー定義
// 和名を意識したカラーパレットに調整
const themeConfig = {
  sunny: {
    morning: {
      mode: "light",
      primary: "#2E5C5A", // 常磐色（ときわいろ） - 深い緑青
      secondary: "#F2D096", // 枯色（かれいろ） - 淡いベージュ
      background: {
        default: "#FCFAF2", // 生成色（きなりいろ）
        gradient: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)", // 白練色（しろねりいろ）ベース
      },
      text: { primary: "#2B2B2B", secondary: "#595857" }, // 墨色（すみいろ）、鈍色（にびいろ）
    },
    day: {
      mode: "light",
      primary: "#1D4E89", // 瑠璃色（るりいろ）
      secondary: "#EBB424", // 山吹色（やまぶきいろ）
      background: {
        default: "#e3f2fd",
        gradient: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)", // 空色
      },
      text: { primary: "#0f2350", secondary: "#3e4145" }, // 濃藍（こいあい）
    },
    night: {
      mode: "dark",
      primary: "#90caf9",
      secondary: "#D7AE52", // 金茶（きんちゃ）
      background: {
        default: "#0d1117",
        gradient: "linear-gradient(to top, #0f1f38 0%, #1a3b5a 100%)", // 鉄紺（てつこん）
      },
      text: { primary: "#ffffff", secondary: "#e0e0e0" }, // 文字色をより白く明るく
    },
  },
  cloudy: {
    morning: {
      mode: "light",
      primary: "#607d8b",
      secondary: "#c7b370", // 朽葉色（くちばいろ）
      background: {
        default: "#eceff1",
        gradient: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)", // 灰青（はいあお）
      },
      text: { primary: "#37474f", secondary: "#78909c" },
    },
    day: {
      mode: "light",
      primary: "#546e7a",
      secondary: "#F2D096",
      background: {
        default: "#cfd8dc",
        gradient: "linear-gradient(to top, #bdc2e8 0%, #e6dee9 100%)", // 藤鼠（ふじねず）
      },
      text: { primary: "#263238", secondary: "#546e7a" },
    },
    night: {
      mode: "dark",
      primary: "#b0bec5",
      secondary: "#9e9479", // 利休鼠（りきゅうねず）
      background: {
        default: "#263238",
        gradient: "linear-gradient(60deg, #29323c 0%, #485563 100%)", // 墨色グラデ
      },
      text: { primary: "#ffffff", secondary: "#cfd8dc" }, // 文字色を白く
    },
  },
  rainy: {
    morning: {
      mode: "light",
      primary: "#5c6bc0",
      secondary: "#A5A051", // 鶯茶（うぐいすちゃ）
      background: {
        default: "#e8eaf6",
        gradient: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)", // 青磁色（せいじいろ）
      },
      text: { primary: "#1a237e", secondary: "#5c6bc0" },
    },
    day: {
      mode: "light",
      primary: "#3949ab",
      secondary: "#707C74", // 松葉色（まつばいろ）
      background: {
        default: "#c5cae9",
        gradient: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)", // 薄墨（うすずみ）
      },
      text: { primary: "#283593", secondary: "#5da797" },
    },
    night: {
      mode: "dark",
      primary: "#7986cb",
      secondary: "#9fa8da",
      background: {
        default: "#1a237e",
        gradient: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", // 藍鉄（あいてつ）
      },
      text: { primary: "#ffffff", secondary: "#e8eaf6" }, // 文字色を白く
    },
  },
};

export const getTheme = (weather: Weather, timeOfDay: TimeOfDay) => {
  const config = themeConfig[weather][timeOfDay];

  return createTheme({
    palette: {
      mode: config.mode as "light" | "dark",
      primary: {
        main: config.primary,
      },
      secondary: {
        main: config.secondary,
      },
      background: {
        default: config.background.default,
        paper:
          config.mode === "dark"
            ? "rgba(30, 30, 35, 0.9)" // 暗い背景をより不透明に、少し明るくして文字を引き立てる
            : "rgba(255, 255, 255, 0.85)",
        gradient: config.background.gradient,
      },
      text: {
        primary: config.text.primary,
        secondary: config.mode === "dark" ? "#b0bec5" : config.text.secondary, // ダークモードのセカンダリテキストを明るく
      },
    },
    typography: typography,
    shape: {
      borderRadius: 16, // 全体的に丸くポップに
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "var(--font-senobi-gothic)", // グローバルフォント
            background: config.background.gradient,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            transition: "background 1s ease-in-out, color 0.5s ease-in-out",
            minHeight: "100vh",
            fontFeatureSettings: '"palt"',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 50, // ボタンを丸く
            textTransform: "none",
            padding: "12px 32px",
            fontSize: "1rem",
            boxShadow: "0 4px 0 rgba(0,0,0,0.1)", // ポップな影
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 0 rgba(0,0,0,0.1)",
            },
            "&:active": {
              transform: "translateY(2px)",
              boxShadow: "0 0 0 rgba(0,0,0,0.1)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24, // カードも丸く
            backdropFilter: "blur(10px)",
            background:
              config.mode === "dark"
                ? "rgba(20, 25, 30, 0.8)" // カード背景を濃くして白文字を読みやすく
                : "rgba(255, 255, 255, 0.7)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
            border: "2px solid rgba(0,0,0,0.05)", // 枠線を少し太く
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            borderRadius: 24,
          },
        },
      },
    },
  });
};
