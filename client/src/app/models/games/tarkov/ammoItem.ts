import { Item } from './item';

export type LowChance = "Low";
export type MedChance = "Medium";
export type HighChance = "High";
export type MisfireChance = LowChance | MedChance | HighChance;
export type FailureToFeedChance = LowChance | MedChance | HighChance;

export interface Ammo extends Item {
  bulletVelocity: number;
  caliber: string;
  accuracy: number;
  recoil: number;
  durabilityBurn: number;
  heat: number;
  misFireChance: MisfireChance;
  failureToFeedChance: FailureToFeedChance;
}
