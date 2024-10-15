import React, { useState } from 'react'
import { IWeaponStats } from '../../models/IStats'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { simulationSlice } from '../../store/reducers/SimulationSlice'
import { WeaponDpsCard } from '../../components/weapon-dps-card/WeaponDpsCard'

export function Mps7SimPage() {
  const { mps7 } = useAppSelector(state => state.simulationReducer.stats)
  const { addMps7Stats } = simulationSlice.actions
  const dispatch = useAppDispatch()
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

  const [values, setValues] = useState(initValues)


  return (
    <div>
      <h2>Mps7SimPage</h2>
      <form onSubmit={(event) => submitFormHandler(event)}>
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <label>Weakspot Hit Rate
            <input type="number" value={values.weakspotHitRate} onChange={(event) => changeHandler(event, `weakspotHitRate`)} />
          </label>
          <label>Name
            <input type="text" value={values.name} onChange={(event) => changeHandler(event, `name`)} />
          </label>
          <label>DMG
            <input type="number" value={values.basicDamage} onChange={(event) => changeHandler(event, `basicDamage`)} />
          </label>
          <label>Fire Rate
            <input type="number" value={values.fireRate} onChange={(event) => changeHandler(event, `fireRate`)} />
          </label>
          <label>Magazine Capacity
            <input type="number" value={values.magazineCapacity} onChange={(event) => changeHandler(event, `magazineCapacity`)} />
          </label>
          <label>Crit Rate
            <input type="number" value={values.critRate} onChange={(event) => changeHandler(event, `critRate`)} />
          </label>
          <label>Crit DMG
            <input type="number" value={values.critDamage} onChange={(event) => changeHandler(event, `critDamage`)} />
          </label>
          <label>Weakspot DMG
            <input type="number" value={values.weakspotDamage} onChange={(event) => changeHandler(event, `weakspotDamage`)} />
          </label>
          <label>Weapom DMG Bonus
            <input type="number" value={values.weaponDmgBonus} onChange={(event) => changeHandler(event, `weaponDmgBonus`)} />
          </label>
          <label>DMG Bonus against Common Enemies
            <input type="number" value={values.normalEnemiesDamage} onChange={(event) => changeHandler(event, `normalEnemiesDamage`)} />
          </label>
        </div>

        <button type='submit'>Добавить сборку</button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mps7.map(stats => <WeaponDpsCard stats={stats} key={stats.id} />)}
      </div>
    </div>
  )


  function changeHandler(event: React.ChangeEvent<HTMLInputElement>, value: string) {
    const newValue = event.target.value

    if (value === 'name') {
      setValues({ ...values, [value]: newValue })
      return
    }

    const floatValue = parseFloat(newValue)

    if (isNaN(floatValue)) {
      setValues({ ...values, [value]: '' })
      return
    }

    setValues({ ...values, [value]: floatValue })
  }

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    setValues({ ...values, id: Date.now() })
    event.preventDefault()
    dispatch(addMps7Stats(values))
  }
}
