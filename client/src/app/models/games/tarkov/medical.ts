import { Item } from './item';

interface Effect {
  duration: number;
  delay?: number;
}

interface Pain extends Effect {
  removesPain: boolean;
}

interface Contusion extends Effect {
  removesContusion: boolean;
}

interface Health extends Effect {
  regeneratesHealth: boolean;
  regerationStrength: number;

  boostHealth: boolean;
  boostEffect: number;
}

interface Metabolism extends Effect {
  boostMetabolism: boolean;
  boostEffect: number;
}

interface Vitality extends Effect {
  boostVitality: boolean;
  boostEffect: number;
}

interface HandTremor { }
interface TunnelVision { }

export interface Medical extends Item {
  useTime: number;
  pain: Pain;
  contusion: Contusion;
  health: Health;
  metabolism: Metabolism;
  vitality: Vitality;
  handTremor: HandTremor;
  tunnelVision: TunnelVision;
}