export interface basicShot {
  damage: number,
  isCrit: boolean;
  isWeakspot: boolean;
}

export interface advancedShot {
  damage: number;
  additionalArray?: basicShot[];
  isCrit: boolean;
  isWeakspot: boolean;
  isKeywordTriggered?: boolean;
  keywordDamage?: number | null;
  isKeywordCrit?: boolean;
  isKeywordWeakspot?: boolean;
}

export interface ISimulationReport {
  totalDamage: number;
  weaponDamage: number;
  elementalDamage?: number;
  detailedDpsCheck: advancedShot[];
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
  statusDamage: number;
  elementalDamage: number;
}

export interface IAcs12CorrosionStats extends IElementalStats {
  triggerChance?: number;
  powerSurgeCritRate?: number;
  powerSurgeCritDamage?: number;
  damageFactor?: number;
}

export type combinedStats = IWeaponStats | IElementalStats | IAcs12CorrosionStats
