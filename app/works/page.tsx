import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { worksData, WorkCategory } from "../../lib/works";
import { WorksList } from "../../components/works/WorksList";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import BusinessIcon from "@mui/icons-material/Business";
import WebIcon from "@mui/icons-material/Web";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const metadata = {
  title: "Works | SUEKICHI SYSTEM",
  description: "開発実績一覧",
};

const categories: { id: WorkCategory; label: string; icon: React.ReactNode }[] =
  [
    { id: "internal-system", label: "社内システム", icon: <BusinessIcon /> },
    { id: "web-site-app", label: "Webサイト・アプリ", icon: <WebIcon /> },
    { id: "mobile-app", label: "スマホアプリ", icon: <SmartphoneIcon /> },
    { id: "ai-solution", label: "AIソリューション", icon: <PsychologyIcon /> },
  ];

export default function WorksPage() {
  return (
    <Box pt={8} component="main">
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
                Works
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                これまでの開発実績をご紹介します。
              </Typography>
            </Box>
          </ScrollReveal>

          <Box display="flex" flexDirection="column" gap={12}>
            {categories.map((category) => {
              const categoryWorks = worksData.filter(
                (work) => work.category === category.id,
              );

              if (categoryWorks.length === 0) return null;

              return (
                <Box key={category.id} id={category.id}>
                  <ScrollReveal animation="fade">
                    <Box display="flex" alignItems="center" gap={1.5} mb={4}>
                      <Box sx={{ color: "primary.main", display: "flex" }}>
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        component="h2"
                        fontWeight="bold"
                        sx={{ fontFamily: "var(--font-senobi-gothic)" }}
                      >
                        {category.label}
                      </Typography>
                    </Box>
                  </ScrollReveal>

                  <WorksList works={categoryWorks} />

                  <Divider
                    sx={{ mt: 8, display: { xs: "block", md: "none" } }}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
