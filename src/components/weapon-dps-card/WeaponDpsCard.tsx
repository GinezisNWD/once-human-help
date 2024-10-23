import { useState } from 'react'
import classes from './WeaponDpsCard.module.css'
import { combinedStats, ISimulationReport } from '../../models/IStats'
import { useAppDispatch } from '../../hooks/redux';
import { UnknownAction } from '@reduxjs/toolkit';
import { Modal } from '../UI/modal/Modal';
import { BasicSimulationReport } from '../basic-simulation-report/BasicSimulationReport';
import { AdvancedSimulationReport } from '../advanced-simulation-report/AdvancedSimulationReport';
import { PrimaryButton } from '../UI/primary-button/PrimaryButton';

interface WeaponDpsCardProps<T extends combinedStats> {
  stats: T;
  addSimulationAction: (payload: { id: number; value: ISimulationReport }) => UnknownAction;
  removeBuildAction: (id: number) => UnknownAction
  getDps: (stats: T) => ISimulationReport;
}

export function WeaponDpsCard<T extends combinedStats>({ stats, addSimulationAction, getDps, removeBuildAction }: WeaponDpsCardProps<T>) {

  const [modal, setModal] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <div className={classes.card}>
      <Modal visible={modal} setVisible={setModal}>
        <AdvancedSimulationReport reports={stats.simulations} />
      </Modal>

      <div className={classes.card__info}>
        <h3>{stats.name}</h3>
        <PrimaryButton onClick={() => removeBuildHandler()}>Remove build</PrimaryButton>
        <p>DMG : {stats.basicDamage}</p>
        <p>Fire Rate : {stats.fireRate}</p>
        <p>Magazine Capacity : {stats.magazineCapacity}</p>
        <p>Crit Rate : {stats.critRate}</p>
        <p>Crit  DMG : {stats.critDamage}</p>
        <p>Weakspot DMG : {stats.weakspotDamage}</p>
        <p>Weapon DMG Bonus : {stats.weaponDmgBonus}</p>
        <p>DMG Bonus against<br />Common Enemies : {stats.normalEnemiesDamage}</p>

        {'psiIntensity' in stats ? <p>Psi Intensity : {stats.psiIntensity}</p> : null}
        {'elementalDamage' in stats ? <p>Elemental DMG : {stats.elementalDamage}</p> : null}
        {'statusDamage' in stats ? <p>Status DMG : {stats.statusDamage}</p> : null}

      </div>

      <div className={classes.card__buttons}>
        <PrimaryButton onClick={() => addSimulationHandler()} >Start simulation</PrimaryButton>
        <PrimaryButton onClick={() => setModal(true)} >Detailed report</PrimaryButton>
      </div>

      <div className={classes.card__simulations}>
        {stats.simulations.map((elem, index) => <BasicSimulationReport report={elem} key={index} />)}
      </div>

    </div>
  )

  function addSimulationHandler() {
    const simulation = getDps(stats)
    dispatch(addSimulationAction({ id: stats.id, value: simulation }))
  }

  function removeBuildHandler() {
    const id = stats.id
    dispatch(removeBuildAction(id))
  }

}
