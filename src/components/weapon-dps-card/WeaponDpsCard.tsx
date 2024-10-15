import React from 'react'
import classes from './WeaponDpsCard.module.css'
import { IWeaponStats } from '../../models/IStats'
import { simulationSlice } from '../../store/reducers/SimulationSlice';
import { useAppDispatch } from '../../hooks/redux';
import { getMps7Dps } from '../../utils/simulation';

interface WeaponDpsCardProps {
  stats: IWeaponStats
}

export function WeaponDpsCard({ stats }: WeaponDpsCardProps) {
  const { addMps7Simulation } = simulationSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={classes.card}>

      <div className={classes.card__info}>
        <h3>{stats.name}</h3>
        <p>DMG : {stats.basicDamage}</p>
        <p>Fire Rate : {stats.fireRate}</p>
        <p>Magazine Capacity : {stats.magazineCapacity}</p>
        <p>Crit Rate : {stats.critRate}</p>
        <p>Crit  DMG : {stats.basicDamage}</p>
        <p>Weakspot DMG : {stats.weakspotDamage}</p>
        <p>Weapon DMG Bonus : {stats.weaponDmgBonus}</p>
        <p>DMG Bonus against Common Enemies : {stats.normalEnemiesDamage}</p>
      </div>

      <div className={classes.card__simulation}>
        <button onClick={() => addSimulationHandler()} >Start simulation</button>

        {stats.simulations.map((elem, index) => <p key={index}>{elem.totalDamage}</p>)}
      </div>

    </div>
  )

  function addSimulationHandler() {
    const simulation = getMps7Dps(stats)

    dispatch(addMps7Simulation({ id: stats.id, value: simulation }))
  }
}
