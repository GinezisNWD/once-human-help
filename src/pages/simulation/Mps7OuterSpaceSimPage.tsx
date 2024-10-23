import { CombinedDpsForm } from "../../components/combined-dps-form/CombinedDpsForm"
import { WeaponDpsCardList } from "../../components/weapon-dps-card-list/WeaponDpsCardList"
import { WeaponDpsCard } from "../../components/weapon-dps-card/WeaponDpsCard"
import { useAppSelector } from "../../hooks/redux"
import { IMps7OuterSpaceStats } from "../../models/IStats"
import { simulationSlice } from '../../store/reducers/simulationSlice'
import { getMps7OuterSpaceDps } from "../../utils/simulation"

export function Mps7OuterSpaceSimPage() {

  const { mps7OuterSpace } = useAppSelector(state => state.simulationReducer.stats)
  const { addMps7OuterSpaceStats, addMps7OuterSpaceSimulation, removeMps7OuterSpacestats } = simulationSlice.actions

  const initValues: IMps7OuterSpaceStats = {
    id: Date.now(),
    weakspotHitRate: 30,
    name: 'custom build №1',
    basicDamage: 192,
    fireRate: 850,
    magazineCapacity: 35,
    critRate: 8,
    critDamage: 30,
    weakspotDamage: 50,
    weaponDmgBonus: 0,
    normalEnemiesDamage: 0,
    damageResistance: 95,

    psiIntensity: 125,
    psiMultiplier: 50,
    elementalDamage: 0,
    statusDamage: 0,

    triggerChance: 25,

    simulations: [],
  }


  return (
    <div>
      <h2>Mps7OuterSpaceSimPage</h2>
      <CombinedDpsForm isElemental={true} initValues={initValues} addStats={addMps7OuterSpaceStats} />

      <WeaponDpsCardList>
        {mps7OuterSpace.map(stats => <WeaponDpsCard
          stats={stats}
          addSimulationAction={addMps7OuterSpaceSimulation}
          removeBuildAction={removeMps7OuterSpacestats}
          getDps={getMps7OuterSpaceDps}
          key={stats.id}
        />)}
      </WeaponDpsCardList>
    </div>
  )
}


// Mps7OuterSpace
