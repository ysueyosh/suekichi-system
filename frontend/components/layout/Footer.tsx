'use client';

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f5f5f5',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between',
          }}
        >
          {/* Main Brand Column */}
          <Box sx={{ flex: '1 1 300px', maxWidth: '100%' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-senobi-gothic)',
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              スエキチシステム
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              企業品質を、個人価格で。
              <br />
              あなたのビジネスを加速させるWebパートナー。
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                color="error"
                aria-label="YouTube"
                component="a"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Instagram"
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Links Column */}
          <Box sx={{ flex: '0 1 200px' }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: 'var(--font-senobi-gothic)' }}
            >
              Service
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover">
                Web開発
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                UIデザイン
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                技術顧問
              </Link>
            </Stack>
          </Box>

          {/* Links Column */}
          <Box sx={{ flex: '0 1 200px' }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: 'var(--font-senobi-gothic)' }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover">
                会社概要
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                採用情報
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                お問い合わせ
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Suekichi System. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
