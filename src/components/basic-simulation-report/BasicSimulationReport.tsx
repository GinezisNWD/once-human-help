import classes from './BasicSimulationReport.module.css'
import { ISimulationReport } from '../../models/IStats'

interface BasicSimulationReportProps {
  report: ISimulationReport
}

export function BasicSimulationReport({ report }: BasicSimulationReportProps) {
  return (
    <div className={classes.report}>
      <p>Total: {report.totalDamage}</p>
      <p>Weapon damage: {report.weaponDamage}</p>
      {report.elementalDamage ? <p>Elemental damage: {report.elementalDamage}</p> : null}
    </div>
  )
}
