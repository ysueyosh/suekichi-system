"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Work } from "../../lib/works";

interface WorksCardProps {
  work: Work;
}

export const WorksCard: React.FC<WorksCardProps> = ({ work }) => {
  const theme = useTheme();

  return (
    <Link href={`/works/${work.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme.shadows[8],
          },
          border: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        {/* ダミー画像のプレースホルダーとしてBoxを使用 */}
        <Box
          sx={{
            height: 200,
            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            fontSize: "2rem",
          }}
        >
          {/* 画像があれば以下のようにImageコンポーネントを使用 */}
          {/* <Image src={work.imageUrl} alt={work.title} fill style={{ objectFit: "cover" }} /> */}
          🖼️ Image
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box mb={2}>
            {work.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                }}
              />
            ))}
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            fontWeight="bold"
            sx={{ fontFamily: "var(--font-senobi-gothic)" }}
          >
            {work.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {work.summary}
          </Typography>

          <Box
            sx={{
              mt: "auto",
              pt: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="body2"
              color="primary"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              詳細を見る <ArrowForwardIcon fontSize="small" />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
