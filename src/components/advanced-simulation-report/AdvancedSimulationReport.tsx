import { ISimulationReport } from '../../models/IStats'

interface AdvancedSimulationReportProps { reports: ISimulationReport[] }

export function AdvancedSimulationReport({ reports }: AdvancedSimulationReportProps) {

  return (
    <div>
      {reports.map(report => {
        return (
          <div>
            <div>
              Total: {report.totalDamage} Weapon Damage: {report.weaponDamage} Elemental Damage: {report.elementalDamage}
            </div>

            <div style={{ display: 'flex', border: '1px solid black', padding: '2px' }}>
              {report.detailedDpsCheck.map((elem, index) => (
                <div style={{ border: '1px solid black', padding: '2px' }}>
                  <div>{index + 1}</div>
                  <div>{elem.damage}</div>
                  <div style={{ color: 'blue' }}> {elem.keywordDamage || ''}</div>


                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
