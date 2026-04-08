"use client";

import React, { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Popover,
  Switch, // added
  Tooltip, // added
  Collapse, // added
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useThemeContext } from "../../contexts/ThemeContext";
import { Weather } from "../../hooks/useWeather";
import { TimeOfDay } from "../../hooks/useTimeOfDay";

export const ThemeSwitcher = () => {
  const {
    weather,
    setWeather,
    timeOfDay,
    setTimeOfDay,
    isManual,
    toggleManual,
  } = useThemeContext();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "theme-switcher-popover" : undefined;

  const handleWeatherChange = (
    event: React.MouseEvent<HTMLElement>,
    newWeather: string | null,
  ) => {
    if (newWeather !== null) {
      setWeather(newWeather as Weather);
    }
  };

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTime: string | null,
  ) => {
    if (newTime !== null) {
      setTimeOfDay(newTime as TimeOfDay);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <SettingsIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Paper
          sx={{
            p: 2,
            minWidth: 280,
            // Ensure solid background in both light and dark modes
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#1e1e1e" : "background.paper",
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 20px rgba(0,0,0,0.5)"
                : "0 4px 20px rgba(0,0,0,0.1)",
          }}
          elevation={0}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Theme Settings
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Auto Mode
            </Typography>
            <Switch
              checked={!isManual}
              onChange={toggleManual}
              color="primary"
            />
          </Box>

          <Collapse in={isManual}>
            <Divider sx={{ my: 2 }} />

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Weather
            </Typography>
            <ToggleButtonGroup
              value={weather}
              exclusive
              onChange={handleWeatherChange}
              aria-label="weather"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            >
              <ToggleButton value="sunny">
                <Tooltip title="Sunny">
                  <WbSunnyIcon fontSize="small" />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="cloudy">
                <Tooltip title="Cloudy">
                  <CloudIcon fontSize="small" />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="rainy">
                <Tooltip title="Rainy">
                  <UmbrellaIcon fontSize="small" />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Mode
            </Typography>
            <ToggleButtonGroup
              value={timeOfDay}
              exclusive
              onChange={handleTimeChange}
              aria-label="time of day"
              fullWidth
              size="small"
            >
              <ToggleButton value="day">
                <Tooltip title="Light Mode">
                  <LightModeIcon fontSize="small" />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="night">
                <Tooltip title="Dark Mode">
                  <DarkModeIcon fontSize="small" />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Collapse>

          {!isManual && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1, fontStyle: "italic" }}
            >
              System time & API weather applied.
            </Typography>
          )}
        </Paper>
      </Popover>
    </>
  );
};
