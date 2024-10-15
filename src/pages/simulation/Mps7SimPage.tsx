import React from 'react'
import { IWeaponStats } from '../../models/IStats'
import { useAppSelector } from '../../hooks/redux'
import { simulationSlice } from '../../store/reducers/SimulationSlice'
import { WeaponDpsCard } from '../../components/weapon-dps-card/WeaponDpsCard'
import { WeaponDpsForm } from '../../components/weapon-dps-form/WeaponDpsForm'

export function Mps7SimPage() {
  const { mps7 } = useAppSelector(state => state.simulationReducer.stats)
  const { addMps7Stats } = simulationSlice.actions

  const initValues: IWeaponStats = {
    id: Date.now(),
    weakspotHitRate: 30,
    name: 'custom build №1',
    basicDamage: 152,
    fireRate: 850,
    magazineCapacity: 35,
    critRate: 8,
    critDamage: 30,
    weakspotDamage: 50,
    weaponDmgBonus: 0,
    normalEnemiesDamage: 0,
    damageResistance: 100,
    simulations: []
  }

  return (
    <div>
      <h2>Mps7SimPage</h2>
      <WeaponDpsForm initValues={initValues} addStats={addMps7Stats} />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mps7.map(stats => <WeaponDpsCard stats={stats} key={stats.id} />)}
      </div>
    </div>
  )

}
