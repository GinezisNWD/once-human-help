import { ISimulationReport } from '../../models/IStats'

interface BasicSimulationReportProps {
  report: ISimulationReport
}

export function BasicSimulationReport({ report }: BasicSimulationReportProps) {
  return (
    <div style={{ border: '1px solid black', padding: ' 0 5px' }}>
      <p>total: {report.totalDamage}</p>
      <p>weapon damage: {report.weaponDamage}</p>
      {report.elementalDamage ? <p>elemental damage: {report.elementalDamage}</p> : null}
    </div>
  )
}
