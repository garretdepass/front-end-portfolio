export const theme = {
  colors: {
    // Purples
    purple_0: "#1F0024",
    purple_100: "#6D27E7",
    purple_200: "#5C64D4",
    purple_300: "#A48FFF",
    purple_400: "#D7CEFF",
    purple_500: "#EBE7FF",

    // Pinks
    pink_300: "#E53673",

    // Neutrals
    neutral_0: "#000000",
    neutral_500: "#F2EFEF",
    neutral_600: "#FFFFFF",
  },

  fontSizes: {
    xsmall: "16px",
    // (0.66rem)
    small: "18px",
    // (0.75rem)
    base: "24px",
    large: "32px",
    // (1.33rem)
    xlarge: "40px",
    // (1.6rem)
    display_small: "72px",
    // (3rem)
    display_med: "216px",
    // (9rem)
    display_large: "336px",
    // (14rem)
  },

  fontFamily: {
    base: '"Inter", sans-serif',
    code: '"Anonymous Pro", monospace',
  },

  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    wrapperSidePadding: "160px",
    maxWidth: "1440px",
  },
};

// export const theme = {
//   colors: {
//     primary: "#0070f3",
//     secondary: "#1c1c1e",
//     accent: "#ff4081",
//     background: "#ffffff",
//     text: "#333333"
//   },
//   spacing: {
//     xs: "4px",
//     sm: "8px",
//     md: "16px",
//     lg: "32px",
//     xl: "64px"
//   },
//   fontSizes: {
//     small: "12px",
//     base: "16px",
//     large: "24px",
//     xlarge: "32px"
//   }
// };

export type ThemeType = typeof theme;
