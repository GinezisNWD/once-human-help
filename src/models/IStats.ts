export interface ISimulationReport {
  totalDamage: number;
  weaponDamage: number;
  elementalDamage: number | null;
  detailedDpsCheck: {
    damage: number;
    isCrit: boolean;
    isWeakspot: boolean;
  }[];
}

export interface IWeaponStats {
  id: number;
  weakspotHitRate: number;
  name: string;
  basicDamage: number;
  fireRate: number;
  magazineCapacity: number;
  critRate: number;
  critDamage: number;
  weaponDmgBonus: number;
  weakspotDamage: number;
  normalEnemiesDamage: number;
  damageResistance: number;
  simulations: ISimulationReport[]
}

export interface IElementalStats extends IWeaponStats {
  psiIntensity: number;
  psiMultiplier: number;
  elementalDamage: number;
  statusDamage: number;
}

export interface IAcs12CorrosionStats extends IElementalStats {
  triggerChance?: number;
  powerSurgeCritRate?: number;
  powerSurgeCritDamage?: number;
  damageFactor?: number;
}

export type combinedStats = IWeaponStats | IElementalStats | IAcs12CorrosionStats
