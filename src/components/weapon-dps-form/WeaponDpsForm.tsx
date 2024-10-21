import { useState } from 'react'
import classes from './WeaponDpsForm.module.css'
import { IWeaponStats } from '../../models/IStats'
import { useAppDispatch } from '../../hooks/redux'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { PrimaryButton } from '../UI/primary-button/PrimaryButton'

interface WeaponDpsFormProps {
  initValues: IWeaponStats
  addStats: ActionCreatorWithPayload<IWeaponStats>
}

export function WeaponDpsForm({
  initValues,
  addStats
}: WeaponDpsFormProps) {


  const [values, setValues] = useState(initValues)
  const dispatch = useAppDispatch()

  return (
    <form
      className={classes.form}
      onSubmit={(event) => submitFormHandler(event)}
      onReset={() => setValues(initValues)}>

      <div className={classes.form__row}>
        <div className={classes.form__column}>
          <label className={classes.form__label}>Weakspot Hit Rate
            <input className={classes.form__input} type="number" value={values.weakspotHitRate} onChange={(event) => changeHandler(event, `weakspotHitRate`)} />
          </label>
          <label className={classes.form__label}>Name
            <input className={classes.form__input} type="text" value={values.name} onChange={(event) => changeHandler(event, `name`)} />
          </label>
          <label className={classes.form__label}>DMG
            <input className={classes.form__input} type="number" value={values.basicDamage} onChange={(event) => changeHandler(event, `basicDamage`)} />
          </label>
          <label className={classes.form__label}>Fire Rate
            <input className={classes.form__input} type="number" value={values.fireRate} onChange={(event) => changeHandler(event, `fireRate`)} />
          </label>
          <label className={classes.form__label}>Magazine Capacity
            <input className={classes.form__input} type="number" value={values.magazineCapacity} onChange={(event) => changeHandler(event, `magazineCapacity`)} />
          </label>
          <label className={classes.form__label}>Crit Rate
            <input className={classes.form__input} type="number" value={values.critRate} onChange={(event) => changeHandler(event, `critRate`)} />
          </label>
          <label className={classes.form__label}>Crit DMG
            <input className={classes.form__input} type="number" value={values.critDamage} onChange={(event) => changeHandler(event, `critDamage`)} />
          </label>
          <label className={classes.form__label}>Weakspot DMG
            <input className={classes.form__input} type="number" value={values.weakspotDamage} onChange={(event) => changeHandler(event, `weakspotDamage`)} />
          </label>
          <label className={classes.form__label}>Weapom DMG Bonus
            <input className={classes.form__input} type="number" value={values.weaponDmgBonus} onChange={(event) => changeHandler(event, `weaponDmgBonus`)} />
          </label>
          <label className={classes.form__label}>DMG Bonus against Common Enemies
            <input className={classes.form__input} type="number" value={values.normalEnemiesDamage} onChange={(event) => changeHandler(event, `normalEnemiesDamage`)} />
          </label>
        </div>
      </div>

      <div className={classes.form__buttons}>
        <PrimaryButton type='submit'>Add build</PrimaryButton>
        <PrimaryButton type='reset'>Clear Form</PrimaryButton>
      </div>
    </form>
  )

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValues({ ...values, id: Date.now() })
    dispatch(addStats(values))
  }

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
}
