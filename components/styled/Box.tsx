import React from "react";
import { View, ViewStyle } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { theme, IColors } from "../../constants/Theme";
import { layout } from "../../constants/Layout";

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof layout.spacing;
  margin?: keyof typeof layout.spacing;
  backgroundColor?: keyof IColors;
}

const Box = ({
  style,
  padding,
  margin,
  backgroundColor,
  ...rest
}: BoxProps & ViewStyle) => {
  const themeName = useAppSelector((state) => state.theme.name);
  return (
    <View
      style={[
        margin && { margin: layout.spacing[margin] },
        padding && { padding: layout.spacing[padding] },
        backgroundColor && {
          backgroundColor: theme[themeName][backgroundColor],
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default Box;
