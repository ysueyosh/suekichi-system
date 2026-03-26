"use client";

import React, { useRef } from "react";
import { Box, Fade, Slide, Zoom, Grow, SxProps, Theme } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade" | "slide" | "zoom" | "grow";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  sx?: SxProps<Theme>;
  offset?: string; // rootMargin like '-50px'
}

export const ScrollReveal = ({
  children,
  animation = "fade",
  direction = "up",
  delay = 0,
  duration = 1000,
  sx = {},
  offset = "0px",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: offset,
  });

  let TransitionComponent: React.ElementType = Fade;
  let transitionProps: {
    timeout: number;
    direction?: "up" | "down" | "left" | "right";
  } = { timeout: duration };

  if (animation === "slide") {
    TransitionComponent = Slide;
    transitionProps = { ...transitionProps, direction };
  } else if (animation === "zoom") {
    TransitionComponent = Zoom;
  } else if (animation === "grow") {
    TransitionComponent = Grow;
  }

  return (
    <Box ref={ref} sx={{ ...sx }}>
      <TransitionComponent
        in={inView}
        style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
        {...transitionProps}
      >
        <Box>{children}</Box>
      </TransitionComponent>
    </Box>
  );
};
