export const theme = Object.freeze({
  colors: {
    primary: '#F6F7FB',
    text: '#242A37',
    title: '#757575',
    icon: '#757575',
    accent: '#FF6B08',
    background: 'rgba(43, 43, 43, 0.1)',
    border: '#E0E5EB',
    error: '#F25137',
  },
  shadow: {
    modal: '10px 10px 20px rgba(9, 30, 63, 0.2)',
    box: '0px 2px 3px rgba(9, 30, 63, 0.1)',
  },

  spacing: (value: number) => `${2 * value}px`,

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  letterSpacings: {
    body: 'normal',
    caps: '0.1em',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },
});
