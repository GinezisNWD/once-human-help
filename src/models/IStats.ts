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
  simulations: string[]
}


export interface IElementalStats extends IWeaponStats {
  psiIntensity: number;
  multiplier: number;
  elementalDamage: number;
  statusDamage: number;
  specDamageBonus: number;
  damageFactor: number

}
