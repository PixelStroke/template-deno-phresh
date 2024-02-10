export type GameSettings = {
  size: {
    width: number;
    height: number;
  };
};

export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  vertical = "vertical",
  horizontal = "horizontal",
}

export interface AnimationProps {
  amplitude?: number;
  smallAmplitude?: number;
  frequency?: number;
  fastFrequency?: number;
  originalY?: number;
  heartbeatFrequency?: number;
  minScale?: number;
  maxScale?: number;
  scaleRange?: number;
  baseScale?: number;
}

export interface OscillationAnimationProps {
  amplitude: number;
  frequency: number;
  position: Position;
  smallAmplitude: number;
  fastFrequency: number;
}

export interface HeartbeatAnimationProps {
  baseScale: number;
  scaleRange: number;
  frequency: number;
}

export interface AssetConfig {
  name: string;
  path: string;
  backgroundColor?: number;
  position: Position;
  animationProps?: OscillationAnimationProps | HeartbeatAnimationProps;
}
