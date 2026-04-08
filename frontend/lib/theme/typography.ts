import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    senobi: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    senobi?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    senobi: true;
  }
}

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    'var(--font-senobi-gothic)',
    'var(--font-noto-sans-jp)',
    'sans-serif',
  ].join(','),
  h1: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  h2: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  h3: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  h4: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  h5: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  h6: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  body1: { fontFamily: 'var(--font-senobi-gothic)' },
  body2: { fontFamily: 'var(--font-senobi-gothic)' },
  button: { fontFamily: 'var(--font-senobi-gothic)', fontWeight: 700 },
  caption: { fontFamily: 'var(--font-senobi-gothic)' },
};
