import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BuildIcon from '@mui/icons-material/Build';
import { worksData } from '../../../lib/works';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = worksData.find((w) => w.id === id);
  if (!work) return { title: 'Works Detail' };
  return {
    title: `${work.title} | SUEKICHI SYSTEM`,
    description: work.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = worksData.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  return (
    <Box py={12} component="main">
      <Container maxWidth="md">
        <ScrollReveal animation="fade">
          <div>
            <Box mb={6}>
              <Link href="/works" passHref style={{ textDecoration: 'none' }}>
                <Button startIcon={<ArrowBackIcon />}>一覧に戻る</Button>
              </Link>
            </Box>

            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ fontFamily: 'var(--font-senobi-gothic)' }}
            >
              {work.title}
            </Typography>

            <Box display="flex" gap={1} flexWrap="wrap" mb={4}>
              {work.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>

            {/* 画像エリア（ダミー） */}
            <Paper
              elevation={0}
              sx={{
                height: 400,
                bgcolor: 'action.hover', // theme aware
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 8,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h4" color="text.secondary">
                Project Image
              </Typography>
            </Paper>

            <Box mb={8}>
              <Typography
                variant="h5"
                gutterBottom
                fontWeight="bold"
                sx={{
                  borderLeft: '6px solid',
                  borderColor: 'primary.main',
                  pl: 2,
                }}
              >
                プロジェクト概要
              </Typography>
              <Typography variant="body1" paragraph lineHeight={1.8}>
                {work.detail}
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 8,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
              }}
            >
              <Box mb={4}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <ErrorOutlineIcon color="error" />
                  <Typography variant="h6" fontWeight="bold">
                    課題
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {work.problem}
                </Typography>
              </Box>

              <Divider sx={{ my: 4 }} />

              <Box mb={4}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <BuildIcon color="info" />
                  <Typography variant="h6" fontWeight="bold">
                    解決策
                  </Typography>
                </Box>
                <List dense>
                  {work.solution.map((item, idx) => (
                    <ListItem key={idx} alignItems="flex-start">
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Divider sx={{ my: 4 }} />

              <Box>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <EmojiEventsIcon color="warning" />
                  <Typography variant="h6" fontWeight="bold">
                    結果
                  </Typography>
                </Box>
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                  {work.result}
                </Typography>
              </Box>
            </Paper>

            <Box>
              <Box display="flex" alignItems="center" gap={1} mb={3}>
                <CodeIcon />
                <Typography variant="h5" fontWeight="bold">
                  使用技術
                </Typography>
              </Box>
              <Box display="flex" gap={1} flexWrap="wrap">
                {work.techStack.map((tech) => (
                  <Chip key={tech} label={tech} sx={{ fontWeight: 500 }} />
                ))}
              </Box>
            </Box>
          </div>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
