const palette = {
  purple: "#5A31F4",
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#0B0B0B",
  white: "#F0F2F3",
  gray: "gray",
  lightGray: "#ded3d3"
};

export const theme = {
  light: {
    background: palette.lightGray,
    foreground: palette.white,
    primary: palette.black,
    secondary: palette.gray,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  dark: {
    background: palette.black,
    foreground: palette.black,
    primary: palette.white,
    secondary: palette.gray,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
};

export type IColors = typeof theme["light"];

