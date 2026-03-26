"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Link from "next/link";

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        // ポップでクリーンな背景感（天気による変化は残す）
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          pt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 検索バー風キャッチコピー */}
        <Paper
          elevation={0}
          sx={{
            p: "8px 20px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: 700,
            borderRadius: 50, // 丸みを強く
            border: (theme) =>
              `2px solid ${theme.palette.mode === "dark" ? "#555" : "#ccc"}`, // ダークモードでも見えやすく
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(30, 30, 35, 0.9)"
                : "background.paper", // 背景色を適正化
            mb: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <SearchIcon
            sx={{ color: "text.secondary", mr: 2, fontSize: "1.8rem" }}
          />

          <Typography
            variant="h5"
            sx={{
              flex: 1,
              fontFamily: "var(--font-senobi-gothic)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              color: "text.primary",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <span
              style={{
                borderBottom: `3px solid ${theme.palette.primary.main}`,
                color:
                  theme.palette.mode === "dark"
                    ? "#64b5f6"
                    : theme.palette.primary.main, // ダークモードでは明るい青
                paddingBottom: 2,
              }}
            >
              企業品質
            </span>
            <span>を、</span>
            <span
              style={{
                borderBottom: `3px solid ${theme.palette.secondary.main}`, // 個人価格はオレンジ（Secondary）
                color: theme.palette.mode === "dark" ? "#ffd54f" : "#bd8f26", // ダークモードでは明るい黄色
                paddingBottom: 2,
              }}
            >
              個人価格
            </span>
            <span>で。</span>
          </Typography>

          <MicIcon
            sx={{ color: "text.secondary", ml: 2, fontSize: "1.5rem" }}
          />
        </Paper>

        {/* ロゴエリア (CSSで再現) */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font-senobi-gothic)", // ポップなフォント
              fontWeight: 900,
              fontSize: { xs: "3rem", md: "6rem" },
              lineHeight: 1.2,
              letterSpacing: "0.2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 1, md: 3 },
            }}
          >
            {/* スエキチ - 青色 */}
            <Box component="span" sx={{ color: "#0055AA" }}>
              スエキチ
            </Box>

            {/* システム - 黒色 */}
            <Box component="span" sx={{ color: "#000000" }}>
              システム
            </Box>
          </Typography>
        </Box>

        {/* アクションボタン */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: "var(--font-senobi-gothic)",
              fontWeight: 700,
              fontSize: "1.2rem",
              px: 6,
              py: 1.5,
              borderRadius: 50, // ポップな丸み
              boxShadow: "0 4px 0 rgba(0,0,0,0.2)", // ポップな影
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 0 rgba(0,0,0,0.2)",
              },
              "&:active": {
                transform: "translateY(2px)",
                boxShadow: "0 0 0 rgba(0,0,0,0.2)",
              },
            }}
          >
            お問い合わせ
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/services"
            sx={{
              fontFamily: "var(--font-senobi-gothic)",
              fontWeight: 700,
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              borderRadius: 50,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                bgcolor: "rgba(0,0,0,0.05)",
              },
            }}
          >
            事業内容を見る
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
