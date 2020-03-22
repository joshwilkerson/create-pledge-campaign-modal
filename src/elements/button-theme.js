import colors from "../colors";
import convertColor from "color";

const darken = color => {
  return convertColor(color)
    .darken(0.1)
    .hsl()
    .string();
};

const lighten = (color, amount) => {
  return convertColor(color)
    .lighten(amount)
    .hsl()
    .string();
};

export const ButtonThemes = {
  primary: {
    background: colors.topaz,
    backgroundHover: darken(colors.topaz),
    text: colors.white,
    outline: {
      background: "transparent",
      backgroundHover: lighten(colors.topaz, 0.6),
      text: colors.topaz,
      border: colors.topaz
    }
  },
  secondary: {
    background: colors.gray_400,
    backgroundHover: colors.gray_500,
    text: colors.gray_800,
    outline: {
      background: "transparent",
      backgroundHover: colors.gray_50,
      text: colors.gray_600,
      border: colors.gray_600
    }
  },
  disabled: {
    background: colors.gray_400,
    backgroundHover: colors.gray_400,
    text: colors.gray_200,
    outline: {
      background: "transparent",
      backgroundHover: "transparent",
      text: colors.gray_500,
      border: colors.gray_500
    }
  },
  danger: {
    background: colors.ruby,
    backgroundHover: colors.ruby,
    text: colors.white
  },
  highlighted: {
    background: colors.emerald,
    backgroundHover: darken(colors.emerald),
    text: colors.white
  }
};
