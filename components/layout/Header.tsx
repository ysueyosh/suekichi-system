"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useTheme,
  // useMediaQuery, // 未使用
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

const NAV_ITEMS = [
  { label: "トップ", path: "/" },
  { label: "特徴", path: "/features" },
  { label: "サービス", path: "/services" },
  { label: "実績", path: "/works" },
  { label: "料金", path: "/pricing" },
  { label: "お問い合わせ", path: "/contact" },
];

export const Header = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 未使用なのでコメントアウト
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: "bold",
          fontFamily: "var(--font-senobi-gothic)",
        }}
      >
        スエキチシステム
      </Typography>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{
                textAlign: "center",
                bgcolor:
                  pathname === item.path ? "action.selected" : "transparent",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "var(--font-senobi-gothic)",
                  fontWeight: pathname === item.path ? 700 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {/* スマホメニュー内にもThemeSwitcherなどを配置する場合はここに */}
      </List>
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">
          天候・時間帯の手動設定は画面右上の設定ボタンから行えます。
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        zIndex: theme.zIndex.drawer + 1,
        borderRadius: 0,
        background:
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.8)"
            : "rgba(0,0,0,0.6)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* ロゴエリア (PC) */}
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "var(--font-senobi-gothic)",
              fontWeight: 900,
              letterSpacing: ".05rem",
              textDecoration: "none",
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            {/* スエキチ - 青色 */}
            <Box component="span" sx={{ color: "#0055AA", mr: 0.5 }}>
              スエキチ
            </Box>
            {/* システム - 黒色 */}
            <Box component="span" sx={{ color: "#000000" }}>
              システム
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* ロゴエリア (スマホ) */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "var(--font-senobi-gothic)",
              fontWeight: 700,
              letterSpacing: ".05rem",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Box component="span" sx={{ color: "#0055AA" }}>
              スエキチ
            </Box>
            <Box component="span" sx={{ color: "#000000" }}>
              システム
            </Box>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.path}
                sx={{
                  my: 2,
                  color: "text.primary",
                  display: "block",
                  fontFamily: "var(--font-senobi-gothic)",
                  fontWeight: pathname === item.path ? 700 : 500,
                  borderBottom:
                    pathname === item.path
                      ? `2px solid ${theme.palette.primary.main}`
                      : "2px solid transparent",
                  borderRadius: 0,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.05)",
                    borderBottom: `2px solid ${theme.palette.primary.light}`,
                  },
                  padding: "6px 0",
                  minWidth: "auto",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box ml={2}>
            <ThemeSwitcher />
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
