import React from "react";
import { Text as RNText } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { theme, IColors } from "../../constants/Theme";
import { layout } from "../../constants/Layout";

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof typeof layout.textVariants;
  color?: keyof IColors;
}

const Text = ({ style, variant, color, ...rest }: TextProps) => {
  const themeName = useAppSelector((state) => state.theme.name);

  return (
    <RNText
      style={[
        color && {
          color: theme[themeName][color],
        },
        variant && layout.textVariants[variant],
        style,
      ]}
      {...rest}
    />
  );
};

export default Text;
