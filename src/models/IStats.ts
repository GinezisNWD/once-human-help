export interface IWeaponStats {
  basicDamage: number;
  critDamage: number;
  weakspotDamage: number;
  normalEnemiesDamage: number;
  demageResistance: number;
}


export interface IElementalStats extends IWeaponStats {
  psiIntensity: number;
  multiplier: number;
  elementalDamage: number;
  statusDamage: number;
  specDamageBonus: number;
  damageFactor: number

}
