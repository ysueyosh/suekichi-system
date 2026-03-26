"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  useTheme,
  Container,
  Stack,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ScrollReveal } from "../ui/ScrollReveal";

// Custom Grid Components to avoid MUI Grid version issues
interface GridContainerProps {
  children: React.ReactNode;
  spacing?: number;
  alignItems?: string;
  justifyContent?: string;
}

const GridContainer = ({
  children,
  spacing = 2,
  alignItems = "stretch",
  justifyContent = "center",
}: GridContainerProps) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      mx: -spacing,
      width: `calc(100% + ${spacing * 16}px)`,
      alignItems,
      justifyContent,
    }}
  >
    {children}
  </Box>
);

interface GridItemProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  spacing?: number;
}

const GridItem = ({
  children,
  xs = 12,
  sm,
  md,
  spacing = 2,
}: GridItemProps) => {
  // Simple width calculation
  const getWidth = (cols: number) => `${(cols / 12) * 100}%`;

  return (
    <Box
      sx={{
        width: {
          xs: getWidth(xs),
          sm: sm ? getWidth(sm) : getWidth(xs),
          md: md ? getWidth(md) : sm ? getWidth(sm) : getWidth(xs),
        },
        px: spacing,
        pb: spacing * 2,
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
};

// Common Header Component
const SectionHeader = ({
  title,
  subtitle,
  color = "primary",
}: {
  title: string;
  subtitle?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}) => {
  return (
    <Box mb={8} textAlign="center">
      {subtitle && (
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          gutterBottom
          sx={{ letterSpacing: "0.2em", textTransform: "uppercase", mb: 1 }}
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          fontFamily: "var(--font-senobi-gothic)",
          fontWeight: 700,
          letterSpacing: "0.05em",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 4,
          bgcolor: `${color}.main`,
          mx: "auto",
          mt: 2,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

// --- 1. Problem Section ---
export const ProblemSection = () => {
  const theme = useTheme();
  return (
    <Box py={12} sx={{ bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <ScrollReveal animation="fade">
          <SectionHeader
            title="こんな課題、ありませんか？"
            subtitle="PROBLEMS"
            color="error"
          />
        </ScrollReveal>

        <GridContainer spacing={2}>
          {[
            { title: "開発会社への見積もりが高すぎる", icon: "💸" },
            { title: "個人のフリーランスだと品質が不安", icon: "🤔" },
            { title: "やりとりが遅く、ストレスが溜まる", icon: "🐢" },
          ].map((item, index) => (
            <GridItem xs={12} md={4} key={index} spacing={2}>
              <ScrollReveal
                animation="slide"
                direction="up"
                delay={index * 200}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    bgcolor: "rgba(255,0,0,0.02)",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 8,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Typography variant="h1" sx={{ mb: 2 }}>
                    {item.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontFamily: "var(--font-senobi-gothic)" }}
                  >
                    {item.title}
                  </Typography>
                </Paper>
              </ScrollReveal>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Box>
  );
};

// --- 2. Solution Section ---
export const SolutionSection = () => {
  const theme = useTheme();
  return (
    <Box py={16} sx={{ bgcolor: "rgba(0,85,170,0.03)" }}>
      <Container maxWidth="md">
        <ScrollReveal animation="fade">
          <SectionHeader
            title="その悩み、全部解決できます"
            subtitle="SOLUTION"
            color="primary"
          />
        </ScrollReveal>

        <Box sx={{ position: "relative", p: { xs: 2, md: 6 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 12,
              bgcolor: "white",
              border: `2px solid ${theme.palette.primary.light}`,
              boxShadow: "0 20px 60px rgba(0,85,170,0.1)",
            }}
          >
            <Stack spacing={6}>
              {[
                {
                  title: "中間マージンを完全カット",
                  desc: "営業・PM・開発をワンストップで行うため、余計なコストが発生しません。大手企業の約1/3〜1/2の価格で提供可能です。",
                },
                {
                  title: "全てを「スエキチ」が担当",
                  desc: "ヒアリングから納品まで、私（スエキチ）が責任を持って担当します。「担当者がコロコロ変わる」「伝言ゲームになる」といったストレスは一切ありません。",
                },
                {
                  title: "AI駆動による超高速開発",
                  desc: "生成AIを開発プロセスにフル活用することで、コーディング速度を劇的に向上。一般的な開発会社の数倍のスピード感で納品可能です。",
                },
              ].map((sol, i) => (
                <Box key={i} display="flex" gap={2} alignItems="flex-start">
                  <CheckCircleOutlineIcon
                    color="primary"
                    sx={{ fontSize: 32, mt: 0.5, flexShrink: 0 }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontFamily: "var(--font-senobi-gothic)",
                        fontWeight: 700,
                      }}
                    >
                      {sol.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {sol.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

// --- 3. Features Section ---
export const FeaturesSection = () => {
  return (
    <Box py={12}>
      <Container maxWidth="lg">
        <SectionHeader
          title="スエキチシステムの強み"
          subtitle="STRENGTHS"
          color="secondary"
        />
        <GridContainer spacing={2}>
          {[
            {
              title: "高品質設計",
              icon: <CodeIcon fontSize="large" />,
              desc: "変更に強い堅牢なコード",
            },
            {
              title: "AI × 高速開発",
              icon: <SpeedIcon fontSize="large" />,
              desc: "最新技術で工数を極小化",
            },
            {
              title: "柔軟な仕様変更",
              icon: <TrendingUpIcon fontSize="large" />,
              desc: "アジャイルな開発進行",
            },
            {
              title: "コスト最適化",
              icon: <VolunteerActivismIcon fontSize="large" />,
              desc: "無駄を削ぎ落とした価格",
            },
          ].map((feat, i) => (
            <GridItem xs={12} sm={6} md={3} key={i} spacing={2}>
              <ScrollReveal animation="zoom" delay={i * 100}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 8,
                    height: "100%",
                    bgcolor: "#fffbf0", // 淡いオレンジ
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box color="secondary.main" mb={2}>
                    {feat.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: "var(--font-senobi-gothic)",
                      fontWeight: 700,
                    }}
                  >
                    {feat.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feat.desc}
                  </Typography>
                </Paper>
              </ScrollReveal>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Box>
  );
};

// --- 4. Visual Section ---
const VisualBox = ({
  color = "#ddd",
  label,
}: {
  color?: string;
  label: string;
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        bgcolor: color,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: theme.shadows[4],
      }}
    >
      <Typography
        variant="h4"
        sx={{ opacity: 0.3, fontFamily: "var(--font-senobi-gothic)" }}
      >
        {label} No Image
      </Typography>
    </Box>
  );
};

export const VisualSection = () => {
  return (
    <Box py={12} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Stack spacing={12}>
          {/* Item 1 */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={6}
          >
            <Box flex={1} order={{ xs: 2, md: 1 }}>
              <ScrollReveal animation="slide" direction="right">
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontFamily: "var(--font-senobi-gothic)",
                      fontWeight: 700,
                    }}
                  >
                    洗練されたUIデザイン
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 2 }}
                  >
                    ユーザーが迷わない、直感的で美しいインターフェース。
                    目的の情報に最短でたどり着ける導線設計を心がけています。
                    見た目の美しさだけでなく、使い勝手を最優先に考えたデザインを提供します。
                  </Typography>
                </Box>
              </ScrollReveal>
            </Box>
            <Box flex={1} order={{ xs: 1, md: 2 }}>
              <ScrollReveal animation="slide" direction="left">
                <VisualBox color="#e3f2fd" label="UI Screen" />
              </ScrollReveal>
            </Box>
          </Box>

          {/* Item 2 */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={6}
          >
            <Box flex={1}>
              <ScrollReveal animation="slide" direction="right">
                <VisualBox color="#f3e5f5" label="Coding" />
              </ScrollReveal>
            </Box>
            <Box flex={1}>
              <ScrollReveal animation="slide" direction="left">
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontFamily: "var(--font-senobi-gothic)",
                      fontWeight: 700,
                    }}
                  >
                    品質を支えるコード
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 2 }}
                  >
                    表側からは見えない部分こそ、丁寧に。
                    将来の拡張やメンテナンスを見据えた、読みやすく堅牢なコードを書くことに誇りを持っています。
                    最新の技術トレンドを取り入れつつ、安定性を重視した設計を行います。
                  </Typography>
                </Box>
              </ScrollReveal>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

// --- 5. Stats Section ---
export const StatsSection = () => {
  return (
    <Box py={10} sx={{ bgcolor: "text.primary", color: "white" }}>
      <Container maxWidth="lg">
        <SectionHeader title="数字で見る実績" color="primary" />
        <GridContainer spacing={4} justifyContent="center" alignItems="center">
          {[
            { label: "開発案件数", value: "30+", unit: "件" },
            { label: "継続依頼率", value: "90", unit: "%" },
            { label: "平均納期短縮", value: "2", unit: "週間" },
          ].map((stat, i) => (
            <GridItem xs={12} md={4} key={i} spacing={4}>
              <Box textAlign="center">
                <Typography variant="body1" sx={{ opacity: 0.7, mb: 1 }}>
                  {stat.label}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "var(--font-senobi-gothic)",
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                  <span style={{ fontSize: "1.5rem" }}>{stat.unit}</span>
                </Typography>
              </Box>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Box>
  );
};

// --- 6. CTA Section ---
export const CTASection = () => {
  // const theme = useTheme(); // 未使用なので削除
  return (
    <Box py={16} textAlign="center" sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <ScrollReveal animation="zoom">
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: "var(--font-senobi-gothic)",
                fontWeight: 700,
                mb: 4,
              }}
            >
              まずは気軽にご相談ください
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 8, lineHeight: 1.8 }}
            >
              「こんなことはできる？」といった些細な質問でも構いません。
              <br />
              あなたのビジネスの課題を、技術の力で解決します。
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="/contact"
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 50,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "var(--font-senobi-gothic)",
                  boxShadow: "0 4px 20px rgba(0,85,170,0.3)",
                  minWidth: 280,
                }}
              >
                無料相談する
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="/works"
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 50,
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-senobi-gothic)",
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 },
                  minWidth: 280,
                }}
              >
                実績を見る
              </Button>
            </Stack>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};
