import { CombinedDpsForm } from "../../components/combined-dps-form/CombinedDpsForm"
import { WeaponDpsCardList } from "../../components/weapon-dps-card-list/WeaponDpsCardList"
import { WeaponDpsCard } from "../../components/weapon-dps-card/WeaponDpsCard"
import { useAppSelector } from "../../hooks/redux"
import { ISocrOutsiderStats } from "../../models/IStats"
import { simulationSlice } from '../../store/reducers/simulationSlice'
import { getSocrOutsiderDps } from "../../utils/simulation"

export function SocrOutsiderSimPage() {
  const { socrOutsider } = useAppSelector(state => state.simulationReducer.stats)
  const { addSocrOutsiderStats, addSocrOutsiderSimulation, removeSocrOutsiderstats } = simulationSlice.actions

  const initValues: ISocrOutsiderStats = {
    id: Date.now(),
    weakspotHitRate: 30,
    name: 'custom build №1',
    basicDamage: 237,
    fireRate: 515,
    magazineCapacity: 30,
    critRate: 6,
    critDamage: 27,
    weakspotDamage: 60,
    weaponDmgBonus: 0,
    normalEnemiesDamage: 0,
    damageResistance: 100,

    psiIntensity: 125,
    psiMultiplier: 50,
    elementalDamage: 0,
    statusDamage: 0,

    triggerChance: 35,

    simulations: [],
  }


  return (
    <div>
      <h2>SocrOutsiderSimPage</h2>
      <CombinedDpsForm isElemental={true} initValues={initValues} addStats={addSocrOutsiderStats} />

      <WeaponDpsCardList>
        {socrOutsider.map(stats => <WeaponDpsCard
          stats={stats}
          addSimulationAction={addSocrOutsiderSimulation}
          removeBuildAction={removeSocrOutsiderstats}
          getDps={getSocrOutsiderDps}
          key={stats.id}
        />)}
      </WeaponDpsCardList>
    </div>

  )
}


// SocrOutsider
