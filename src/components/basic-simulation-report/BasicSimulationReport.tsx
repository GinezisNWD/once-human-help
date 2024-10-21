import classes from './BasicSimulationReport.module.css'
import { ISimulationReport } from '../../models/IStats'

interface BasicSimulationReportProps {
  report: ISimulationReport
}

export function BasicSimulationReport({ report }: BasicSimulationReportProps) {
  return (
    <div className={classes.report}>
      <p>total: {report.totalDamage}</p>
      <p>weapon damage: {report.weaponDamage}</p>
      {report.elementalDamage ? <p>elemental damage: {report.elementalDamage}</p> : null}
    </div>
  )
}
