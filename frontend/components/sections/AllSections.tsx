"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import StorageIcon from "@mui/icons-material/Storage";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandymanIcon from "@mui/icons-material/Handyman";
import ChatIcon from "@mui/icons-material/Chat";
import ReceiptIcon from "@mui/icons-material/Receipt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Stack,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
// import StarIcon from "@mui/icons-material/Star"; // 未使用なのでコメントアウト
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpeedIcon from "@mui/icons-material/Speed";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";
// import Image from 'next/image'; // 画像がないので一旦コメントアウト

// ポップなセクションヘッダー
const SectionHeader = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 8, textAlign: "center", position: "relative" }}>
      <Paper
        elevation={0}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.5,
          py: 1,
          px: 3,
          borderRadius: 50,
          bgcolor: "rgba(0,0,0,0.03)",
          fontFamily: "var(--font-senobi-gothic)",
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          color: theme.palette.text.secondary,
          mb: 2,
        }}
      >
        {icon || <SearchIcon fontSize="small" />}
        {subtitle.toUpperCase()}
      </Paper>
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          fontFamily: "var(--font-senobi-gothic)",
          letterSpacing: "0.05em",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const GridContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{ display: "flex", flexWrap: "wrap", mx: -2, justifyContent: "center" }}
  >
    {children}
  </Box>
);

const GridItem = ({
  children,
  xs = 12,
  md = 4,
}: {
  children: React.ReactNode;
  xs?: number;
  md?: number;
}) => (
  <Box
    sx={{
      width: { xs: `${(xs / 12) * 100}%`, md: `${(md / 12) * 100}%` },
      px: 2,
      mb: 4,
      boxSizing: "border-box",
    }}
  >
    {children}
  </Box>
);

// --- Features Section ---
export const Features = () => {
  const theme = useTheme();

  return (
    <Box
      py={12}
      sx={{
        bgcolor:
          theme.palette.mode === "dark" ? "background.default" : "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <ScrollReveal animation="fade">
          <Box mb={10} textAlign="center">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "var(--font-senobi-gothic)",
                fontWeight: 700,
              }}
            >
              Features
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
              }}
            >
              品質はそのままに、無駄なコストだけを削減しています。
            </Typography>
          </Box>
        </ScrollReveal>

        <GridContainer>
          {[
            {
              title: "コスト最適化",
              assertion: "余計なコストは一切かけません。",
              reason:
                "代理店や営業を挟まないことで、中間マージンを削減。その分、開発そのものにコストを集中できます。",
              assurance: "適正価格で、納得できる開発を提供します。",
              icon: (
                <CompareArrowsIcon
                  fontSize="large"
                  sx={{ color: "primary.main" }}
                />
              ),
            },
            {
              title: "高品質な開発",
              assertion: "企業レベルの品質を、そのまま提供します。",
              reason:
                "要件定義から設計・開発・運用まで一貫対応。認識ズレを防ぎ、高い品質を維持します。",
              assurance: "品質で妥協することはありません。",
              icon: (
                <PrecisionManufacturingIcon
                  fontSize="large"
                  sx={{ color: "primary.main" }}
                />
              ),
            },
            {
              title: "技術選定の最適化",
              assertion: "“必要な技術だけ”で構築します。",
              reason:
                "流行ではなく、目的に最適な技術を選定。過剰な構成を避けることでコストを最適化します。",
              assurance: "無駄のない設計で、長く使えるシステムを作ります。",
              icon: (
                <SettingsSuggestIcon
                  fontSize="large"
                  sx={{ color: "primary.main" }}
                />
              ),
            },
            {
              title: "AI駆動の高速開発",
              assertion: "爆速で形にし、改善サイクルを回します。",
              reason:
                "AIツールを駆使し、コーディング時間を大幅圧縮。浮いた時間を「思考」と「改善」に充てます。",
              assurance: "スピードも品質の一部です。",
              icon: (
                <SpeedIcon fontSize="large" sx={{ color: "primary.main" }} />
              ),
            },
          ].map((feature, index) => (
            <GridItem xs={12} md={3} key={index}>
              <ScrollReveal animation="fade" delay={index * 100}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box mb={2} display="flex" justifyContent="center">
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "50%",
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.03)",
                      }}
                    >
                      {feature.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ fontFamily: "var(--font-senobi-gothic)", mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="primary.main"
                    sx={{
                      mb: 2,
                      minHeight: "3em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {feature.assertion}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    lineHeight={1.6}
                    sx={{ mb: 2, textAlign: "left", flexGrow: 1 }}
                  >
                    {feature.reason}
                  </Typography>
                  <Box
                    sx={{
                      mt: "auto",
                      pt: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      {feature.assurance}
                    </Typography>
                  </Box>
                </Paper>
              </ScrollReveal>
            </GridItem>
          ))}
        </GridContainer>

        <ScrollReveal animation="fade" delay={200}>
          <Box sx={{ maxWidth: 900, mx: "auto", mb: 8, mt: 8 }}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              fontWeight="bold"
              sx={{ mb: 4, fontFamily: "var(--font-senobi-gothic)" }}
            >
              他との違い
            </Typography>
            <TableContainer
              component={Paper}
              elevation={0}
              variant="outlined"
              sx={{ overflow: "hidden", borderRadius: 4 }}
            >
              <Table sx={{ minWidth: 650 }}>
                <TableHead
                  sx={{
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <TableRow>
                    <TableCell
                      align="center"
                      width="25%"
                      sx={{ fontWeight: "bold" }}
                    >
                      項目
                    </TableCell>
                    <TableCell
                      align="center"
                      width="25%"
                      sx={{ fontWeight: "bold", color: "text.secondary" }}
                    >
                      開発会社
                    </TableCell>
                    <TableCell
                      align="center"
                      width="25%"
                      sx={{ fontWeight: "bold", color: "text.secondary" }}
                    >
                      フリーランス
                    </TableCell>
                    <TableCell
                      align="center"
                      width="25%"
                      sx={{
                        fontWeight: "bold",
                        color: "primary.main",
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(25, 118, 210, 0.08)"
                            : "rgba(25, 118, 210, 0.04)",
                      }}
                    >
                      スエキチシステム
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      label: "価格",
                      company: "高い",
                      freelance: "安い",
                      suekichi: "適正",
                    },
                    {
                      label: "品質",
                      company: "高い",
                      freelance: "バラつきあり",
                      suekichi: "安定して高い",
                    },
                    {
                      label: "柔軟性",
                      company: "低い",
                      freelance: "高い",
                      suekichi: "高い",
                    },
                    {
                      label: "スピード",
                      company: "普通",
                      freelance: "速い",
                      suekichi: "速い",
                    },
                  ].map((row) => (
                    <TableRow key={row.label} hover>
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {row.label}
                      </TableCell>
                      <TableCell align="center">{row.company}</TableCell>
                      <TableCell align="center">{row.freelance}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          color: "primary.main",
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(25, 118, 210, 0.08)"
                              : "rgba(25, 118, 210, 0.04)",
                        }}
                      >
                        {row.suekichi}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              align="center"
              sx={{
                mt: 3,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              価格・品質・柔軟性をバランスよく実現しています。
            </Typography>
          </Box>
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={400}>
          <Box textAlign="center" mt={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                lineHeight: 2,
                fontFamily: "var(--font-senobi-gothic)",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              “安さ”ではなく、
              <br />
              “納得感”で選ばれる開発を提供します。
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

// --- Services Section ---
export const Services = () => {
  const theme = useTheme();

  return (
    <Box
      py={12}
      sx={{
        bgcolor:
          theme.palette.mode === "dark" ? "background.default" : "#f9f9f9",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* ① 導入 */}
        <ScrollReveal animation="fade">
          <Box mb={8} textAlign="center">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "var(--font-senobi-gothic)",
                fontWeight: 700,
              }}
            >
              Services
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              目的に合わせて、最適な形で開発します。
            </Typography>
          </Box>
        </ScrollReveal>

        {/* ② サービス一覧 */}
        <GridContainer>
          {[
            {
              title: "Webシステム開発",
              assertion: "業務を効率化するシステムを開発します。",
              desc: "管理画面や予約システムなど、実際の業務に合わせたWebシステムを構築します。",
              targets: ["手作業を減らしたい", "独自の仕組みを作りたい"],
              icon: <WebIcon sx={{ fontSize: 50, color: "primary.main" }} />,
            },
            {
              title: "LP制作",
              assertion: "成果につながるLPを制作します。",
              desc: "デザインだけでなく、ユーザー導線を意識した構成で制作します。",
              targets: ["商品・サービスを売りたい", "問い合わせを増やしたい"],
              icon: (
                <DesignServicesIcon
                  sx={{ fontSize: 50, color: "secondary.main" }}
                />
              ),
            },
            {
              title: "業務効率化ツール",
              assertion: "ルーチンワークを自動化します。",
              desc: "Excelや手入力作業を自動化するスクリプト、bot開発など、小さなツールから対応します。",
              targets: ["単純作業をなくしたい", "ミスを減らしたい"],
              icon: (
                <HandymanIcon sx={{ fontSize: 50, color: "success.main" }} />
              ),
            },
            {
              title: "API開発",
              assertion: "データ連携の基盤を作ります。",
              desc: "外部サービスとの連携や、アプリ向けのバックエンドAPIを設計・開発します。",
              targets: ["アプリを作りたい", "データ連携したい"],
              icon: <StorageIcon sx={{ fontSize: 50, color: "info.main" }} />,
            },
            {
              title: "AIソリューション",
              assertion: "AIの力でビジネスを加速させます。",
              desc: "ChatGPTをはじめとした生成AIの導入支援や、AIを活用した業務改善ツールを提案・開発します。",
              targets: ["AIを導入したい", "業務を自動化したい"],
              icon: (
                <PsychologyIcon
                  sx={{ fontSize: 50, color: "secondary.dark" }}
                />
              ),
            },
            {
              title: "モバイルアプリ開発",
              assertion: "スマホで使える便利なツールを作ります。",
              desc: "社内利用の業務アプリから、一般公開向けのアプリまで。React Native等を用いて効率的に開発します。",
              targets: ["スマホで業務を完結させたい", "アプリを作りたい"],
              icon: (
                <SmartphoneIcon sx={{ fontSize: 50, color: "primary.dark" }} />
              ),
            },
          ].map((service, index) => (
            <GridItem xs={12} md={4} key={index}>
              <ScrollReveal animation="fade" delay={index * 100}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={3} gap={2}>
                    {service.icon}
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ fontFamily: "var(--font-senobi-gothic)" }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: "1.1rem" }}
                  >
                    {service.assertion}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ minHeight: "3em" }}
                  >
                    {service.desc}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: theme.palette.action.hover,
                      p: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      gutterBottom
                    >
                      こんな方におすすめ：
                    </Typography>
                    <Stack spacing={1}>
                      {service.targets.map((target, idx) => (
                        <Box
                          key={idx}
                          display="flex"
                          alignItems="center"
                          gap={1}
                        >
                          <CheckCircleIcon color="success" fontSize="small" />
                          <Typography variant="body2">{target}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </ScrollReveal>
            </GridItem>
          ))}
        </GridContainer>

        <Box textAlign="center" mt={6}>
          <ScrollReveal animation="fade" delay={200}>
            <Typography variant="body1" color="text.secondary">
              上記に含まれていない内容でも、ITに関することであれば幅広く対応可能です。
              <br />
              「こんなこともできる？」と思ったら、まずはお気軽にお問い合わせください。
            </Typography>
          </ScrollReveal>
        </Box>

        {/* ③ 開発の流れ */}
        <Box mt={16}>
          <ScrollReveal animation="fade">
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight="bold"
              sx={{ fontFamily: "var(--font-senobi-gothic)", mb: 6 }}
            >
              ご相談から納品までの流れ
            </Typography>
          </ScrollReveal>
          <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
            {/* 縦線（スマホ用） */}
            <Box
              sx={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                bgcolor: "divider",
                display: { xs: "block", md: "none" },
              }}
            />

            {[
              {
                step: 1,
                title: "お問い合わせ",
                desc: "まずはお気軽にご連絡ください",
                icon: <ChatIcon color="action" />,
              },
              {
                step: 2,
                title: "ヒアリング",
                desc: "現状の課題やご要望をお伺いします",
                icon: <LightbulbIcon color="warning" />,
              },
              {
                step: 3,
                title: "提案・見積もり",
                desc: "最適なプランと概算費用をご提示",
                icon: <ReceiptIcon color="info" />,
              },
              {
                step: 4,
                title: "開発",
                desc: "進捗を共有しながら開発を進めます",
                icon: <CodeIcon color="primary" />,
              },
              {
                step: 5,
                title: "納品・改善",
                desc: "納品後も改善のご相談を承ります",
                icon: <VerifiedUserIcon color="success" />,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade" delay={index * 100}>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 3,
                    mb: 3,
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 1,
                    ml: { xs: 5, md: 0 },
                  }}
                  elevation={1}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      mr: 3,
                      flexShrink: 0,
                      position: { xs: "absolute", md: "static" },
                      left: { xs: -43, md: "auto" },
                    }}
                  >
                    {item.step}
                  </Box>
                  <Box sx={{ mr: 3, display: { xs: "none", sm: "block" } }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </ScrollReveal>
            ))}
          </Box>
        </Box>

        {/* ④ おすすめの方 & ⑤ 対応範囲 */}
        <GridContainer>
          <GridItem xs={12} md={6}>
            <Box mt={12}>
              <ScrollReveal animation="fade">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "#e3f2fd",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    fontWeight="bold"
                    sx={{
                      fontFamily: "var(--font-senobi-gothic)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Diversity3Icon color="primary" /> こんな方に選ばれています
                  </Typography>
                  <Stack spacing={2} mt={3}>
                    {[
                      "初めて開発を依頼する方",
                      "コストを抑えたい方",
                      "柔軟に相談したい方",
                      "小さく始めたい方",
                    ].map((text, i) => (
                      <Box key={i} display="flex" alignItems="center" gap={1}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                        <Typography variant="body1" fontWeight={500}>
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </ScrollReveal>
            </Box>
          </GridItem>

          <GridItem xs={12} md={6}>
            <Box mt={12}>
              <ScrollReveal animation="fade" delay={200}>
                <Paper
                  elevation={2}
                  sx={{ p: 4, height: "100%", borderRadius: 4 }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ fontFamily: "var(--font-senobi-gothic)" }}
                  >
                    対応できること / できないこと
                  </Typography>
                  <Box display="flex" gap={2} mt={1}>
                    <Box flex={1}>
                      <Typography
                        variant="subtitle2"
                        color="success.main"
                        fontWeight="bold"
                        gutterBottom
                      >
                        ◎ 対応できる
                      </Typography>
                      <Stack spacing={1}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CheckCircleIcon fontSize="small" color="success" />
                          <Typography variant="body2">Web開発全般</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CheckCircleIcon fontSize="small" color="success" />
                          <Typography variant="body2">小〜中規模PJ</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CheckCircleIcon fontSize="small" color="success" />
                          <Typography variant="body2">技術調査</Typography>
                        </Box>
                      </Stack>
                    </Box>
                    <Box flex={1}>
                      <Typography
                        variant="subtitle2"
                        color="error.main"
                        fontWeight="bold"
                        gutterBottom
                      >
                        × 対応できない
                      </Typography>
                      <Stack spacing={1}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CancelIcon fontSize="small" color="error" />
                          <Typography variant="body2">超大規模開発</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CancelIcon fontSize="small" color="error" />
                          <Typography variant="body2">常駐案件</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CancelIcon fontSize="small" color="error" />
                          <Typography variant="body2">24H監視</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Paper>
              </ScrollReveal>
            </Box>
          </GridItem>
        </GridContainer>

        {/* ⑥ 開発スタンス */}
        <Box mt={16} mb={8}>
          <ScrollReveal animation="fade">
            <Box textAlign="center" maxWidth={700} mx="auto">
              <Typography
                variant="h5"
                gutterBottom
                fontWeight="bold"
                sx={{ fontFamily: "var(--font-senobi-gothic)" }}
              >
                開発に対する考え方
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                ただ作るだけではなく、「使われる」ことを重視しています。
                小さく作って、ユーザーの反応を見ながら改善していくアジャイルな開発スタイルを推奨しています。
              </Typography>
            </Box>
          </ScrollReveal>
        </Box>

        {/* ⑦ CTA */}
        <ScrollReveal animation="fade">
          <Box
            textAlign="center"
            py={8}
            sx={{
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "#fff",
              borderRadius: 8,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "var(--font-senobi-gothic)" }}
            >
              まずは気軽にご相談ください
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              「こんなことできる？」といった段階からでも大歓迎です。
            </Typography>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 50,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  boxShadow: "0 8px 20px rgba(25, 118, 210, 0.3)",
                }}
              >
                無料相談する
              </Button>
            </Link>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

// --- Works Section ---
export const Works = () => {
  const theme = useTheme();
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <SectionHeader
          title="つくったもの"
          subtitle="Works"
          icon={<CodeIcon fontSize="small" />}
        />

        {/* 検索結果風のリスト表示 */}
        <Stack spacing={4} sx={{ maxWidth: 800, mx: "auto" }}>
          {[
            {
              title: "老舗旅館「山河」予約システム",
              tags: ["Next.js", "Booking"],
              desc: "複雑な宿泊プランを直感的に予約できるUIを実現。",
            },
            {
              title: "伝統工芸ECサイト「匠」",
              tags: ["Shopify", "Design"],
              desc: "職人の想いを伝えるストーリーテリング型EC。",
            },
            {
              title: "株式会社○○ コーポレートサイト",
              tags: ["WordPress", "Animation"],
              desc: "動きのある演出で企業の先進性をアピール。",
            },
          ].map((work, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 6,
                border: `1px solid ${theme.palette.divider}`,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
                alignItems: "center",
                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transform: "scale(1.01)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: 160 },
                  height: 100,
                  bgcolor: "#f5f5f5",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  Image
                </Typography>
              </Box>
              <Box sx={{ flex: 1, width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "var(--font-senobi-gothic)",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                    }}
                  >
                    {work.title}
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {work.desc}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {work.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        fontSize: "0.7rem",
                        bgcolor: "#eef",
                        color: "#55a",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 10,
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Paper>
          ))}
        </Stack>

        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 50,
              px: 5,
              py: 1.5,
              fontFamily: "var(--font-senobi-gothic)",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            すべての実績を見る
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// --- Pricing Section ---
export const Pricing = () => {
  const theme = useTheme();

  const plans = [
    {
      title: "Water Plan",
      concept: "柔軟",
      description:
        "必要な時に必要な分だけ。\n上限設定で予算オーバーの心配もありません。",
      priceDisplay: "従量課金",
      features: [
        "使った分だけの支払い",
        "上限予算の設定可能",
        "スポットでの依頼に最適",
        "無駄のないコスト管理",
      ],
      icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.info.main,
      bgColor:
        theme.palette.mode === "dark" ? "rgba(2, 136, 209, 0.1)" : "#e1f5fe",
    },
    {
      title: "Ice Plan",
      concept: "安定",
      description:
        "毎月決まった工数を確保。\n計画的な開発や保守運用におすすめです。",
      priceDisplay: "月額固定",
      features: [
        "毎月決まった工数の確保",
        "計画的な機能追加",
        "優先的なリソース配分",
        "安定した開発スケジュール",
      ],
      icon: <AcUnitIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
      bgColor:
        theme.palette.mode === "dark" ? "rgba(25, 118, 210, 0.1)" : "#e3f2fd",
    },
    {
      title: "Air Plan",
      concept: "伴走",
      description:
        "初期費用を抑えてスタート。\n運用まで含めたトータルサポートプラン。",
      priceDisplay: "制作割安 + サブスク",
      features: [
        "初期制作費を大幅に抑制",
        "継続的な運用改善サポート",
        "システムの見守り・保守",
        "長期的なパートナーシップ",
      ],
      icon: <AirIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main,
      bgColor:
        theme.palette.mode === "dark" ? "rgba(46, 125, 50, 0.1)" : "#e8f5e9",
    },
  ];

  return (
    <Box py={12} sx={{ bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <ScrollReveal animation="fade">
          <Box mb={8} textAlign="center">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "var(--font-senobi-gothic)",
                fontWeight: 700,
              }}
            >
              Pricing
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              お客様の状況やニーズに合わせて、最適な3つのプランをご用意しました。
            </Typography>
          </Box>
        </ScrollReveal>

        <GridContainer>
          {plans.map((plan, index) => (
            <GridItem key={plan.title} xs={12} md={4}>
              <ScrollReveal animation="fade" delay={index * 200}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 8,
                    border: `1px solid ${theme.palette.divider}`,
                    position: "relative",
                    overflow: "hidden",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[4],
                      borderColor: plan.color,
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bgcolor: plan.bgColor,
                      color: plan.color,
                      px: 3,
                      py: 1,
                      borderBottomLeftRadius: 20,
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {plan.concept}
                  </Box>

                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: plan.bgColor,
                      color: plan.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    {plan.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "var(--font-senobi-gothic)",
                      fontWeight: 700,
                      color: plan.color,
                    }}
                  >
                    {plan.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "1.1rem",
                    }}
                  >
                    {plan.priceDisplay}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, minHeight: "3em", whiteSpace: "pre-line" }}
                  >
                    {plan.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature) => (
                      <Box
                        component="li"
                        key={feature}
                        sx={{ mb: 1, typography: "body2" }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </ScrollReveal>
            </GridItem>
          ))}
        </GridContainer>

        <Box textAlign="center" mt={8}>
          <Typography variant="body1" color="text.secondary" paragraph>
            どのプランが最適か迷われている場合は、お気軽にご相談ください。
            <br />
            ヒアリングの上、最適なプランをご提案させていただきます。
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/contact"
            sx={{
              mt: 2,
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              fontFamily: "var(--font-senobi-gothic)",
              boxShadow: theme.shadows[4],
            }}
          >
            無料相談・お問い合わせ
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
