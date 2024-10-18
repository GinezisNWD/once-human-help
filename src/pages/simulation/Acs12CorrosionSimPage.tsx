import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { IAcs12CorrosionStats } from '../../models/IStats'
import { simulationSlice } from '../../store/reducers/SimulationSlice'
import { WeaponDpsCard } from '../../components/weapon-dps-card/WeaponDpsCard'
import { ElementalDpsForm } from '../../components/elemental-dps-form/ElementalDpsForm'
import { getAcs12CorrosionDps } from '../../utils/simulation'

export function Acs12CorrosionSimPage() {
  const { acs12corrosion } = useAppSelector(state => state.simulationReducer.stats)
  const { addAcs12CorrosionStats, addAcs12CorrosionSimulation } = simulationSlice.actions

  const initValues: IAcs12CorrosionStats = {
    id: Date.now(),
    weakspotHitRate: 30,
    name: 'custom build №1',
    basicDamage: 210,
    fireRate: 180,
    magazineCapacity: 18,
    critRate: 8,
    critDamage: 27,
    weakspotDamage: 15,
    weaponDmgBonus: 0,
    normalEnemiesDamage: 0,
    damageResistance: 95,

    psiIntensity: 121,
    psiMultiplier: 50,
    elementalDamage: 0,
    statusDamage: 0,
    // указан на пухе
    damageFactor: 15,

    triggerChance: 70,
    powerSurgeCritRate: 15,
    powerSurgeCritDamage: 15,

    simulations: [],
  }

  return (
    <div>
      <h2>Acs12CorrosionSimPage</h2>
      <ElementalDpsForm initValues={initValues} addStats={addAcs12CorrosionStats} />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {acs12corrosion.map(stats => <WeaponDpsCard
          stats={stats}
          addSimulationAction={addAcs12CorrosionSimulation}
          getDps={getAcs12CorrosionDps}
          key={stats.id}
        />)}
      </div>
    </div>
  )
}
