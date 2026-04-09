import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Works | SUEKICHI SYSTEM',
  description: '主要な開発実績を1ページで紹介',
};

type WorkItem = {
  title: string;
  summary: string;
  tags: string[];
};

type WorkCategory = {
  label: string;
  works: WorkItem[];
};

const workCategories: WorkCategory[] = [
  {
    label: 'AI・アプリ開発',
    works: [
      {
        title: 'AI株価スマホアプリ開発',
        summary:
          'ニュース要約とテクニカル指標を組み合わせ、投資判断を支援するアプリを開発。必要情報を短時間で把握できるUIで継続利用率を向上。',
        tags: ['AI', 'スマホアプリ', '金融'],
      },
      {
        title: 'AI面談補助システム開発',
        summary:
          '面談メモの要約、評価観点の整理、次回アクション提案までを支援。面談品質を均一化し、マネージャーの準備時間を最適化。',
        tags: ['AI', '人事', '業務支援'],
      },
      {
        title: 'AI画像解析システム開発',
        summary:
          '画像から対象物を自動検出し、判定結果をダッシュボードで可視化。目視確認の工数を削減し、判定の再現性を高めた。',
        tags: ['AI', '画像解析', '業務効率化'],
      },
    ],
  },
  {
    label: '業務システム開発',
    works: [
      {
        title: '勤怠管理Webアプリ開発',
        summary:
          '打刻、申請、承認、集計までを一元化。月末の締め作業を大幅に短縮し、管理者と現場の負担を同時に減らした業務改善プロジェクト。',
        tags: ['Webアプリ', '業務改善', '勤怠管理'],
      },
      {
        title: '社内VBAシステム開発',
        summary:
          'Excel業務を自動化し、日次レポート作成やデータ整形をボタン操作へ集約。属人化していた作業を標準化し、ミスと残業を削減。',
        tags: ['VBA', '自動化', '社内システム'],
      },
      {
        title: '大会管理システム開発',
        summary:
          '参加登録、組み合わせ、進行管理、結果公開を一体化。運営フローを可視化し、当日のオペレーションミスを最小化した。',
        tags: ['イベント', '管理システム', 'Web'],
      },
      {
        title: '体育館自動予約アプリ開発',
        summary:
          '空き枠確認から予約確定、通知までを自動化。二重予約や手動連絡の手間を削減し、利用者と管理者の双方で使いやすさを実現。',
        tags: ['予約システム', '業務システム', '自動化'],
      },
    ],
  },
  {
    label: 'Web制作・支援',
    works: [
      {
        title: 'ホームページ・LP開発',
        summary:
          '事業の強みが直感的に伝わる情報設計で、問い合わせ導線を最適化。デザインと実装を一貫して行い、CV改善につなげた。',
        tags: ['Web制作', 'LP', 'CV改善'],
      },
      {
        title: 'ノーコード・ローコード開発指導',
        summary:
          '現場チーム向けに要件整理から実装運用まで伴走。内製化を前提に、短期間で成果を出すための実践型トレーニングを提供。',
        tags: ['内製化', '教育', 'ノーコード'],
      },
    ],
  },
];

export default function WorksPage() {
  return (
    <Box pt={8} component="main">
      <Box py={12} sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <ScrollReveal animation="fade">
            <Box mb={8} textAlign="center">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: 'var(--font-senobi-gothic)',
                  fontWeight: 700,
                }}
              >
                Works
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                主要な開発実績をご紹介します。
              </Typography>
            </Box>
          </ScrollReveal>

          <Stack spacing={7}>
            {workCategories.map((category, categoryIndex) => (
              <Box key={category.label}>
                <ScrollReveal animation="fade" delay={categoryIndex * 90}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontFamily: 'var(--font-senobi-gothic)',
                      fontWeight: 700,
                      mb: 2.5,
                    }}
                  >
                    {category.label}
                  </Typography>
                </ScrollReveal>

                <Stack spacing={3}>
                  {category.works.map((work, workIndex) => (
                    <ScrollReveal
                      key={work.title}
                      animation="fade"
                      delay={workIndex * 70}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 3, md: 4 },
                          borderRadius: 4,
                          border: '1px solid',
                          borderColor: 'divider',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontFamily: 'var(--font-senobi-gothic)',
                            fontWeight: 700,
                            mb: 1.5,
                          }}
                        >
                          {work.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.9, mb: 2 }}
                        >
                          {work.summary}
                        </Typography>

                        <Box display="flex" flexWrap="wrap" gap={1}>
                          {work.tags.map((tag) => (
                            <Chip
                              key={`${work.title}-${tag}`}
                              label={tag}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(25,118,210,0.10)',
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </ScrollReveal>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
