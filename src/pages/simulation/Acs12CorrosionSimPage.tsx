import { useAppSelector } from '../../hooks/redux'
import { IAcs12CorrosionStats } from '../../models/IStats'
import { WeaponDpsCard } from '../../components/weapon-dps-card/WeaponDpsCard'
import { CombinedDpsForm } from '../../components/combined-dps-form/CombinedDpsForm'
import { getAcs12CorrosionDps } from '../../utils/simulation'
import { simulationSlice } from '../../store/reducers/simulationSlice'
import { WeaponDpsCardList } from '../../components/weapon-dps-card-list/WeaponDpsCardList'

export function Acs12CorrosionSimPage() {
  const { acs12corrosion } = useAppSelector(state => state.simulationReducer.stats)
  const { addAcs12CorrosionStats, addAcs12CorrosionSimulation, removeAcs12Corrosionstats } = simulationSlice.actions

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
      <CombinedDpsForm isElemental={true} initValues={initValues} addStats={addAcs12CorrosionStats} />

      <WeaponDpsCardList>
        {acs12corrosion.map(stats => <WeaponDpsCard
          stats={stats}
          addSimulationAction={addAcs12CorrosionSimulation}
          removeBuildAction={removeAcs12Corrosionstats}
          getDps={getAcs12CorrosionDps}
          key={stats.id}
        />)}
      </WeaponDpsCardList>
    </div>
  )
}
