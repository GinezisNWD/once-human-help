import { advancedShot, IAcs12CorrosionStats, ISimulationReport, IWeaponStats } from "../models/IStats";

export function isCrit(critRate: number) {
  return critRate >= Math.random() * 100
}

export function isWeakspot(weakspotHitRate: number) {
  return weakspotHitRate >= Math.random() * 100
}

export function isTriggered(triggerChance: number) {
  return triggerChance >= Math.random() * 100
}


export function getMps7Dps(stats: IWeaponStats) {
  const copyStats = structuredClone(stats)
  const result: ISimulationReport = {
    totalDamage: 0,
    weaponDamage: 0,
    detailedDpsCheck: []
  }

  for (let i = 0; i < copyStats.magazineCapacity; i++) {
    const hit = {
      damage: 0,
      isCrit: isCrit(copyStats.critRate),
      isWeakspot: isWeakspot(copyStats.weakspotHitRate),
    }
    hit.damage = getDamagePerHit(copyStats, hit.isCrit, hit.isWeakspot)
    result.detailedDpsCheck.push(hit)
  }

  result.weaponDamage = result.detailedDpsCheck.reduce((acc, elem) => acc + elem.damage, 0)

  result.totalDamage = result.weaponDamage

  return result
}

export function getAcs12CorrosionDps(stats: IAcs12CorrosionStats) {
  const copyStats = structuredClone(stats)
  const result: ISimulationReport = {
    totalDamage: 0,
    weaponDamage: 0,
    elementalDamage: 0,
    detailedDpsCheck: []
  }

  let powerSurgeCritDamageStacks = 0
  const powerSurgeCritDamageLimitStacks = 10

  for (let i = 0; i < copyStats.magazineCapacity; i++) {
    const shot: advancedShot = {
      damage: 0,
      isCrit: false,
      isWeakspot: false,
      keywordDamage: 0,
      additionalArray: [],
      isKeywordTriggered: isTriggered(copyStats.triggerChance || 0),
      isKeywordCrit: false,
      isKeywordWeakspot: false,
    }

    for (let y = 0; y < 5; y++) {
      const hit = {
        damage: 0,
        isCrit: isCrit(copyStats.critRate),
        isWeakspot: isWeakspot(copyStats.weakspotHitRate),
      }
      hit.damage = getDamagePerHit(copyStats, hit.isCrit, hit.isWeakspot)
      shot.additionalArray!.push(hit)
    }

    if (shot.isKeywordTriggered) {
      shot.isKeywordCrit = isCrit(copyStats.critRate + (copyStats.powerSurgeCritRate || 0))
      shot.keywordDamage = getAcs12CorrosionPowerSurgeDamage(copyStats, shot.isKeywordCrit, powerSurgeCritDamageStacks)
    }

    if (shot.isKeywordTriggered && powerSurgeCritDamageStacks < powerSurgeCritDamageLimitStacks) {
      powerSurgeCritDamageStacks += 1
    }

    shot.damage = shot.additionalArray!.reduce((acc, elem) => acc + elem.damage, 0)
    result.detailedDpsCheck.push(shot)
  }

  result.weaponDamage = result.detailedDpsCheck.reduce((acc, elem) => acc + elem.damage, 0)
  result.elementalDamage = result.detailedDpsCheck.reduce((acc, elem) => acc + (elem.keywordDamage || 0), 0)
  result.totalDamage = result.weaponDamage + (result.elementalDamage || 0)

  console.log(result);
  return result
}


export function getDamagePerHit(stats: IWeaponStats, isCrit: boolean, isWeakspot: boolean) {
  const additionalCritDMG = stats.basicDamage * stats.critDamage / 100
  const additionalWeakspotDMG = stats.basicDamage * stats.weakspotDamage / 100
  const multiplierWeaponDmgBonus = (stats.weaponDmgBonus + 100) / 100
  const multiplierNormalEnemiesDamage = (stats.normalEnemiesDamage + 100) / 100
  const multiplierDamageResistance = stats.damageResistance / 100
  let damagePerHit: number

  if (isCrit && isWeakspot) {
    damagePerHit = (stats.basicDamage + additionalCritDMG + additionalWeakspotDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerHit)
  } else if (isCrit) {
    damagePerHit = (stats.basicDamage + additionalCritDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerHit)
  } else if (isWeakspot) {
    damagePerHit = (stats.basicDamage + additionalWeakspotDMG)
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerHit)
  } else {
    damagePerHit = stats.basicDamage
      * multiplierWeaponDmgBonus
      * multiplierNormalEnemiesDamage
      * multiplierDamageResistance

    return Math.round(damagePerHit)
  }
}

export function getAcs12CorrosionPowerSurgeDamage(
  stats: IAcs12CorrosionStats,
  isCrit: boolean,
  powerSurgeCritDamageStacks: number) {
  const multiplierNormalEnemiesDamage = (stats.normalEnemiesDamage + 100) / 100
  const multiplierPsi = stats.psiMultiplier / 100
  const multiplierStatusDmgBonus = (stats.statusDamage + 100) / 100
  const multiplierElementalDmgBonus = (stats.elementalDamage + 100) / 100
  const multiplierDMGFactor = ((stats.damageFactor || 0) + 100) / 100
  const additionalCritDMG = (stats.critDamage + (stats.powerSurgeCritDamage || 0) * powerSurgeCritDamageStacks) / 100
  const powerSurgeDamage = (stats.psiIntensity * multiplierPsi)
    * multiplierStatusDmgBonus * multiplierElementalDmgBonus * multiplierDMGFactor * multiplierNormalEnemiesDamage

  if (isCrit) {
    const powerSurgeCritDamage = powerSurgeDamage + (powerSurgeDamage * additionalCritDMG)
    return Math.round(powerSurgeCritDamage)
  }

  return Math.round(powerSurgeDamage)
}
