"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { Work } from "../../lib/works";
import { WorksCard } from "./WorksCard";
import { ScrollReveal } from "../ui/ScrollReveal";

interface WorksListProps {
  works: Work[];
}

export const WorksList: React.FC<WorksListProps> = ({ works }) => {
  return (
    <Grid container spacing={4}>
      {works.map((work, index) => (
        <Grid key={work.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <ScrollReveal animation="fade" delay={index * 100}>
            <WorksCard work={work} />
          </ScrollReveal>
        </Grid>
      ))}
    </Grid>
  );
};
