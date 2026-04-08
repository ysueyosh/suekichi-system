"use client";

import React from "react";
import { Box } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

const RandomStar = () => {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    setStyle({
      position: "absolute" as const,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      background: "white",
      borderRadius: "50%",
      opacity: Math.random() * 0.7 + 0.3,
      boxShadow: "0 0 4px rgba(255,255,255,0.8)",
      animation: `twinkle ${3 + Math.random() * 4}s infinite ease-in-out`,
    });
  }, []);

  if (Object.keys(style).length === 0) return null;
  return <div style={style} />;
};

const RandomRainDrop = ({ isNight }: { isNight: boolean }) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    setStyle({
      left: `${Math.random() * 100}%`,
      animationDuration: `${0.5 + Math.random() * 0.5}s`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: (isNight ? 0.1 : 0.2) + Math.random() * 0.3,
      height: `${15 + Math.random() * 20}px`,
      background: isNight
        ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(200, 220, 255, 0.4))"
        : "linear-gradient(to bottom, rgba(174, 194, 224, 0), rgba(100, 140, 230, 0.6))",
    });
  }, [isNight]);

  if (Object.keys(style).length === 0) return null;
  return <div className="rain-drop" style={style} />;
};

export const BackgroundEffect = () => {
  const { weather, timeOfDay } = useThemeContext();

  const getEffectStyle = () => {
    const styles: React.CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 100,
      pointerEvents: "none",
      overflow: "hidden",
    };
    return styles;
  };

  return (
    <Box sx={getEffectStyle()}>
      {/* --- Day Mode (Light) --- */}
      {timeOfDay === "day" && (
        <>
          {/* Sunny Day */}
          {weather === "sunny" && (
            <div className="weather-effect sunny day">
              <div className="sun-flare" />
              <div className="sun-ray-container">
                <div className="sun-ray r1" />
                <div className="sun-ray r2" />
                <div className="sun-ray r3" />
              </div>
            </div>
          )}

          {/* Cloudy Day */}
          {weather === "cloudy" && (
            <div className="weather-effect cloudy" style={{ opacity: 0.8 }}>
              <div
                className="cloud c1"
                style={{ top: "15%", animationDuration: "60s" }}
              />
              <div
                className="cloud c2"
                style={{ top: "35%", animationDuration: "80s" }}
              />
            </div>
          )}

          {/* Rainy Day */}
          {weather === "rainy" && (
            <div className="weather-effect rainy">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(200, 210, 230, 0.4)",
                  pointerEvents: "none",
                }}
              />
              {[...Array(30)].map((_, i) => (
                <RandomRainDrop key={i} isNight={false} />
              ))}
            </div>
          )}
        </>
      )}

      {/* --- Night Mode (Dark) --- */}
      {timeOfDay === "night" && (
        <>
          {/* Night Base Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              // background: 'rgba(10, 20, 60, 0.25)', // Removed explicitly, let theme handle bg
              pointerEvents: "none",
              zIndex: -2,
            }}
          />

          {/* Sunny Night (Clear Sky with Moon/Stars) */}
          {weather === "sunny" && (
            <div className="weather-effect night-clear">
              {[...Array(90)].map((_, i) => (
                <RandomStar key={i} />
              ))}
              <div
                className="moon"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, #fff, #f4e7c3)",
                  boxShadow: "0 0 40px rgba(255, 255, 200, 0.4)",
                }}
              />
            </div>
          )}

          {/* Cloudy Night */}
          {weather === "cloudy" && (
            <div className="weather-effect cloudy-night">
              <div
                className="cloud c1"
                style={{ top: "15%", opacity: 0.4, filter: "brightness(0.7)" }}
              />
              <div
                className="cloud c2"
                style={{ top: "35%", opacity: 0.3, filter: "brightness(0.7)" }}
              />
            </div>
          )}

          {/* Rainy Night */}
          {weather === "rainy" && (
            <div className="weather-effect rainy-night">
              {[...Array(30)].map((_, i) => (
                <RandomRainDrop key={i} isNight={true} />
              ))}
            </div>
          )}
        </>
      )}
    </Box>
  );
};
