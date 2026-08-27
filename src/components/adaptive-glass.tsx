import {
  GlassContainer,
  GlassView,
  isGlassEffectAPIAvailable,
  isLiquidGlassAvailable,
  type GlassContainerProps,
  type GlassViewProps,
} from 'expo-glass-effect';
import { View, type ColorValue, type ViewProps } from 'react-native';

const canRenderLiquidGlass = isGlassEffectAPIAvailable() && isLiquidGlassAvailable();

type AdaptiveGlassProps = ViewProps & {
  colorScheme?: GlassViewProps['colorScheme'];
  fallbackColor: ColorValue;
  glassEffectStyle?: GlassViewProps['glassEffectStyle'];
  isInteractive?: boolean;
  tintColor?: string;
};

export function AdaptiveGlass({
  colorScheme,
  fallbackColor,
  glassEffectStyle = 'regular',
  isInteractive = false,
  style,
  tintColor,
  ...props
}: AdaptiveGlassProps) {
  if (canRenderLiquidGlass) {
    return (
      <GlassView
        colorScheme={colorScheme}
        glassEffectStyle={glassEffectStyle}
        isInteractive={isInteractive}
        style={style}
        tintColor={tintColor}
        {...props}
      />
    );
  }

  return <View style={[{ backgroundColor: fallbackColor }, style]} {...props} />;
}

export function AdaptiveGlassContainer({ children, spacing, style, ...props }: GlassContainerProps) {
  if (canRenderLiquidGlass) {
    return (
      <GlassContainer spacing={spacing} style={style} {...props}>
        {children}
      </GlassContainer>
    );
  }

  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
}
