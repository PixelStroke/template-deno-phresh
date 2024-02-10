/// <reference types="../phaser.d.ts" />

import Phaser from "phaser";
import { Direction, Position } from "../types.ts";

// The AnimationStrategy interface is used to define the contract for all animation strategies.
export interface AnimationStrategy {
  apply(gameObject: Phaser.GameObjects.Image, time: number): void;
}

// The OscillationAnimation class is an implementation of the AnimationStrategy interface.
interface OscillationAnimationParams {
  amplitude: number;
  frequency: number;
  position: Position;
  smallAmplitude?: number;
  fastFrequency?: number;
  direction?: Direction;
}

// The OscillationAnimation class is an implementation of the AnimationStrategy interface.
// It is used to create an oscillation animation for a game object.
// The amplitude and frequency properties are used to control the size and speed of the oscillation.
// The position property is used to set the starting position of the game object.
// The smallAmplitude and fastFrequency properties are used to create a secondary oscillation effect.
// The direction property is used to control the direction of the oscillation.
export class OscillationAnimation implements AnimationStrategy {
  private amplitude: number;
  private frequency: number;
  private position: Position;
  private smallAmplitude: number;
  private fastFrequency: number;
  private direction: Direction;

  constructor({
    amplitude,
    frequency,
    position,
    smallAmplitude = 0,
    fastFrequency = 0,
    direction = Direction.vertical,
  }: OscillationAnimationParams) {
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.position = position;
    this.smallAmplitude = smallAmplitude;
    this.fastFrequency = fastFrequency;
    this.direction = direction;
  }

  apply(gameObject: Phaser.GameObjects.Image, time: number): void {
    const mainOscillation = this.amplitude * Math.sin(this.frequency * time);
    const fastOscillation = this.smallAmplitude *
      Math.sin(this.fastFrequency * time);
    if (this.direction === Direction.horizontal) {
      gameObject.x = this.position.x + mainOscillation +
        fastOscillation;
    } else {
      gameObject.y = this.position.y + mainOscillation +
        fastOscillation;
    }
  }
}

// The HeartbeatAnimation class is an implementation of the AnimationStrategy interface.
interface HeartbeatAnimationParams {
  baseScale: number;
  scaleRange: number;
  frequency: number;
}

// The HeartbeatAnimation class is an implementation of the AnimationStrategy interface.
// It is used to create a heartbeat animation for a game object.
// The baseScale and scaleRange properties are used to control the size of the game object.
// The frequency property is used to control the speed of the heartbeat.
export class HeartbeatAnimation implements AnimationStrategy {
  private baseScale: number;
  private scaleRange: number;
  private frequency: number;
  constructor({
    baseScale,
    scaleRange,
    frequency,
  }: HeartbeatAnimationParams) {
    this.baseScale = baseScale;
    this.scaleRange = scaleRange;
    this.frequency = frequency;
  }

  apply(gameObject: Phaser.GameObjects.Image, time: number): void {
    gameObject.scale = Math.abs(
      (this.baseScale + this.scaleRange) / 4 +
        Math.sin(time * this.frequency * 2),
    );
  }
}
