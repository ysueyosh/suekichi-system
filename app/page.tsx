import { Hero } from "../components/sections/Hero";
import {
  ProblemSection,
  SolutionSection,
  FeaturesSection,
  VisualSection,
  StatsSection,
  CTASection,
} from "../components/sections/LandingSections";
import { ThemeSwitcher } from "../components/ui/ThemeSwitcher";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <VisualSection />
        <StatsSection />
        <CTASection />
      </Box>
    </>
  );
}
