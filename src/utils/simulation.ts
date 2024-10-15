import { IWeaponStats } from "../models/IStats";

export function isCrit(critRate: number) {
  return critRate >= Math.random() * 100
}

export function isWeakspot(weakspotHitRate: number) {
  return weakspotHitRate >= Math.random() * 100
}

export function getDamagePerShot(stats: IWeaponStats, isCrit: boolean, isWeakspot: boolean) {
  const additionalCritDMG = stats.basicDamage * stats.critDamage / 100
  const additionalWeakspotDMG = stats.basicDamage * stats.weakspotDamage / 100
  const multiplierWeaponDmgBonus = (stats.weaponDmgBonus + 100) / 100
  const multiplierNormalEnemiesDamage = (stats.normalEnemiesDamage + 100) / 100
  const multiplierDamageResistance = stats.damageResistance / 100
  let damagePerShot: number

  if (isCrit && isWeakspot) {
    damagePerShot = (stats.basicDamage + additionalCritDMG + additionalWeakspotDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerShot)
  } else if (isCrit) {
    damagePerShot = (stats.basicDamage + additionalCritDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerShot)
  } else if (isWeakspot) {
    damagePerShot = (stats.basicDamage + additionalWeakspotDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerShot)
  } else {
    damagePerShot = stats.basicDamage
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerShot)
  }
}

export function getMps7Dps(stats: IWeaponStats) {
  const copyStats = structuredClone(stats)
  const detailedDpsCheck = []

  for (let i = 0; i < copyStats.magazineCapacity; i++) {
    const shot = {
      damage: 0,
      isCrit: isCrit(copyStats.critRate),
      isWeakspot: isWeakspot(copyStats.weakspotHitRate)
    }
    shot.damage = getDamagePerShot(copyStats, shot.isCrit, shot.isWeakspot)
    detailedDpsCheck.push(shot)
  }

  const totalDamage = detailedDpsCheck.reduce((acc, elem) => acc + elem.damage, 0)

  return { totalDamage, detailedDpsCheck }
}
